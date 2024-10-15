import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBolt,
    faCloud,
    faSun,
    faSmog,
    faUmbrella,
    faSnowflake 
} from "@fortawesome/free-solid-svg-icons"

export default function WeatherIcon({weatherType}){
    switch(weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} size="5x" color='rgba(255,255,255,0.6)'/>
        
        case "Clear":
            return <FontAwesomeIcon icon={faSun} size="5x" color='rgba(255,255,255,0.6)'/>
        
        case "Haze":
            return <FontAwesomeIcon icon={faSmog} size="5x" color='rgba(255,255,255,0.6)'/>
            
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} size="5x"  color='rgba(255,255,255,0.6)'/>
            
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} size="5x"  color='rgba(255,255,255,0.6)'/>
            
        case "Thunderstorm":
            return <FontAwesomeIcon icon={faBolt} size="5x"  color='rgba(255,255,255,0.6)'/>
            
        default: 
            return <FontAwesomeIcon icon={faCloud} size="6x" color='rgba(255,255,255,0.6)'/>
    }
}