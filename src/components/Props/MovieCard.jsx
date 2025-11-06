import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {
    const { id, title, director, genre, release_year, abstract, image } = movieProp;
    return (
        <>
            <div div className="card bg-secondary text-light h-100" >
                <img src={image} alt={title} className="card-img-top movie-card-img" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <ul className="list-unstyled mb-2">
                        <li><strong>Director:</strong> {director}</li>
                        <li><strong>Genre:</strong> {genre}</li>
                        <li><strong>Year:</strong> {release_year}</li>
                    </ul>
                    <p className="card-text flex-grow-1">{abstract.length > 100 ? abstract.slice(0, 100) + "..." : abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-outline-light mt-auto">
                        More
                    </Link >
                </div>
            </div >
        </>
    )
}

export default MovieCard