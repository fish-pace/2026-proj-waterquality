<p align="center">
  <img src="https://images.seeklogo.com/logo-png/9/1/nasa-logo-png_seeklogo-97034.png" width="100" alt="NASA Logo"/>
  <img src="https://pace.gsfc.nasa.gov/images/pace_rotator_emblem_2160w_800h-3.jpg" width="300" alt="PACE-OCI Logo"/>
  <img src="https://images.seeklogo.com/logo-png/35/1/jupyter-logo-png_seeklogo-354673.png" width="100" alt="Jupyter Logo"/>
</p>



# PACE-Fish HackWeek 2026
## Water Quality parameters in the Northern Gulf of California

</div>


Welcome to our project! This repository contains data and analyses for the FishWeek water quality study in the Gulf of California.  
This study focuses on the use of hyperspectral data from the PACE-OCI mission to investigate the environmental changes experienced by the Gulf on a seasonal basis.

This site and all the materiales have been created for the "Fish-PACE Hackweek 2026" project. 

**Folder Structure**

* `contributor_folders` (optional) Each contributor can make a folder here and 
push their work here during the week. This will allow everyone to see each others work but prevent any merge conflicts.
* `final_notebooks` When the team develops shared final notebooks, they 
can be shared here. Make sure to communicate so that you limit merge conflicts.
* `scripts` Shared scripts or functions can be added here.
* `data` Shared dataset can be shared here. Note, do not put large datasets on GitHub. Speak to the organizers if you 
need to share large datasets. 

## Water Quality

## One-line Description

This project aims to evaluate the spatial and temporal dynamics of water quality in the Northern Gulf of California from June 2024 to June 2025 by integrating NASA’s Plankton, Aerosol, Cloud, ocean Ecosystem (PACE) hyperspectral imagery with other environmental datasets. Hyperspectral reflectance data from PACE will be processed to derive key optically-active water quality parameters, including chlorophyll-a concentration, colored dissolved organic matter (CDOM), and suspended particulate matter (SPM). The results will provide seasonal maps and time series highlighting variability in water quality across the Gulf, improving understanding of ecosystem responses to seasonal forcing and supporting long-term monitoring and management of this highly productive marine system.

## Study-Area

The Gulf of California (GC) is the only interior sea of the Eastern Pacific Ocean and represents the most important fishing area in the northwestern Pacific region. Its location in a temperate–tropical transition zone gives rise to complex climatic, oceanographic, and ecological conditions that strongly influence regional productivity and biodiversity.
A regionalization of the GC can be described based on three main influences: the northern region affected by discharge from the Colorado River, the central region dominated by island systems, and the southern entrance where two major ocean currents converge. In the upper Gulf, the influence of the Colorado River drives water quality patterns that vary seasonally; however, identifying specific anomalies in these patterns requires detailed in situ observations (Lopez-Martínez et al., 2023; Marín-Enriquez et al., 2024). 



## Planning

## Collaborators

| Name                         | Role                |
|------------------------------|---------------------|
| Jose Andres Vargas Solano    | Project Facilitator |
| Maria Emilia Rechimont       | Participant         |
| Andrea Rebeca Lara Cera      | Participant         |

## Planning

* Initial idea: "Water Quality - Pollution and Illegal Water Discharge Detection"
* Ideation jam board: Add link
* Ideation Presentation: Add link
* Slack channel: #proj-water-quality
* Project google drive: Add link
* Final presentation: Add link

## Background

## Goals

## Datasets

| Dataset                         | Variable                               |
|---------------------------------|----------------------------------------|
| PACE-Level-3-AOP                | Chla-Concentration                     |
| PACE-Level-3-mt-global          | Spectral-indexes                       |
| Temperature                     | Landsat-09 (Thermal Band-10)           |
| Nitrate (mmmol/m3)              | Copernicus Marine Services             |
| Phosphate (mmol/m3)             | Copernicus Marine Services             |
| Silicate (mmol/m3)              | Copernicus Marine Services             |


## Spectral-indexes (Multi and hyperspectral)

| Spectral index                              |  Formula                                                                                          | References                         |    
|---------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------|
| Normalized Difference Water Index           | $NDWI = \frac{R_{560} - R_{865}}{R_{560} + R_{865}}$                                              | McFeeters, S. K. (1996)            |
| Normalized Difference Turbidity Index       | $NDTI = \frac{R_{865} - R_{665}}{R_{865} + R_{665}}$                                              | Dogliotti et al. (2015)            |
| Normalized Difference Chlorophyll Index     | $NDCI = \frac{R_{705} - R_{665}}{R_{705} + R_{665}}$                                              | Mishra, S., & Mishra, D. R. (2012) |
| Total Suspended Solids Ratio                | $TSS\_r = \frac{R_{665}}{R_{560}}$                                                                | Ruddick et al. (2000)    |
| Chlorophyll Index (Green)                   | $CI_{green} = \frac{R_{560} - R_{490}}{R_{560} + R_{490}}$                                        | Gitelson, A. A., et al. (2003)     |
| Normalized Difference Suspended Matter Index| $NDSMI = \frac{R_{705} - R_{665}}{R_{705} + R_{665}}$                                             | Ruddick, K., et al. (2000).        |
| Normalized Chlorophyll Height               | $CLH = R_{705} - \left[ R_{665} + \frac{(R_{740} - R_{665}) \cdot (705 - 665)}{740 - 665} \right]$| Bramich et al. (2021)              |
| Normalized Maximum Chlorophyll Index        | $MCI_{norm} = \frac{R_{709} - \left[ R_{681} + \frac{(R_{753} - R_{681}) \cdot (709 - 681)}{753 - 681} \right]}{R_{681} + R_{709} + R_{753}}$| Gower et al. (2005)                |


