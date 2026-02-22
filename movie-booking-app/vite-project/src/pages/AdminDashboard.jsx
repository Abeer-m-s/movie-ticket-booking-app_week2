import { useState } from "react";
import { api } from "../services/api";

const AdminDashboard = () => {
  const [movie, setMovie] = useState({
  title: "",
  japaneseTitle: "",
  year: "",
  rating: "",
  genre: "",
  description: "",
  duration: "",
  poster: ""
});

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/movies", movie);
      alert("Movie added successfully 🎬");
    } catch (err) {
      alert("Failed to add movie");
    }
  };

  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl mb-6">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
      <input name="japaneseTitle" placeholder="Japanese Title" onChange={handleChange} />
<input name="year" placeholder="Year" onChange={handleChange} />
<input name="rating" placeholder="Rating" onChange={handleChange} />
<textarea name="description" placeholder="Description" onChange={handleChange} />

        <button className="bg-green-600 p-3 rounded">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;