import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";


const AuthContext = createContext(null);


export function AuthProvider({ children }) {
const [user, setUser] = useState(() => {
const cached = localStorage.getItem("re_user");
return cached ? JSON.parse(cached) : null;
});
const [loading, setLoading] = useState(true);



useEffect(() => {
const unsub = onAuthStateChanged(auth, (firebaseUser) => {
setUser(firebaseUser);
if (firebaseUser) {
localStorage.setItem("re_user", JSON.stringify({
uid: firebaseUser.uid,
email: firebaseUser.email,
}));
} else {
localStorage.removeItem("re_user");
}
setLoading(false);
});
return () => unsub();
}, []);


const logout = () => signOut(auth);


return (
<AuthContext.Provider value={{ user, loading, logout }}>
{children}
</AuthContext.Provider>
);
}


export function useAuth() {
return useContext(AuthContext);
}