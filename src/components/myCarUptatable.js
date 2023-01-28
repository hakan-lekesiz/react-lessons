import { useState } from "react";

const MyCarUptatable = () => {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2022"
    });
     
    return (
        <div>
            <p>{"My car's brand is " + car.brand}</p>
            <p>{"My car's model is " + car.model}</p>
            <p>{"My car's year is " + car.year}</p>

            <div>
                <button onClick={
                    () => setCar({
                        ...car,
                        year: "2018"
                    })
                }>
                    2018 yılı yap
                </button>
                <button onClick={
                    () => setCar({
                        ...car,
                        year: "2019"
                    })
                }>
                    2019 yılı yap
                </button>
                <button onClick={
                    () => setCar({
                        ...car,
                        year: "2020"
                    })
                }>
                    2020 yılı yap
                </button>
            </div>
            <div>
                <button onClick={
                    () => setCar({
                        ...car,
                        brand: "Ford",
                        model: "Focus"
                    })
                }>
                    Ford Focus yap
                </button>
                <button onClick={
                    () => setCar({
                        ...car,
                        brand: "Fiat",
                        model: "Egea"
                    })
                }>
                    Fiat Egea yap
                </button>

            </div>
        </div>
    );
}

export default MyCarUptatable;
