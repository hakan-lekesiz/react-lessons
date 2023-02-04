import { useState } from "react";
import { UserContext } from "../state/CarContext";
import B from "./B";


const A = () => {
    const [userName] = useState("Hakan");

    return (
        <div>
            <UserContext.Provider value={userName}>
                
                Hello, {userName} from A
                <B/>
            </UserContext.Provider>

        </div>
    );
}

export default A;
