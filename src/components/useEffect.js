
import React, { useState, useEffect } from "react";
import { Helper } from "../Helper";


const UseEffectTest = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        const randomColor = Helper.Actions.getRandomColor();
        setColor(randomColor);
    }, [count]);

    

    return (
        <>
            <h1>I've rendered {count} times!</h1>
            <div> {count} </div>
            <div>
                <button className="button-01" onClick={() => setCount(count + 1)} style={{ background: color }}>+</button>
                <button className="button-01" onClick={() => setCount(count - 1)} style={{ background: color }}>-</button>
            </div>
        </>
    );
}

export default UseEffectTest;
