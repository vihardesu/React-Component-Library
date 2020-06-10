import React, {useState, useEffect, createContext} from 'react'
import {deviceDetect} from "react-device-detect";

export default function MediaMapper({children}) {

    const [device, setDevice] = useState(deviceDetect());

    if (device.isMobile) {
        return <h1>Mobile App.</h1>;
    }

    else if (device.isTablet) {
        return <h1>Tablet App.</h1>;
    }

    else if (device.isBrowser) {
        return <h1>Browser App.</h1>;
    }

    else {
        return <h1>This device is not supported.</h1>
    }
}

