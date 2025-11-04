import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {
    const { id, title, director, genre, release_year, abstract, image } = movieProp;
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
            <Link to={`/movies/${id}`}>More</Link >
        </>
    )
}

export default MovieCard