import { calculate } from "./destructuring";


function Turnary() {
    const age = 15;

    const [add, subtract, multiply, divide] = age < 18 ? calculate(20, 5) : calculate(100, 5);


    return (
        <div style={{ background: "purple" }}>
            {"result=" + add}

            {
                age < 18 &&
                <>
                    <p>Yaşınız 18'den küçüktür.</p>
                    <p>Bu içeriğe ulaşamazsınız.</p>
                </>
            }

            {
                age < 50 ?
                    <p>Yaşınız 50'den küçüktür.</p>
                    :
                    <p>Yaşınız 50 veya 50'den Büyüktür.</p>
            }

        </div>
    );
}

export default Turnary;
