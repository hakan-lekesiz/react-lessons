import { useState } from "react"

const Sayac = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div> {count} </div>
            <div>
                <button className="button-01" onClick={() => setCount(count + 1)}>+</button>
                <button className="button-01" onClick={() => setCount(count - 1)}>-</button>
            </div>

        </>
    );
}

export default Sayac;