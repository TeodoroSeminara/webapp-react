import { useEffect, useState } from "react"
import axios from "axios";

import MovieCard from "../components/Main/MovieCard"

const HomePage = () => {

    // Variabili di stato per Movie
    const [movies, setMovies] = useState([]);

    // Chiamata axios
    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(response => { setMovies(response.data) })
            .catch(error => {
                console.log(error);
            })

    };

    // prima chiamata e montaggio 
    useEffect(fetchMovie, []);

    // function per generare istanza movie
    const renderMovie = () => {
        return movies.map(movie => {
            return (
                <div key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        })
    }

    return (
        <>
            <h2>HomePage</h2>
            <div>
                {renderMovie()}
            </div>
        </>
    )
}

export default HomePage