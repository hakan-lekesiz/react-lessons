import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../content/styles/Base.scss";

const Layout = ({ selectedCar, setSelectedCar }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            {/* <a href="/contact">Contact</a> */}
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/sayac">About</Link>
                        </li>
                        <li>
                            <Link to="/personList">personList</Link>
                        </li>
                        <li>
                            <Link to="/personListCrud">personListCrud</Link>
                        </li>
                        <li>
                            <Link to="/carList">carList</Link>
                        </li>
                    </ul>
                </nav>

                {
                    selectedCar &&
                    <div>
                        seçilen araç = {selectedCar.brand + " " + selectedCar.model}

                        <button onClick={() => setSelectedCar(null)}>Kaldır</button>
                    </div>
                }

                {
                    !isUserLogin &&
                    <button onClick={() => setIsUserLogin(true)}>Giriş Yap</button>
                }
                {
                    isUserLogin &&
                    <div>Kullanıcı Adı</div>
                }
            </header>

            <main>
                <div className="c-wrapper">
                    <Outlet />
                </div>
            </main>

            <footer>
                Footer
            </footer>
        </>
    )
};

export default Layout;