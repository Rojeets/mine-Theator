import { useState } from "react"



export default function MovieCard({ data }) {

    const [fav, setFav] = useState(() => {
        const saved = localStorage.getItem('fav');
        return saved ? JSON.parse(saved) : {};
    });;
    const toggleFavButton = (id) => {
        setFav((prev) => {
            const updated = { ...prev, [id]: !prev[id] };
            localStorage.setItem("fav", JSON.stringify(updated));
            return updated;
        });
    }


    return (
        <section id="favorites">
            <h2>Results</h2>
            <div className="movie-grid" >
                {data ? (
                    data.map((movie, index) => (

                        <div className="movie-card" key={index}>
                            <img src={movie.Poster} alt="Movie Poster" className="poster" />
                            <div className="movie-details">
                                <h3 className="title">{movie.Title}</h3>
                                <p><strong>Release Date:</strong> {movie.Year}</p>
                                <p><strong>Type:</strong> {movie.Type}</p>
                            </div>
                            <button style={{ background: "lightgray", border: "none", alignItems: "flex-end" }} onClick={()=> {toggleFavButton(movie.imdbID)}}><div className="fav">{fav[movie.imdbID] ? '⭐' : '☆'}</div></button>
                        </div>
                    ))
                ) : (
                    <p>No movie selected.</p>
                )}
            </div>
        </section>
    )
}