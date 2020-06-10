import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";

export default function Router({children}) {
    return (
        <Router>
            {children}
        </Router>
    )
}
