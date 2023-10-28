import { useEffect, useState } from 'react';
import { getMovieList, searchMovies } from './api';

function App() {
    const [input, setInput] = useState('');
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getMovieList().then((movies) => setPopular(movies));
    }, []);

    const search = async (e) => {
        const query = await searchMovies(e);
        setPopular(query);
    };
    return (
        <div className="p-6 bg-white">
            <h1 className="mb-4 text-3xl font-bold text-center">movies database</h1>
            {/* Input and Search Button */}
            <div className="flex items-center justify-center mt-4 mb-4">
                <div className="flex flex-row items-center justify-center rounded-2xl bg-slate-100 shadow-xl w-[290px] text-black h-[40px] gap-x-2">
                    <input
                        type="text"
                        className="flex rounded-xl w-[240px] focus:outline-none bg-slate-100 text-black h-[34px]"
                        onChange={(e) => search(e.target.value)}
                    />
                    <button className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap items-start justify-center p-4 text-black rounded-xl gap-x-4">
                {popular.map((movie, i) => (
                    <div className="p-4 mt-4 mb-4 gap-x-4 gap-y-4 " key={i}>
                        <div className="flex flex-col rounded-xl text-slate-500 hover:scale-[1.1]">
                            <div className="flex font-bold text-black">{movie.title}</div>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="shadow-2xl hover:shadow-xl rounded-xl"
                                width={300}
                                height={450}
                                alt=""
                            />
                            <div className="flex">{movie.release_date}</div>
                            <div className="flex">{movie.vote_average}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
