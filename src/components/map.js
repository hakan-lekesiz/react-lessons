const Map = () => {

    const myArray = ['apple', 'banana', 'orange'];

    return (
        <div style={{ background: "yellow" }}>
            {
                myArray.map((item,index) => (
                    <p key={"map_01_"+index}>{item}</p>
                ))
            }
            {
                myArray.map((item, index) => {
                    const xx = index + 1;
                    return (
                        <p key={"map_02_"+xx} className="paragraf-01">
                            {xx + ". " + item}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Map;
