var roi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-115.06908365698929, 32.073750186807395],
          [-115.04711100073929, 30.193112559874105],
          [-113.90453287573929, 28.71999767995372],
          [-113.39916178198929, 28.024004922630844],
          [-111.64134928198929, 29.085476385113413],
          [-112.84984537573929, 31.476011797688134]]]),
    roi2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-115.06908365698929, 32.073750186807395],
          [-115.04711100073929, 30.193112559874105],
          [-113.90453287573929, 28.71999767995372],
          [-113.39916178198929, 28.024004922630844],
          [-111.64134928198929, 29.085476385113413],
          [-112.84984537573929, 31.476011797688134]]]);

var roi = roi2; // your imported ROI

// ------------------------------------------------
// 1. Load PACE OCI reference data
// ------------------------------------------------
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

// ------------------------------------------------
// 2. Map ROI
// ------------------------------------------------
Map.centerObject(roi, 6);
Map.addLayer(roi, {color: 'yellow'}, 'Gulf of California');

// ------------------------------------------------
// 3. Load PACE OCI monthly collection
// ------------------------------------------------
var oci = b.pace_oci_mt_global
  .filterBounds(roi)
  .filterDate('2024-06-01', '2025-06-30');

// ------------------------------------------------
// 4. OCI wavelengths
// ------------------------------------------------
var ociWavelengths = ee.List.sequence(350, 890, 5);

// ------------------------------------------------
// 5. Helper: closest band to wavelength
// ------------------------------------------------
function bandAtWavelength(img, targetNm) {
  var diffs = ociWavelengths.map(function(w) {
    return ee.Number(w).subtract(targetNm).abs();
  });
  var idx = diffs.indexOf(diffs.reduce(ee.Reducer.min()));
  return ee.String(img.bandNames().get(idx));
}

// ------------------------------------------------
// 6. Hyperspectral processing
// ------------------------------------------------
function processOCI(img) {
  var r490 = img.select(bandAtWavelength(img, 490));
  var r560 = img.select(bandAtWavelength(img, 560));
  var r665 = img.select(bandAtWavelength(img, 665));
  var r705 = img.select(bandAtWavelength(img, 705));
  var r740 = img.select(bandAtWavelength(img, 740));
  var r865 = img.select(bandAtWavelength(img, 865));

  // Water mask
  var ndwiClassic = r560.subtract(r865).divide(r560.add(r865));
  var ndwiHyp = r560.subtract(r490.add(r665).divide(2));
  var waterMask = ndwiClassic.gt(0).or(ndwiHyp.gt(-0.005));

  // Chlorophyll indices
  var clh = r705.subtract(
              r665.add((r740.subtract(r665)).multiply(705 - 665).divide(740 - 665))
            ).divide(r705.add(r665).add(r740)).rename('CLH_norm');

  var ciGreen = r560.subtract(r490).divide(r560.add(r490)).rename('CI_green');

  var ndci = r705.subtract(r665).divide(r705.add(r665)).rename('NDCI');

  // Particle / turbidity indices
  var ndsmi = r705.subtract(r665).divide(r705.add(r665)).rename('NDSMI');
  var redNirSlope = r865.subtract(r665).divide(200).rename('RedNIR_slope');
  var tss = r665.divide(r560).log().rename('log_TSS');

  return img.addBands([
      ndwiClassic.rename('NDWI'),
      ndwiHyp.rename('NDWI_hyp'),
      clh,
      ciGreen,
      ndci,
      ndsmi,
      redNirSlope,
      tss
    ])
    .updateMask(waterMask)
    .set('system:time_start', img.get('system:time_start'));
}

// ------------------------------------------------
// 7. Apply processing
// ------------------------------------------------
var oci_hyp = oci.map(processOCI);

// ------------------------------------------------
// 8. Visualization parameters
// ------------------------------------------------
var clhVis = {min: -0.02, max: 0.05, palette: ['purple', 'blue', 'cyan', 'green', 'yellow', 'red']};
var ciVis = {min: -0.5, max: 0.5, palette: ['navy', 'blue', 'cyan', 'green', 'yellow']};
var ndsmiVis = {min: -0.2, max: 0.4, palette: ['blue', 'yellow', 'red']};
var slopeVis = {min: -0.001, max: 0.003, palette: ['blue', 'white', 'red']};

// ------------------------------------------------
// 9. Display layers
// ------------------------------------------------
var size = oci_hyp.size().getInfo();
var list = oci_hyp.toList(size);

for (var i = 0; i < size; i++) {
  var img = ee.Image(list.get(i));
  var date = ee.Date(img.get('system:time_start')).format('YYYY-MM-dd').getInfo();

  Map.addLayer(img.select('CLH_norm').clip(roi), clhVis, 'CLH_norm ' + date, i === 0);
  Map.addLayer(img.select('CI_green').clip(roi), ciVis, 'CI_green ' + date, false);
  Map.addLayer(img.select('NDSMI').clip(roi), ndsmiVis, 'NDSMI ' + date, false);
  Map.addLayer(img.select('RedNIR_slope').clip(roi), slopeVis, 'Red–NIR slope ' + date, false);
}

// ------------------------------------------------
// 10. Grouped time-series plots with horizontal legend
// ------------------------------------------------

// Chlorophyll-related indices
var chlChart = ui.Chart.image.series({
    imageCollection: oci_hyp.select(['CLH_norm','CI_green','NDCI']),
    region: roi,
    reducer: ee.Reducer.mean(),
    scale: 4000
  }).setOptions({
    title: 'Chlorophyll-related indices',
    lineWidth: 2,
    pointSize: 4,
    series: {
      0: {color: 'purple', label: 'CLH_norm'},
      1: {color: 'green',  label: 'CI_green'},
      2: {color: 'blue',   label: 'NDCI'}
    },
    hAxis: {title: 'Date'},
    vAxis: {title: 'Normalized index value'},
    legend: { position: 'bottom', textStyle: { fontSize: 12 } }
  });

// Particle / turbidity indices
var particleChart = ui.Chart.image.series({
    imageCollection: oci_hyp.select(['NDSMI','RedNIR_slope','log_TSS']),
    region: roi,
    reducer: ee.Reducer.mean(),
    scale: 4000
  }).setOptions({
    title: 'Particle / Turbidity-related indices',
    lineWidth: 2,
    pointSize: 4,
    series: {
      0: {color: 'orange', label: 'NDSMI'},
      1: {color: 'red',    label: 'Red–NIR slope'},
      2: {color: 'brown',  label: 'log_TSS'}
    },
    hAxis: {title: 'Date'},
    vAxis: {title: 'Relative / normalized units'},
    legend: { position: 'bottom', textStyle: { fontSize: 12 } }
  });

print(chlChart);
print(particleChart);
