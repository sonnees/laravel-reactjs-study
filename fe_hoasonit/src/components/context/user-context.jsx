import React, { useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [id, setId] = useState(() => localStorage.getItem('userId') || "");
    const [name, setName] = useState(() => localStorage.getItem('userName') || "");
    const [email, setEmail] = useState(() => localStorage.getItem('userEmail') || "");
    const [role, setRole] = useState(() => localStorage.getItem('userRole') || "");
    const [token, setToken] = useState(() => Cookies.get('token') || "");

    useEffect(() => {
        localStorage.setItem('userId', id);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', role);
        Cookies.set('token', token, { expires: Number.parseInt(import.meta.env.VITE_TOKEN_EXPIRES)});
    }, [id, name, email, role, token]);

    const login = (userData, token) => {
        setId(userData.id);
        setEmail(userData.email);
        setRole(userData.role);
        setName(userData.name);
        setToken(token);
    };

    const logout = () => {
        Cookies.remove('token');
        setEmail("");
        setName("");
        setId("");
        setRole("");
        setToken("");
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRole');
    };

    return (
        <UserContext.Provider value={{ id, setId, role, setRole, email, setEmail, name, setName, token, setToken, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};