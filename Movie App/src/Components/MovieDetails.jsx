import React, { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";

function MovieDetails({ dataItem }) {
    const { handleList, handleAlreadyWatched, state } = useContext(MovieContext);

    const addToWatchList = () => {
        handleList(dataItem);
    };

    const markAsAlreadyWatched = () => {
        handleAlreadyWatched(dataItem);
    };

    const isMovieInWatchlist = state.watchlist.some(item => item.id === dataItem.id);
    const isMovieWatched = state.watched.some(item => item.id === dataItem.id);

    return (
        <div className="movie-card">
            <div className="img">
                {dataItem?.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${dataItem.poster_path}`}
                        alt={dataItem?.title}
                    />
                ) : (
                    <div className="fill-img">No Image Available</div>
                )}
            </div>
            <div className="movie-info">
                <h3>{dataItem?.title}</h3>
                <h4>{dataItem?.release_date}</h4>
                <h4>Original Title: {dataItem?.original_title}</h4>
                <button disabled={isMovieInWatchlist} onClick={addToWatchList}>Add to Watch List</button>
                <button disabled={isMovieWatched} onClick={markAsAlreadyWatched}>Already Watched</button>
            </div>
        </div>
    );
}

export default MovieDetails;
