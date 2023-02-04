
import React, { useRef } from "react";
import { Helper } from "../Helper";


const UseRefTest = () => {
    const inputElement = useRef();
    const buttonElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.style.background = Helper.Actions.getRandomColor();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput} ref={buttonElement}>Focus Input</button>
        </>
    );
}

export default UseRefTest;
