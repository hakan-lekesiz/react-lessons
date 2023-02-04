
import { useState,  useContext } from "react";
import { CarContext } from "../state/CarContext";
import Map from "./map";

const CarDetails = ({ details, deleteCar, setSelectedCar, selectedCar }) => {
    const carCount = useContext(CarContext);

    const { id, year, model, brand } = details;

    return (
        <div className={"car-details" + (selectedCar?.id === id ? " active" : "")}>
            <h2>Toplam Araç : {carCount}</h2>
            <h3>Marka: {brand}</h3>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <button onClick={() => deleteCar(id)}>
                Sil
            </button>
            <button className="select-car" onClick={() => setSelectedCar(details)}>
                Aracı Seç
            </button>
            <Map/>
        </div>

    );
}

export default CarDetails;