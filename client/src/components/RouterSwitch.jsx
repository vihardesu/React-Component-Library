import React from 'react'
import {Switch} from "react-router-dom";

export default function RouterSwitch({children}) {
    return (
        <Switch>
              {children}
        </Switch>
    )
}

