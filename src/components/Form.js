import { useState, useEffect } from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        password: "",
        cookie: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (formData.firstname && formData.lastname && formData.age && formData.password && formData.cookie) {
            debugger
            //form başarılı bir şekilde doldurulduysa burda ilerleyecez
            //servera istek atılacak formData objesi gönderilecek
        }
        // else {
        //     //form validasyonu geçemediyse return edecez
        //     return;
        // }

    };

    const handleInputChange = (e) => {
        if (e.target.type === "checkbox" || e.target.type === "radio") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            });
        }
        else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }

    };

    return (
        <form style={{ background: "#c1c1c1", padding: "16px" }} onSubmit={handleFormSubmit} autocomplete="off">

            <div className={formSubmitted && formData.firstname === "" ? "error" : ""}>
                <label>Adınız</label> <br />
                <input type="text"
                    value={formData.firstname} name="firstname"
                    onChange={handleInputChange} />

                {
                    formSubmitted && formData.firstname === "" &&
                    <div>Zorunlu Alan</div>
                }

            </div>

            <hr />

            <div className={formSubmitted && formData.lastname === "" ? "error" : ""}>
                <label>Soyadınız</label> <br />
                <input type="text" autocomplete="new-password"
                    value={formData.lastname} name="lastname"
                    onChange={handleInputChange} />
                {
                    formSubmitted && formData.lastname === "" &&
                    <div>Zorunlu Alan</div>
                }
            </div>
            <hr />
            <div className={formSubmitted && formData.age === "" ? "error" : ""}>
                <label>Yaşınız</label> <br />
                <select value={formData.age} name="age"
                    onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                </select>
                {
                    formSubmitted && formData.age === "" &&
                    <div>Zorunlu Alan</div>
                }
            </div>
            <hr />
            <div className={formSubmitted && formData.password === "" ? "error" : ""}>
                <label>password</label> <br />
                <input type="password" autocomplete="new-password"
                    value={formData.password} name="password"
                    onChange={handleInputChange} />
                {
                    formSubmitted && formData.password === "" &&
                    <div>Zorunlu Alan</div>
                }
            </div>
            <hr />
            <div className={formSubmitted && !formData.cookie ? "error" : ""}>
                <label>Accept Cookies</label>
                <input type="checkbox" name="cookie" onChange={handleInputChange} />
                {
                    formSubmitted && !formData.cookie &&
                    <div>Zorunlu Alan</div>
                }
            </div>
            <hr />

            <div>
                <button type="submit">Gönder</button>
            </div>

        </form>
    );
}

export default Form;
