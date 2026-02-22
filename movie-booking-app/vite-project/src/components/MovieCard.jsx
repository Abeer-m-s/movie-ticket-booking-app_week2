import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-2xl overflow-hidden group 
                 shadow-lg cursor-pointer transition duration-300 
                 hover:scale-105 hover:shadow-pink-500/40"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-96 object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-5 
                      opacity-0 group-hover:opacity-100 
                      transition duration-300">

        <h2 className="text-2xl font-extrabold text-pink-400">
          {movie.title}
        </h2>

        <div className="flex justify-between text-sm text-gray-300 mt-2">
          {movie.year && <span>📅 {movie.year}</span>}
          {movie.rating && <span>⭐ {movie.rating}</span>}
        </div>

        <button
          onClick={() => navigate(`/movie/${movie._id}`)}
          className="mt-4 bg-pink-500 hover:bg-pink-600 py-2 rounded-lg font-semibold transition"
        >
          View Details 
        </button>
      </div>
    </div>
  );
};

export default MovieCard;