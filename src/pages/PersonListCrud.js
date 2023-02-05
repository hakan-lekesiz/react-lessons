import { useState } from "react";
import Modal from "../components/modal";



const PersonListCrud = () => {

    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);



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
                                <li>{person.name}</li>
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
                <Modal closeModal={() => setShowModal(false)}>
                    <div>
                        <h3>
                            Kişi Ekle Modalı
                        </h3>
                    </div>
                </Modal>
            }
        </>
    )
};

export default PersonListCrud;