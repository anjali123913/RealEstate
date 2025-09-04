import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {
const { user, logout } = useAuth();
const navigate = useNavigate();


async function handleLogout() {
await logout();
navigate("/");
}


const linkClass = ({ isActive }) =>
`px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-brand-500 text-white" : "text-slate-700 hover:bg-slate-100"}`;


return (
<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<Link to="/" className="font-bold text-xl text-brand-600">EstatePro</Link>
<nav className="flex items-center gap-2">
<NavLink to="/" className={linkClass}>Home</NavLink>
<NavLink to="/listings" className={linkClass}>Listings</NavLink>
{user ? (
<button onClick={handleLogout} className="ml-2 px-3 py-2 text-sm bg-slate-800 text-white rounded-md hover:bg-slate-900">Logout</button>
) : (
<>
<NavLink to="/login" className={linkClass}>Login</NavLink>
<NavLink to="/signup" className={linkClass}>Signup</NavLink>
</>
)}
</nav>
</div>
</header>
);
}