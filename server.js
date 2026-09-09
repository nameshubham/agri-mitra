const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const OWM_API_KEY = process.env.OWM_API_KEY || ''; // Must be set in .env

// Load the districts database (assumes download_districts.js has been run)
const districtsFile = path.join(__dirname, 'data', 'india_districts.json');
let districts = [];

if (fs.existsSync(districtsFile)) {
    districts = JSON.parse(fs.readFileSync(districtsFile, 'utf8'));
    console.log(`Loaded ${districts.length} districts from database.`);
} else {
    console.warn(`WARNING: ${districtsFile} not found! Please run 'node download_districts.js' first.`);
}

// 1. Endpoint to get all states and their districts for the frontend dropdowns
app.get('/districts', (req, res) => {
    if (districts.length === 0) {
        return res.status(503).json({ error: 'Database not initialized. Please run the download script first.' });
    }
    
    // Group districts by state
    const grouped = {};
    districts.forEach(d => {
        if (!grouped[d.state]) grouped[d.state] = [];
        grouped[d.state].push(d.district);
    });
    
    res.json(grouped);
});

// 2. Weather Endpoint integration with OpenWeatherMap
app.get('/weather/:district', async (req, res) => {
    const districtName = req.params.district.toLowerCase();
    const districtInfo = districts.find(d => d.district.toLowerCase() === districtName);
    
    if (!districtInfo) {
        return res.status(404).json({ error: `District '${req.params.district}' not found in database.` });
    }
    
    if (!OWM_API_KEY) {
        return res.status(500).json({ error: 'Missing OpenWeatherMap API Key in backend/.env' });
    }

    try {
        // Fetch 5-day / 3-hour forecast from OpenWeatherMap using the district coordinates
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${districtInfo.lat}&lon=${districtInfo.lon}&units=metric&appid=${OWM_API_KEY}`;
        const response = await axios.get(url);
        
        // Extract basic data (using the first timestamp in the forecast for current approx)
        const currentData = response.data.list[0];
        
        // Summing up rainfall if available (OWM sometimes provides rain.3h)
        const rain3h = currentData.rain ? currentData.rain['3h'] : 0;
        
        const weatherObj = {
            district: districtInfo.district,
            state: districtInfo.state,
            temperature: currentData.main.temp,
            humidity: currentData.main.humidity,
            rainfall: rain3h || 0,
            wind: currentData.wind.speed * 3.6, // convert m/s to km/h
            description: currentData.weather[0].description,
            icon: currentData.weather[0].icon
        };

        res.json(weatherObj);
    } catch (error) {
        console.error('Error fetching OpenWeatherMap API:', error.message);
        res.status(502).json({ error: 'Failed to fetch weather from OpenWeatherMap.' });
    }
});

// 3. Market Prices Endpoint integration with data.gov.in (Proxy)
app.get('/api/market-prices', async (req, res) => {
    try {
        const API_KEY = '579b464db66ec23bdd0000018a1a45749f7e4f16a10de3e1a0b3f5b7';
        const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070';
        const API_URL = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json&limit=2000`;
        
        const response = await axios.get(API_URL, { timeout: 8000 });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Data.gov.in API:', error.message);
        res.status(502).json({ error: 'Failed to fetch market prices from Govt API.' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Agri Mitra Backend Server running on port ${PORT}`);
    console.log(`Weather Endpoint: http://localhost:${PORT}/weather/:district`);
    console.log(`Market Prices Endpoint: http://localhost:${PORT}/api/market-prices`);
});
