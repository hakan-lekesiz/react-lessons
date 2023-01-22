
import React, { useState } from "react";

const FavoriteColor = () => {
    const [color, setColor] = useState("");

    return (
        <div className="favorite-color">
            <h1>My favorite color is {color}!</h1>
            <div>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
            </div>
        </div>
    );
}

export default FavoriteColor;
