import { useState } from "react";

const UpdatablePerson = () => {

    const [person, setPerson] = useState({name: "Ford",lastname: "Mustang"});

    return (
        <div>
            <p>{"person name is " + person.name}</p>
            <p>{"person lastname is " + person.lastname}</p> 
        </div>
    );
}

export default UpdatablePerson;
