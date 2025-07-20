import { CurrentBox } from "./CurrentBox";
import TIME from "../../../assets/images/talktalk/time.png";
import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes().toString().padStart(2, '0');

            setCurrentTime(`${ hour }:${ minute }`);
        };

        updateTime();

        const interval = setInterval(() => {
            const now = new Date();
            if (now.getSeconds() === 0) updateTime();
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <CurrentBox
            icon = { TIME }
            iconStyle = {{
                width: 21.49,
                height: 21.49
            }}
            currentInfo = '현재 시간'
            currentState = { currentTime }
        />
    )
}