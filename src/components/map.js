function Map() {

    const myArray = ['apple', 'banana', 'orange'];

    return (
        <div style={{ background: "yellow" }}>
            {
                myArray.map((item) => (
                    <p>{item}</p>
                ))
            }
            {
                myArray.map((item, index) => {
                    const xx = index + 1;
                    return (
                        <p className="paragraf-01">
                            {xx + ". " + item}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Map;
