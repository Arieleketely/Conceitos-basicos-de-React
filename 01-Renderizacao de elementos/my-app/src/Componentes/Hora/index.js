import React from 'react';
//olhe src/index.js
export default function Hora(){
    return(
        <p>
            {new Date().toLocaleTimeString()}
        </p>
    )
}