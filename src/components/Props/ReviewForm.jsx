import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ idProp, reloadReviews }) => {

    const initialValues = {
        name: "Anonymous",
        text: "",
        vote: 1
    }

    // stato componente
    const [formData, setFormData] = useState(initialValues);

    // gestione campi form
    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const apiUrl = `http://localhost:3000/api/movies/${idProp}/review`;

    // funzione dati
    const handleSubmit = e => {
        e.preventDefault();
        // chiamata axios
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // set form valori iniziali
                setFormData(initialValues)
                // chiamata componente padre
                reloadReviews();
            })
            .catch(err => {
                if (err.response) {
                    console.log('Response error:', err.response.data);
                } else if (err.request) {
                    console.log('No response received:', err.request);
                } else {
                    console.log('Error setting up request:', err.message);
                }
            })
    }
    return (
        <div className="card bg-secondary text-light mt-4">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input id="nameInput" type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="textInput" className="form-label">Review</label>
                        <textarea id="textInput" className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="voteInput" className="form-label">Voto</label>
                        <input id="voteInput" name="vote" type="number" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ReviewForm
