

const CarDetails = ({ details, deleteCar, setSelectedCar, selectedCar }) => {

    const { id, year, model, brand } = details;

    return (
        <div className={"car-details" + (selectedCar?.id === id ? " active" : "")}>
            <h3>Marka: {brand}</h3>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <button onClick={() => deleteCar(id)}>
                Sil
            </button>
            <button className="select-car" onClick={() => setSelectedCar(details)}>
                Aracı Seç
            </button>
        </div>

    );
}

export default CarDetails;