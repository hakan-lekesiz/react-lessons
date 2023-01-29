import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    const [isUserLogin, setIsUserLogin] = useState(false);
    console.log(isUserLogin);

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
                            <Link to="/carList">carList</Link>
                        </li>
                    </ul>
                </nav>

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