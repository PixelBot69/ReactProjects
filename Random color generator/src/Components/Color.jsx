import React, { useState } from "react";

function Random() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randoms(length) {
        return Math.floor(Math.random() * length);
    }

    function RandomHexgenrator() {
        let poka = "#";
        const a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        for (let i = 0; i < 6; i++) {
            poka += a[randoms(a.length)];
        }
        setColor(poka);
    }

    function RandomRgbgenrator() {
        const a = randoms(256);
        const b = randoms(256);
        const c = randoms(256);
        setColor(`rgb(${a},${b},${c})`);
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setColorType('hex')}>Hex color</button>
            <button onClick={() => setColorType('rgb')}>Rgb color</button>
            <button onClick={colorType === 'hex' ? RandomHexgenrator : RandomRgbgenrator}>Random color</button>
            <div>
            <h3>{colorType==='hex'?"hex":"rgb"}</h3>

            
            </div>
        </div>
      
    );
}

export default Random;
