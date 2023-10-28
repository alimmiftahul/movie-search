import axios from 'axios';

export const getMovieList = async () => {
    try {
        const apiKey = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};

export const searchMovies = async (q) => {
    try {
        const apiKey = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
