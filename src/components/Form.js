import { useState, useEffect } from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        password:"",
        cookie:false
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.firstname === "") {
            alert("Adınız boş geçilemez");
        }
        else if (formData.lastname === "") {
            alert("Soyadınız boş geçilemez");
        }
        else if (formData.age === "") {
            alert("Yaşınız boş geçilemez");
        }
    };

    const handleInputChange = (e) => {
        debugger
        if (e.target.type ==="checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            });
        }
        else{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
     
    };

    return (
        <form style={{ background: "#c1c1c1", padding: "16px" }} onSubmit={handleFormSubmit} autocomplete="off">
            <div>
                <label>Adınız</label> <br />
                <input type="text"
                    value={formData.firstname} name="firstname"
                    onChange={handleInputChange} />
            </div>
            <div>
                <label>Soyadınız</label> <br />
                <input type="text"  autocomplete="new-password"
                    value={formData.lastname} name="lastname"
                    onChange={handleInputChange} />
            </div>
            <div>
                <label>Yaşınız</label> <br />
                <select value={formData.age} name="age" 
                    onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                </select>
            </div>
            <div>
                <label>password</label> <br />
                <input type="password"   autocomplete="new-password"
                    value={formData.password} name="password"
                    onChange={handleInputChange} />
            </div>
            <div>
                <label>Accept Cookies</label>
                <input type="checkbox" name="cookie" onChange={handleInputChange}/>
            </div>

            <div>
                <button type="submit">Gönder</button>
            </div>

        </form>
    );
}

export default Form;
