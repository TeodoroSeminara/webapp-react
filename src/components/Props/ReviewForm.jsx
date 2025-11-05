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
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input name="vote" type="number" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
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
