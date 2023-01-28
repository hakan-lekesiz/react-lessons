import { useState } from "react";


const PersonList = () => {
    const [list, setList] = useState([
        { name: "Hakan", lastname: "Lekesiz", income: 5000, age: 33 },
        { name: "Yusuf", lastname: "Karaca", income: 15000, age: 21 },
        { name: "Evren", lastname: "Ünal", income: 50000, age: 25 },
        { name: "Efşannur", lastname: "Bulaçibaşı", income: 8500, age: 22 }
    ]);
    const [sortname, setSortname] = useState("");
    const [sortlastname, setSortlastname] = useState("");
    const [sortincome, setSortincome] = useState(""); // "", "asc", "desc"  
    const [sortage, setSortage] = useState("");

    //number değerleri sort ediyor
    const sortNumber = (param) => {
        let sortedList = [...list].sort((a, b) => b[param] - a[param]);

        if (param === "income") {
            if (sortincome === "") {
                setSortincome("desc");
            }
            else if (sortincome === "desc") {
                setSortincome("asc");
            }
            else if (sortincome === "asc") {
                setSortincome("desc");
            }
            setList(sortincome === "desc" ? sortedList : sortedList.reverse());
            setSortname("");
            setSortlastname("");
            setSortage("");
        }
        else if (param === "age") {
            if (sortage === "") {
                setSortage("desc");
            }
            else if (sortage === "desc") {
                setSortage("asc");
            }
            else if (sortage === "asc") {
                setSortage("desc");
            }
            setList(sortage === "desc" ? sortedList : sortedList.reverse());
            setSortname("");
            setSortlastname("");
            setSortincome("");
        }
    };

    //string değerleri sort ediyor
    const sortString = (param) => {

        //A'dan Z'ye bir sıralama yapıldı
        let sortedList = [...list].sort((a, b) => a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0);

        //parametreler kotrol edliyor
        if (param === "name") {
            //şuanki sort name durumu desc ise A'dan Z'ye yapılan sıralam ile listeyi güncelleiyor değilse tersine çevirip listeyi güncelleiyor
            setList(sortname === "desc" ? sortedList : sortedList.reverse());

            //name'in sort durumu kontrol edilerek yeni durum belirleniyor
            //yani "" ise desc yapılıyor
            //desc ise asc yapılıyor
            //asc ise desc yapılıyor

            //bu satır async çalışıyor
            console.log(sortname);//örneğin console log yapıldığında "" geliyorsa
            (sortname === "desc") ? setSortname("asc") : setSortname("desc");
            console.log(sortname);//bu satırda da console log yapıldığında "" gelir

            setSortlastname("");
            setSortincome("");
            setSortage("");


        }
        else if (param === "lastname") {
            sortlastname === "desc" ? setSortlastname("asc") : setSortlastname("desc");
            setList(sortlastname === "desc" ? sortedList : sortedList.reverse());
            setSortname("");
            setSortincome("");
            setSortage("");
        }

    };

    return (
        <>
            <div className="per-list">
                <ul>
                    <li onClick={() => sortString("name")}>name
                        {
                            sortname === "desc" &&
                            <span className="desc"></span>
                        }

                        {
                            sortname === "asc" &&
                            <span className="asc"></span>
                        }

                    </li>
                    <li onClick={() => sortString("lastname")}>lastname
                        {
                            sortlastname === "desc" &&
                            <span className="desc"></span>
                        }

                        {
                            sortlastname === "asc" &&
                            <span className="asc"></span>
                        }
                    </li>
                    <li onClick={() => sortNumber("income")}>income
                        {
                            sortincome === "desc" &&
                            <span className="desc"></span>
                        }

                        {
                            sortincome === "asc" &&
                            <span className="asc"></span>
                        }
                    </li>
                    <li onClick={() => sortNumber("age")}>age
                        {
                            sortage === "desc" &&
                            <span className="desc"></span>
                        }

                        {
                            sortage === "asc" &&
                            <span className="asc"></span>
                        }
                    </li>
                </ul>
                {
                    list.map((item, index) => (
                        <ul key={"person-list-" + index}>
                            <li>{item.name}</li>
                            <li>{item.lastname}</li>
                            <li>{item.income}</li>
                            <li>{item.age}</li>
                        </ul>
                    ))
                }
            </div>

        </>
    );
}

export default PersonList;