// Import router-dom per link
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Lista libri
                </Link>
            </div>
        </nav>
    )
}

export default Navbar 