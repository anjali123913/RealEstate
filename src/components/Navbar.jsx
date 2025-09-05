import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ icons

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "bg-gray-500 text-white"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl text-brand-600"
        >
          EstatePro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/listings" className={linkClass}>
            Listings
          </NavLink>
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-2 px-3 py-2 text-sm bg-slate-800 text-white rounded-md hover:bg-slate-900"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <NavLink to="/signup" className={linkClass}>
                Signup
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile toggle button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <nav className="flex flex-col p-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/listings" className={linkClass} onClick={() => setIsOpen(false)}>
              Listings
            </NavLink>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="mt-2 px-3 py-2 text-sm bg-slate-800 text-white rounded-md hover:bg-slate-900"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" className={linkClass} onClick={() => setIsOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/signup" className={linkClass} onClick={() => setIsOpen(false)}>
                  Signup
                </NavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
