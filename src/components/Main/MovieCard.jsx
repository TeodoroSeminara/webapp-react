import { Link } from "react-router"

const MovieCard = (movieProps) => {
    const { id, title, director, genre, release_year, abstract, image } = { movieProps };
    return (
        <>
            <h2>Card Movie</h2>
            <div>
                <img src={image} alt={title} />
                <ul>
                    <li>{director}</li>
                    <li>{genre}</li>
                    <li>{release_year}</li>
                    <li>{abstract}</li>
                    <li>{title}</li>
                </ul>
            </div>
            <Link to={`/details/${id}`}></Link >
        </>
    )
}

export default MovieCard