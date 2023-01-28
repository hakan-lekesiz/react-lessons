
import Destructuring from "../components/destructuring";
import Map from "../components/map";
import SpreadOperator from "../components/spreadOperator";
import { person, car } from "../components/modules";
import Turnary from "../components/turnary";
import Card from "../components/card";
import MyCar from "../components/myCar";
import Garage from "../components/garage";

const Home = () => {
    const products = [
        { title: "Ürün 1", desc: "Ürün Açıklama 1", price: "1000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { title: "Ürün 2", desc: "Ürün Açıklama 2", price: "2000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { title: "Ürün 3", desc: "Ürün Açıklama 3", price: "3000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
        { title: "Ürün 4", desc: "Ürün Açıklama 4", price: "4000TL", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    ];

    const cars = [
        { model: "Corsa", brand: "Opel", year: "2020", id: "kdjsfhskf544" },
        { model: "Egea", brand: "Fiat", year: "2020", id: "kdjsfdhskf544" },
        { model: "E200", brand: "Mercedes", year: "2020", id: "kdjsffhskf544" },
        { model: "Mustang", brand: "Ford", year: "2022", id: "kdjsfhsgkf544" }
    ];

    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

    const myElement2 = (
        <div>
            <p>I am a paragraph.</p>
            <p>I am a paragraph.</p>
            <p>I am a paragraph too.</p>
        </div>
    );

    const shoot = (e) => {
        console.log(e.target)
        if (e.type === "click") {
            alert("clicked");
        }
        else {
            alert("not clicked");
        }
    };

    return (
        <>
            {/* <button onClick={(ev) => shoot(ev)}>Take the Shot!</button>
             */}
            <Map />
            <Destructuring />
            <SpreadOperator />
            <Turnary />
            <MyCar model="Corsa" />
            <Garage cars={cars} xx="xx" product={products[0]}/>

            <div>
                Toplam {products.length} ürün listeleniyor
            </div>
            
            <div style={{ display: "flex", gap: "12px" }}>
                {
                    products.map((product, index) => (
                        <Card key={"products_" + index} details={product} />
                    ))
                }

            </div>

            <div style={{ background: "green" }}>
                <div>
                    {person.name}
                </div>
                <div>
                    {car.name}
                </div>
                {myElement}
                {myElement2}
            </div>

        </>
    );
}

export default Home;