## Workflow/Roadmap

Workflow Proposal for the Analysis of Water Quality Dynamics through Season 2024/25 in the Northern Gulf of California

<img width="1779" height="1188" alt="diagram-export-1-29-2026-12_54_27-PM" src="https://github.com/user-attachments/assets/a8f91089-10c1-45df-a027-4f954908428e" />


## Results/Findings

The main results of this study are presented below.

<b>1.</b> Chlorophyll mean concentration (mg/m³) by month in the Northern Gulf of California, Mexico, from June 2024 to June 2025.
<img width="668" height="407" alt="image" src="https://github.com/user-attachments/assets/5877ab3a-c151-41da-bed3-39c4f6ebb2ec" />

<b>2.</b> Chlorophyll mean concentration (mg/m³) (Transect) by month in the Northern Gulf of California, Mexico, from June 2024 to June 2025.
<img width="703" height="310" alt="image" src="https://github.com/user-attachments/assets/2cc3197e-ca71-4044-a7fa-c034935b1fd7" />

<b>3.</b> Mean water surface temperature (°C) in the Northern Gulf of California, Mexico, from June 2024 to June 2025.
<img width="870" height="355" alt="Screenshot 2026-01-30 at 15 25 29" src="https://github.com/user-attachments/assets/03f2f2de-5698-4c6d-a6e2-550dbd69a278" />

<b>4.</b> Mean water surface temperature (°C) in the Northern Gulf of California, Mexico, from June 2024 to June 2025.






## Lessons Learned

## Reference sites

<ol>
  <li></b> Awesome spectral indexes (Multispectral indexes library): 
    https://github.com/awesome-spectral-indices/awesome-spectral-indices</li>
  <li></b> The PACE OCI Toolkit (GEE cloud access) Level-3 Global: 
    https://github.com/BzGEO/pace_oci_toolkit/tree/main/_code_js</li>
  <li></b> Copernicus Marine Services (Nutrient concentration - Global Ocean Physics Analysis and Forecast): 
    https://data.marine.copernicus.eu/products?disc=facets&pk_vid=c1b283edb0316aa017697826397c99da</li>
</ol>


## References

<small>
<b>1.</b> McFeeters, S. K. (1996). The use of the Normalized Difference Water Index (NDWI) in remote sensing of vegetation and water features. International Journal of Remote Sensing, 17(7), 1425–1432. [DOI](https://doi.org/10.1080/01431169608948714)<br>
<b>2.</b> Dogliotti, A. I., Ruddick, K. G., Nechad, B., & Doxaran, D. (2015). A single algorithm to retrieve turbidity from remotely-sensed data in all coastal and estuarine waters. Remote Sensing of Environment, 156, 157–168. [DOI](https://doi.org/10.1016/j.rse.2014.09.020)<br>
<b>3.</b> Mishra, S., & Mishra, D. R. (2012). Normalized Difference Chlorophyll Index: A novel model for remote estimation of chlorophyll-a concentration in turbid productive waters. Remote Sensing of Environment, 117, 394–406. [DOI](https://doi.org/10.1016/j.rse.2011.10.016)<br>
<b>4.</b> Ruddick, K., Ovidio, F., & Rijkeboer, M. (2000). Atmospheric correction of SeaWiFS imagery for turbidity and chlorophyll retrieval in coastal waters. International Journal of Remote Sensing, 21(8), 1637–1651. [DOI](https://doi.org/10.1080/01431160050029498)<br>
<b>5.</b> Gitelson, A. A., Gritz, Y., & Merzlyak, M. N. (2003). Relationships between leaf chlorophyll content and spectral reflectance and algorithms for non-destructive chlorophyll assessment in higher plant leaves. Journal of Plant Physiology, 160(3), 271–282. [DOI](https://doi.org/10.1078/0176-1617-00887)<br>
<b>6.</b> Ruddick, K., et al. (2000). Atmospheric correction of SeaWiFS imagery for turbidity and chlorophyll retrieval in coastal waters. International Journal of Remote Sensing, 21(8), 1637–1651. [DOI](https://doi.org/10.1080/01431160050029498)<br>
<b>7.</b> Bramich, N. J., et al. (2021). A method for estimating chlorophyll content from reflectance spectra using the chlorophyll height technique. Remote Sensing, 13(9), 1738. [DOI](https://doi.org/10.3390/rs13091738)<br>
<b>8.</b>López-Martínez, J., Farach Espinoza, E. B., Herrera Cervantes, H., & García Morales, R. (2023). Long-Term Variability in Sea Surface Temperature and Chlorophyll a Concentration in the Gulf of California. Remote Sensing, 15(16), 4088. [DOI] (https://doi.org/10.3390/rs15164088)<br>
<b>9.</b>Marín-Enríquez, E., Cruz-Escalona, V. H., Enríquez-García, A. B., & Félix-Ortiz, J. A. (2024). Physical geographic regions in the Gulf of California defined using unsupervised learning algorithms. Regional Studies in Marine Science, 80, 103923. [DOI] (https://doi.org/10.1016/j.rsma.2024.103923)<br>
<b>10.</b>Marín‑Enríquez, E., Cruz‑Escalona, V. H., Enríquez‑García, A. B., & Félix‑Ortiz, J. A. (2024). Physical geographic regions in the Gulf of California defined using unsupervised learning algorithms. Regional Studies in Marine Science, 80, 103923. [DOI] (https://doi.org/10.1016/j.rsma.2024.103923)</small>





