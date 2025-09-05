import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes >
        
        <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

        <Route path="/listings" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
