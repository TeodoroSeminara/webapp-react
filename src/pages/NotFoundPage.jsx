// import di router-dom per link
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container text-center text-light py-5">
            <h2>Page Not Found</h2>
            <p>Sorry, but the page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-outline-light">Back to home</Link>
        </div>
    )
}

export default NotFoundPage