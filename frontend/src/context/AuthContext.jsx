import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [key, setKey] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // Optionally, you can decode the token to get user info
            // setUser(decodedToken);
        }
    }, []);

    const login = (token, isAdmin) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setKey(prevKey => prevKey + 1);
        if (isAdmin) {
            navigate('/admin');
        } else {
            navigate('/');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        setKey(prevKey => prevKey + 1);
        localStorage.setItem('refreshOnce', 'true');
        console.log('refreshOnce flag set');
        navigate('/signin');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, key }}>
            {children}
        </AuthContext.Provider>
    );
};