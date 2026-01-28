var roi = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-115.24486490698925, 32.0280373070615],
          [-115.24486490698925, 28.383116295372716],
          [-111.81713053198925, 28.383116295372716],
          [-111.81713053198925, 32.0280373070615]]], null, false);


// ================================================================
// PACE OCI – NDCI & NDTI (Gulf of California) – Clean Version
// ================================================================

// 1. Load reference data
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

// 2. Define Gulf of California polygon
Map.centerObject(roi, 6);
Map.addLayer(roi, {color: 'yellow'}, 'Gulf ROI');

// 3. Load PACE OCI monthly global collection and filter by ROI and date
var oci = b.pace_oci_mt_global
            .filterBounds(roi)
            .filterDate('2024-06-01', '2025-06-30');  // <-- set your desired time range

// 4. Standard OCI wavelengths
var ociWavelengths = ee.List.sequence(350, 890, 5);

// 5. Helper: find closest band to a wavelength
function bandAtWavelength(img, targetNm) {
  var diffs = ociWavelengths.map(function(w) {
    return ee.Number(w).subtract(targetNm).abs();
  });
  var idx = diffs.indexOf(diffs.reduce(ee.Reducer.min()));
  return ee.String(img.bandNames().get(idx));
}

// 6. Compute NDCI & NDTI with land masking
function computeIndices(img) {
  var red   = bandAtWavelength(img, 665);
  var redE  = bandAtWavelength(img, 705);
  var nir   = bandAtWavelength(img, 865);
  var redN  = bandAtWavelength(img, 655);

  // NDCI
  var ndci = img.normalizedDifference([redE, red]).rename('NDCI');

  // NDTI
  var ndti = img.normalizedDifference([nir, redN]).rename('NDTI');

  // Mask land using NDCI threshold (land usually > 0.1)
  var waterMask = ndci.lt(0.1); 
  ndci = ndci.updateMask(waterMask);
  ndti = ndti.updateMask(waterMask);

  return img.addBands([ndci, ndti])
            .set('system:time_start', img.get('system:time_start'));
}

// Apply indices calculation
var oci_indices = oci.map(computeIndices);

// 7. Visualization parameters
var ndciVis = {min: -0.2, max: 0.6, palette: ['navy','blue','cyan','green','yellow','orange','red']};
var ndtiVis = {min: -0.2, max: 0.6, palette: ['brown','orange','yellow']};

// 8. Display all images with date, clipped to ROI
var size = oci_indices.size().getInfo();
var list = oci_indices.toList(size);

for (var i = 0; i < size; i++) {
  var img = ee.Image(list.get(i));
  var date = ee.Date(img.get('system:time_start')).format('YYYY-MM-dd').getInfo();
  
  // Clip to ROI
  var ndciClipped = img.select('NDCI').clip(roi);
  var ndtiClipped = img.select('NDTI').clip(roi);

  Map.addLayer(ndciClipped, ndciVis, 'NDCI ' + date, i === 0 ? 1 : 0);
  Map.addLayer(ndtiClipped, ndtiVis, 'NDTI ' + date, 0);
}

// 9. Optional: plot mean over water in Gulf
print(ui.Chart.image.series({
  imageCollection: oci_indices.select('NDCI'),
  region: roi,
  reducer: ee.Reducer.mean(),
  scale: 4000
}).setOptions({title: 'NDCI over Gulf of California', lineWidth: 2, pointSize: 4}));

print(ui.Chart.image.series({
  imageCollection: oci_indices.select('NDTI'),
  region: roi,
  reducer: ee.Reducer.mean(),
  scale: 4000
}).setOptions({title: 'NDTI over Gulf of California', lineWidth: 2, pointSize: 4}));
