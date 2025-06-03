import { useEffect, useState } from "react";
import Call from "./apicall";

export default function FavoriteMovies() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const saved = localStorage.getItem("fav");
            const favorites = saved ? JSON.parse(saved) : {};

            // Extract imdbIDs that are marked as true
            const imdbIDs = Object.entries(favorites)
                .filter(([_, isFav]) => isFav)
                .map(([id]) => id);

            const movies = [];

            for (const id of imdbIDs) {
                try {
                    // console.log(id);
                    const movie = await Call('', '', id);
                    movies.push(movie);
                } catch (error) {
                    console.error(`Failed to fetch movie with ID ${id}:`, error);
                }
            }

            setFavoriteMovies(movies);
        };

        fetchFavorites();
    }, []);

    return (
        <section id="favorites">
            <h2>⭐ Favorites</h2>
            <div className="movie-grid" id="favoritesList">
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((movie) => (
                        <div className="movie-card" key={movie.imdbID}>
                            <img src={movie.Poster} alt="Movie Poster" className="poster" />
                            <div className="movie-details">
                                <h3 className="title">{movie.Title}</h3>
                                <p><strong>Release Date:</strong> {movie.Year}</p>
                                <p><strong>Genre:</strong> {movie.Genre}</p>
                                <p><strong>Rating:</strong> ⭐ {movie.imdbRating || 'N/A'}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No favorite movies found.</p>
                )}
            </div>
        </section>
    );
}
