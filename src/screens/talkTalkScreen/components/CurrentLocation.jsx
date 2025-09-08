import { CurrentBox } from "./CurrentBox";
import LOCATION from "../../../assets/images/talktalk/location.png";
import { useEffect, useState } from "react";
import { getDistrictFromCoords } from "../../../apis/googleGeocodingApi";

export default function CurrentLocation() {
    const [currentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        const fetchLocation = async () => {
        const gu = await getDistrictFromCoords(37.5820, 127.0104);
        setCurrentLocation(gu);
        };
        fetchLocation();
    }, []);
    
    return (
        <CurrentBox 
            icon = { LOCATION }
            iconStyle = {{
                width: 18,
                height: 20.33
            }}
            currentInfo = '현재 위치'
            currentState = { currentLocation }
        />
    )
}