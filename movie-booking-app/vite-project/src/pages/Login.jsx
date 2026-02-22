import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../services/api";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);

      if (!res.data.token) {
        throw new Error("Token missing");
      }

      // Save token
      localStorage.setItem("token", res.data.token);

      // Update state
      setIsLoggedIn(true);

      // Redirect to movies page
      navigate("/movies");

    } catch (err) {
      console.log("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl w-96 space-y-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-semibold transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-cyan-400">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
