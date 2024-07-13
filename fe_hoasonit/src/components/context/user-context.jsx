import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [id, setId] = useState(() => localStorage.getItem('userId') || "");
    const [name, setName] = useState(() => localStorage.getItem('userName') || "");
    const [email, setEmail] = useState(() => localStorage.getItem('userEmail') || "");
    const [role, setRole] = useState(() => localStorage.getItem('userRole') || "");

    useEffect(() => {
        localStorage.setItem('userId', id);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', role);
    }, [id, name, email, role]);

    const login = (userData) => {
        setId(userData.id);
        setEmail(userData.email);
        setRole(userData.role);
        setName(userData.name);
    };

    const logout = () => {
        setEmail("");
        setName("");
        setId("");
        setRole("");
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRole');
    };

    return (
        <UserContext.Provider value={{ id, setId, role, setRole, email, setEmail, name, setName, login, logout }}>
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