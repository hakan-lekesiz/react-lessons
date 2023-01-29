import { useEffect } from "react";
import CarDetails from "../components/CarDetails"

const CarList = () => {

    const [carList,setCarList] = useEffect();

    useEffect(() => {
        setCarList([
            {brand:"Ford",model:"Focus",year:"2020",id:"001"},
            {brand:"Reanult",model:"Clio",year:"2018",id:"002"},
            {brand:"Reanult",model:"Megane",year:"2019",id:"003"},
            {brand:"Mercedes",model:"E200",year:"2005",id:"004"},
        ]);
    }, []);

    return (
        <>
             {
                carList.map((item)=>(
                    <CarDetails key={item.id} details={item}/>
                ))
             }
        </>
    );
}

export default CarList;