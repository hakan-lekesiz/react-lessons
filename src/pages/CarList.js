import { useEffect, useState } from "react";
import CarDetails from "../components/CarDetails"

const CarList = ({setSelectedCar,selectedCar}) => {
    const [carList, setCarList] = useState();

    useEffect(() => {
        if (localStorage.getItem("filteredCars")) {
            setCarList(JSON.parse(localStorage.getItem("filteredCars")));
        }
        else {
            setCarList([
                { brand: "Ford", model: "Focus", year: "2020", id: "001" },
                { brand: "Reanult", model: "Clio", year: "2018", id: "002" },
                { brand: "Reanult", model: "Megane", year: "2019", id: "003" },
                { brand: "Mercedes", model: "E200", year: "2005", id: "004" },
            ]);
        }
    }, []);

    const deleteCar = (id) => {
        const filteredCars = carList.filter(x => x.id !== id)
        setCarList(filteredCars);
        localStorage.setItem("filteredCars", JSON.stringify(filteredCars));
    };

    return (
        <>
            <div className="car-list">
                {
                    carList && carList.map((item) => (
                        <CarDetails key={item.id} details={item} deleteCar={deleteCar} setSelectedCar={setSelectedCar} selectedCar={selectedCar}/>
                    ))
                }
            </div>
        </>
    );
}

export default CarList;