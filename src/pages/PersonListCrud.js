import { useState } from "react";
import Modal from "../components/modal";

const initialFormData = {
    id: "",
    firstname: "",
    lastname: "",
    age: "",
    job: "",
    income: ""
};

const PersonListCrud = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (formData.firstname && formData.lastname && formData.age && formData.job && formData.income) {
            debugger
            //form başarılı bir şekilde doldurulduysa burda ilerleyecez
            //servera istek atılacak formData objesi gönderilecek
            if (formData.id === "") {
                //ekleme işlemi yapılacak
                setList([
                    ...list,
                    {
                        ...formData,
                        id: list.length
                    }
                ]);

            }
            else {
                //editleme işlemi yapılacak
            }
            
            setShowModal(false); 
            resetForm();


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

    const resetForm = () => {
        setFormData(initialFormData);
        setFormSubmitted(false);
    };

    return (
        <>
            <div className="person-list-crud">
                <div className="buttons">
                    <h1>Kişi Listesi</h1>
                    <button onClick={() => setShowModal(true)}>
                        Kişi Ekle
                    </button>
                </div>

                <div className="list">
                    <ul className="header">
                        <li>Adı</li>
                        <li>Soyadı</li>
                        <li className="job">Meslek</li>
                        <li>Yaş</li>
                        <li>Gelir</li>
                        <li>İşlemler</li>
                    </ul>

                    {
                        list.map((person) => (
                            <ul key={person.id}>
                                <li>{person.firstname}</li>
                                <li>{person.lastname}</li>
                                <li className="job">{person.job}</li>
                                <li>{person.age}</li>
                                <li>{person.income}</li>
                                <li>
                                    <a href="#">Düzenle</a>
                                    <a href="#">Sil</a>
                                </li>
                            </ul>
                        ))
                    }
                    {
                        list.length === 0 &&
                        <div>
                            Kişi Bulunamadı lütfen bir kişi <a href="#" onClick={() => setShowModal(true)}>ekleyin</a>
                        </div>
                    }


                </div>
            </div>
            {
                showModal &&
                <Modal closeModal={() => { setShowModal(false); resetForm(); }}>
                    <form onSubmit={handleFormSubmit}>
                        <div className={formSubmitted && formData.firstname === "" ? "error" : ""}>
                            <label>
                                Adınız
                            </label> <br />
                            <input type="text" value={formData.firstname} name="firstname" onChange={handleInputChange} />
                            {
                                formSubmitted && formData.firstname === "" &&
                                <div>Zorunlu Alan</div>
                            }

                        </div>
                        <hr />
                        <div className={formSubmitted && formData.lastname === "" ? "error" : ""}>
                            <label>
                                Soy Adınız
                            </label><br />
                            <input type="text" value={formData.lastname} name="lastname" onChange={handleInputChange} />
                            {
                                formSubmitted && formData.lastname === "" &&
                                <div>Zorunlu Alan</div>
                            }

                        </div>
                        <hr />
                        <div className={formSubmitted && formData.age === "" ? "error" : ""}>
                            <label>
                                Yaşınız
                            </label><br />
                            <input type="text" value={formData.age} name="age" onChange={handleInputChange} />
                            {
                                formSubmitted && formData.age === "" &&
                                <div>Zorunlu Alan</div>
                            }

                        </div>
                        <hr />
                        <div className={formSubmitted && formData.job === "" ? "error" : ""}>
                            <label>
                                Meslek
                            </label><br />
                            <input type="text" value={formData.job} name="job" onChange={handleInputChange} />
                            {
                                formSubmitted && formData.job === "" &&
                                <div>Zorunlu Alan</div>
                            }

                        </div>
                        <hr />
                        <div className={formSubmitted && formData.income === "" ? "error" : ""}>
                            <label>
                                Gelir
                            </label><br />
                            <input type="text" value={formData.income} name="income" onChange={handleInputChange} />
                            {
                                formSubmitted && formData.income === "" &&
                                <div>Zorunlu Alan</div>
                            }

                        </div>
                        <hr />
                        <div>
                            <button type="submit">Kaydet</button>
                        </div>


                    </form>
                </Modal>
            }
            {
                showDeleteModal &&
                <Modal closeModal={() => setShowDeleteModal(false)}>
                    <div>
                        <h3>
                            Kişiyi silmek istediğinizden eminmisin
                        </h3>
                    </div>
                </Modal>
            }
        </>
    )
};

export default PersonListCrud;