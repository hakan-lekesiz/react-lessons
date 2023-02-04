import { useContext } from "react";
import { UserContext } from "../state/CarContext";

const D = () => {
    const _user = useContext(UserContext);
    return (
        <div>
            Hello Again {_user}
        </div>
    );
}

export default D;
