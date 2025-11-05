const MovieDetails = ({ reviewProp }) => {
    // Destrutturazione
    const { name, vote, text } = reviewProp;

    return (
        <div className="card mb-3 bg-secondary text-light">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: {vote}</strong>
                <address className="mb-0"><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default MovieDetails