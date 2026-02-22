import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import TheatreSelection from "./pages/TheatreSelection";
import AdminDashboard from "./pages/AdminDashboard";
import Seats from "./pages/Seats";
const token = localStorage.getItem("token");

let isAdmin = false;

if (token) {
  const decoded = jwtDecode(token);
  if (decoded.role === "admin") {
    isAdmin = true;
  }
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-black text-white">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<Landing />} />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route
                path="/admin"
                element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
              />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/theatres/:id" element={<TheatreSelection />} />
             <Route path="/booking/:showId" element={<Booking />} />
              <Route path="/seats" element={<Seats />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;