
import React, { useState } from "react";
import { Helper } from "../Helper";
 

const FavoriteColor = () => {
    const [color, setColor] = useState("");

    return (
        <div className="favorite-color">
            <h1>My favorite color is {color}!</h1>
            <div>
                <button
                    type="button"
                    onClick={() => setColor("blue")}
                    className={color === "blue" ? "active" : ""}

                >Blue</button>
                <button
                    type="button"
                    onClick={() => setColor("red")}
                    className={color === "red" ? "active" : ""}
                >Red</button>
                <button
                    type="button"
                    onClick={() => setColor("pink")}
                    className={color === "pink" ? "active" : ""}
                >Pink</button>
                <button
                    type="button"
                    onClick={() => setColor("green")}
                    className={color === "green" ? "active" : ""}
                >Green</button>

                <button
                    type="button"
                    onClick={() => Helper.Actions.showAlert("alert mesajı gösteriliyor")} 
                >Alert göster</button>
            </div>
        </div>
    );
}

export default FavoriteColor;
