import MovieCard from "../components/MovieCard";

const animeMovies = [
  {
    _id: "1",
    title: "Demon Slayer: Mugen Train",
    rating: 8.7,
    poster: "https://i.pinimg.com/1200x/de/76/d1/de76d1055480fe8c3b3fdbd00eef296d.jpg",
    description: "Tanjiro boards the Mugen Train to fight a powerful demon.",
    year: 2020,
  },
  {
    _id: "2",
    title: "Attack on Titan",
    rating: 9.1,
    poster: "https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg",
    description: "Humanity fights against terrifying Titans.",
    year: 2013,
  },
  {
    _id: "3",
    title: "Jujutsu Kaisen 0",
    rating: 8.6,
    poster: "https://i.pinimg.com/736x/4d/30/36/4d303692cebbf1421a3f6629c0d2c8eb.jpg",
    description: "Yuta joins Jujutsu High to control his cursed spirit.",
    year: 2021,
  },
  {
    _id: "4",
    title: "Your Name",
    rating: 8.4,
    poster: "https://i.pinimg.com/1200x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg",
    description: "Two strangers mysteriously swap bodies.",
    year: 2016,
  },
  {
    _id: "5",
    title: "Suzume",
    rating: 8.2,
    poster: "https://i.pinimg.com/736x/ff/7a/6d/ff7a6deccfc9faa64f1370c013e1692f.jpg",
    description: "A girl must close magical doors across Japan.",
    year: 2022,
  },
  {
    _id: "6",
    title: "Spirited Away",
    rating: 9.3,
    poster: "https://i.pinimg.com/736x/93/6b/c2/936bc2c8a46385dddd69ecaa1fe1d2d5.jpg",
    description: "A girl enters a mysterious spirit world.",
    year: 2001,
  },
  {
    _id: "7",
    title: "Frieren: Beyond Journey's End",
    rating: 9.3,
    poster: "https://i.pinimg.com/1200x/0e/31/8f/0e318f16d2c2e4d1c1e4efb3ff23482c.jpg",
  },
  {
    _id: "8",
    title: "The Apothecary Diaries",
    rating: 8.8,
    poster: "https://i.pinimg.com/1200x/47/48/a1/4748a144c644c43524cd77daa80131af.jpg",
  },
];

const Home = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {animeMovies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;