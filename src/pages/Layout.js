import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Footer
            </footer>
        </>
    )
};

export default Layout;