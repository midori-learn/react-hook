import React, { useState } from 'react';
import './ColorBox.scss';


function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
export default function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || "deeppink"
        return initColor;
    });

    // de dung khi chi callback lan dau render

    const colors = ["deeppink", "green", "yellow", "black", "blue"];

    function handleBoxClick() {
        const newColor = getRandomColor(colors)
        setColor(newColor)

        localStorage.setItem('box_color', newColor)
    }



    return (
        <div
            className="color-box"
            style={{
                backgroundColor: color
            }}
            onClick={handleBoxClick}
        >
        </div>
    )
}