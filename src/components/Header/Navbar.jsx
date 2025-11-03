// Import router-dom per link
import { Link } from "react-router"

const Navbar = () => {

    return (
        <>
            <nav>
                <div>
                    <Link to="/">Lista libri</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar 