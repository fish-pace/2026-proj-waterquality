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
| Salinity                        | Copernicus Marine Services             |

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


## Workflow/Roadmap

Workflow Proposal for the Analysis of Water Quality Dynamics through Season 2024/25 in the Northern Gulf of California

<img width="1779" height="1188" alt="diagram-export-1-29-2026-12_54_27-PM" src="https://github.com/user-attachments/assets/a8f91089-10c1-45df-a027-4f954908428e" />


## Results/Findings

## Lessons Learned

## References

<small>
<b>1.</b> McFeeters, S. K. (1996). The use of the Normalized Difference Water Index (NDWI) in remote sensing of vegetation and water features. International Journal of Remote Sensing, 17(7), 1425–1432. [DOI](https://doi.org/10.1080/01431169608948714)<br>
<b>2.</b> Dogliotti, A. I., Ruddick, K. G., Nechad, B., & Doxaran, D. (2015). A single algorithm to retrieve turbidity from remotely-sensed data in all coastal and estuarine waters. Remote Sensing of Environment, 156, 157–168. [DOI](https://doi.org/10.1016/j.rse.2014.09.020)<br>
<b>3.</b> Mishra, S., & Mishra, D. R. (2012). Normalized Difference Chlorophyll Index: A novel model for remote estimation of chlorophyll-a concentration in turbid productive waters. Remote Sensing of Environment, 117, 394–406. [DOI](https://doi.org/10.1016/j.rse.2011.10.016)<br>
<b>4.</b> Ruddick, K., Ovidio, F., & Rijkeboer, M. (2000). Atmospheric correction of SeaWiFS imagery for turbidity and chlorophyll retrieval in coastal waters. International Journal of Remote Sensing, 21(8), 1637–1651. [DOI](https://doi.org/10.1080/01431160050029498)<br>
<b>5.</b> Gitelson, A. A., Gritz, Y., & Merzlyak, M. N. (2003). Relationships between leaf chlorophyll content and spectral reflectance and algorithms for non-destructive chlorophyll assessment in higher plant leaves. Journal of Plant Physiology, 160(3), 271–282. [DOI](https://doi.org/10.1078/0176-1617-00887)<br>
<b>6.</b> Ruddick, K., et al. (2000). Atmospheric correction of SeaWiFS imagery for turbidity and chlorophyll retrieval in coastal waters. International Journal of Remote Sensing, 21(8), 1637–1651. [DOI](https://doi.org/10.1080/01431160050029498)<br>
<b>7.</b> Bramich, N. J., et al. (2021). A method for estimating chlorophyll content from reflectance spectra using the chlorophyll height technique. Remote Sensing, 13(9), 1738. [DOI](https://doi.org/10.3390/rs13091738)
</small>





