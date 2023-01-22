function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    const result = [
        add,
        subtract,
        multiply,
        divide
    ];

    return result;

    //return [add, subtract, multiply, divide];
    //return [a + b, a - b, a * b, a / b];
}

const Destructuring = () => {
    const arac = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021,
        color: 'red',
        registration: {
            city: 'Houston'
        }
    };

    const aracArray = [
        'Ford',
        'Mustang',
        'car',
        2021,
        'red'
    ];

    // const brand = arac.brand;
    // const year = arac.year;
    // const city = arac.registration.city;
    const { brand, year, registration:{city} } = arac;

    //const brandArray = aracArray[0];
    //const yearArray = aracArray[3];
    const [brandArray, , , yearArray] = aracArray;
    const [add, subtract, , divide] = calculate(10, 5);

    return (
        <>
            <div style={{ background: "red" }}>
                <p>
                    {"Sizin aracınız=" + brand}
                </p>
                <p>
                    {"Model yılı=" + year}
                </p>
                <p>
                    {"Kayıt Şehri=" + city}
                </p>
                <p>
                    {"Array Sizin aracınız=" + brandArray}
                </p>
                <p>
                    {"Array Model yılı=" + yearArray}
                </p>
            </div>
            <div style={{ background: "red" }}>
                Sonuçlar
                <p>
                    {"add=" + add}
                </p>
                <p>
                    {"subtract=" + subtract}
                </p>
                {/* <p>
                    { "multiply=" + multiply }
                </p> */}
                <p>
                    {"divide=" + divide}
                </p>
            </div>
        </>
    );
}

export default Destructuring;

export {calculate};
