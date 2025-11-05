import { Link, useNavigate, useParams } from "react-router"
import MovieDetails from "../components/Props/MovieDetails"
import axios from "axios"
import { useState, useEffect } from "react";
import ReviewForm from "../components/Props/ReviewForm";

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
        <div className="container bg-dark text-light p-4 rounded">
            <div className="row g-4">
                <div className="col-md-5">
                    <img src={moviesPage?.image} alt={moviesPage?.title} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-7 d-flex flex-column">
                    <h3>{moviesPage?.title}</h3>
                    <div className="mb-3 flex-grow-1 overflow-auto" style={{ maxHeight: '400px' }}>
                        {reviews()}
                    </div>
                    <ReviewForm idProp={id} reloadReviews={fetchMoviePage} />
                    <Link to="/" className="btn btn-outline-light mt-3 align-self-start">Back to home</Link>
                </div>
            </div>
        </div>

    )
}

export default MoviePage