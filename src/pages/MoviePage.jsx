import { Link, useNavigate, useParams } from "react-router"
import MovieDetails from "../components/Props/MovieDetails"
import axios from "axios"
import { useState, useEffect } from "react";

const MoviePage = () => {
    // Istance di navigate
    const redirect = useNavigate();
    //  variabile di movie
    const [moviesPage, setMoviePage] = useState();
    // id dinamico da url
    const { id } = useParams();

    // Chiamata Axios
    const fetchMoviePage = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(response => { setMoviePage(response.data) })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect("/404")
            })
    };

    // uso della chiamata
    useEffect(fetchMoviePage, [id]);

    // Funzione per le istanze
    const reviews = () => {
        return moviesPage?.reviews.map(review => {
            return (
                <MovieDetails reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <div>
                <img src={moviesPage?.image} alt={moviesPage?.title} />
                {reviews()}
                <Link to="/"> Back to home </Link>
            </div>
        </>

    )
}

export default MoviePage