import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    title: "Demon Slayer: Mugen Train",
    image: "https://i.pinimg.com/1200x/de/76/d1/de76d1055480fe8c3b3fdbd00eef296d.jpg",
  },
  {
    title: "Attack on Titan",
    image: "https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg",
  },
  {
    title: "Jujutsu Kaisen 0",
    image: "https://i.pinimg.com/736x/4d/30/36/4d303692cebbf1421a3f6629c0d2c8eb.jpg",
  },
  {
    title: "Your Name",
    image: "https://i.pinimg.com/1200x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg",
  },
  {
    title: "Suzume",
    image: "https://i.pinimg.com/736x/ff/7a/6d/ff7a6deccfc9faa64f1370c013e1692f.jpg",
  },
  {
    title: "Spirited Away",
    image: "https://i.pinimg.com/736x/93/6b/c2/936bc2c8a46385dddd69ecaa1fe1d2d5.jpg",
  },
  {
    title: "Frieren: Beyond Journey's End",
    image: "https://i.pinimg.com/1200x/0e/31/8f/0e318f16d2c2e4d1c1e4efb3ff23482c.jpg",
  },
  {
    title: "The Apothecary Diaries",
    image: "https://i.pinimg.com/1200x/47/48/a1/4748a144c644c43524cd77daa80131af.jpg",
  },
];

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? movies.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${movies[current].image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {movies[current].title}
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          Login to Book Tickets
        </button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl"
      >
    
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl"
      >
    
      </button>
    </div>
  );
};

export default Landing;