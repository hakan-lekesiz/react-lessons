
const Garage = (props) => {

    //props.cars
    const { cars } = props;


    return (
        <div style={{ background: "red" }}>
            <h2>Garage</h2>
            {
                cars.length > 0 &&
                <ul>
                    {
                        cars.map((item) => (
                            <li id={item.id} key={item.id}>{item.brand + " " + item.model + " " + item.year}</li>
                        ))
                    }
                </ul>
            }

            {
                cars.length === 0 &&
                <p>Araç Bulunamadı</p>
            }


            {/* 
            {
                cars.length > 0 ?
                    <ul>
                        {
                            cars.map((item) => (
                                <li>{item.brand + " " + item.model + " " + item.year}</li>
                            ))
                        }
                    </ul>
                    :
                    <p>Araç Bulunamadı</p>
            } 
            */}


        </div>
    );
}

export default Garage;
