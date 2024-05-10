import React, { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";
import MovieDetails from "./MovieDetails"; 
import "../index.css"
import MovieList from "./MovieList";
import MovieWatched from "./MovieWatched";

function MovieApp() {
    const { search, setSearch, loading, data } = useContext(MovieContext);

    function changeSearch(event) {
        setSearch(event.target.value);
    }

    return ( 
        <div>
            <h1>Movie App</h1>
            <MovieList/>
            <MovieWatched/>
            <input 
                type="text" 
                value={search} 
                onChange={changeSearch} 
                placeholder="Search for a movie" 
            />
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((dataItem, index) => (
                        <MovieDetails key={index} dataItem={dataItem} />
                    ))
                )}
            </div>
        </div>
    );
}

export default MovieApp;
