import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";

export const MovieContext = createContext();

function GlobalState({ children }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const tmbi_api_key = "cda0956569f50005c78049e734c0abd1";

    const initialState = {
        watchlist: JSON.parse(localStorage.getItem('watchList')) || [],
        watched: JSON.parse(localStorage.getItem('watched')) || []
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    function handleAlreadyWatched(movie) {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHED",
            payload: movie
        });
    }

    function handleList(movie) {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHLIST",
            payload: movie
        });
    }

    async function fetchMovies() {
        if (search.trim() === '') return;

        setLoading(true);
        try {
            const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmbi_api_key}&query=${search}&include_adult=false&language=en-US&page=1`);
            const data = await api.json();
            setData(data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [search]);

    return (
        <MovieContext.Provider value={{ search, setSearch, loading, data, handleList, handleAlreadyWatched, state }}>
            {children}
        </MovieContext.Provider>
    );
}

export default GlobalState;
