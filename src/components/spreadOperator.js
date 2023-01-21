import Map from "./map";



function SpreadOperator() {
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];

    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;

    const arac = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    };

    const updateArac = {
        type: 'car',
        year: 2021,
        color: 'yellow'
    };

    const myUpdatedArac = { ...arac, ...updateArac }
    // const myUpdatedArac = {
    //     ...arac,
    //     type: 'car',
    //     year: 2021, 
    //     color: 'yellow'
    // };

    console.log(myUpdatedArac);

    return (
        <div style={{ background: "blue" }}>
            {
                numbersCombined.map((item) => (
                    <span>{item}</span>
                ))
            }

            <p>{one}</p>
            <p>{two}</p>
            <p>{rest}</p>

            <p>{myUpdatedArac.color}</p>

            <Map />
        </div>
    );
}

export default SpreadOperator;
