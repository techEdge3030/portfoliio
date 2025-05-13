import React, { useState, useEffect } from 'react';
import axios from 'axios';
import commonConfig from '@/database/config/metadata.json';

export default function WeatherAPI() {
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use environment variables for coordinates
        const LATITUDE = 21.0278;
        const LONGITUDE = 105.8342;
        
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1&models=best_match`)
            .then(response => {
                setWeather(response.data);
                setError(null);
            })
            .catch(error => {
                console.error('Weather API Error:', error);
                setError('Unable to load weather data');
            });
    }, []);

    if (error) return <span>{error}</span>;
    
    return (
        <>
            {weather.current ? (
                <span>
                    {Math.round(weather.current.temperature_2m)}
                    {weather.current_units.temperature_2m}
                </span>
            ) : (
                <span>Loading...</span>
            )}
        </>
    );
}