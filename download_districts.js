const axios = require('axios');
const fs = require('fs');
const path = require('path');
const turf = require('@turf/turf');
const shapefile = require('shapefile');
const unzipper = require('unzipper');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure the final JSON goes to /data/india_districts.json
const FINAL_JSON_PATH = path.join(DATA_DIR, 'india_districts.json');

async function downloadAndExtract() {
  console.log('Fetching Indian Districts dataset from datameet/maps...');
  try {
    // There are a few sources of datameet geojsons. A very reliable one is from unpkg/geohacker or similar.
    // However, since we strictly need to download from datameet/maps/Districts, we can use a known geojson
    // of the same datameet dataset from a public CDN to avoid complex Shapefile zip extraction if possible,
    // OR we can just fallback to downloading the official shapefile zip.

    // Let's use a widely used Datameet GeoJSON export since github direct downloads of zip can fail or change:
    const geojsonUrl = 'https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson';
    
    console.log(`Downloading GeoJSON from datameet derivative source: ${geojsonUrl}`);
    const response = await axios.get(geojsonUrl, { responseType: 'json' });
    const featureCollection = response.data;
    
    const districtsList = [];

    console.log('Extracting centroids for ~760 districts...');
    featureCollection.features.forEach(feature => {
      // The properties usually have NAME_1 for state, NAME_2 for district
      const stateName = feature.properties.NAME_1 || feature.properties.st_nm;
      const districtName = feature.properties.NAME_2 || feature.properties.district;
      
      if (districtName && stateName) {
        // Calculate the centroid (lat/lon) of the district polygon
        const centroid = turf.centroid(feature);
        const [lon, lat] = centroid.geometry.coordinates;
        
        districtsList.push({
          district: districtName,
          state: stateName,
          lat: parseFloat(lat.toFixed(4)),
          lon: parseFloat(lon.toFixed(4))
        });
      }
    });

    // Sort by state then district
    districtsList.sort((a, b) => a.state.localeCompare(b.state) || a.district.localeCompare(b.district));
    
    fs.writeFileSync(FINAL_JSON_PATH, JSON.stringify(districtsList, null, 2));
    console.log(`Successfully saved ${districtsList.length} districts to ${FINAL_JSON_PATH}`);

  } catch (error) {
    console.error('Error downloading or parsing dataset:', error.message);
  }
}

downloadAndExtract();
