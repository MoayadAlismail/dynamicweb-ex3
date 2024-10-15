import React from 'react';
import styles from './WeatherCard.module.css';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ city, currTemp, lowTemp, highTemp, cloudiness, windSpeed, humidity, weatherType }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.cityTemp}>
                    <h2 className={styles.city}>{city}</h2>
                    <p className={styles.temperature}>{Math.round(currTemp)}°C</p>
                </div>
                <div className={styles.iconContainer}>
                    <WeatherIcon weatherType={weatherType} />
                </div>
            </div>
            <div className={styles.details}>
                <p>Low: {Math.round(lowTemp)}°C</p>
                <p>High: {Math.round(highTemp)}°C</p>
                <p>Cloudiness: {cloudiness}%</p>
                <p>Wind Speed: {windSpeed} m/s</p>
                <p>Humidity: {humidity}%</p>
            </div>
        </div>
    );
};

export default WeatherCard;
