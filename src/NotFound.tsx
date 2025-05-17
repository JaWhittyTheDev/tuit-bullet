import React from "react";
import { useEffect } from 'react';
import "./styles/NotFound.css"

function NotFound() {
    useEffect(() => {
        document.title = '404 - Not found';
    }, []);

    return (
        <div>
            <h1>404</h1>
            <h2>Not found</h2>
        </div>
    )
}

export default NotFound;