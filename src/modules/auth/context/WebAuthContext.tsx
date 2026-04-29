import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: string;
    token?: string;
}

interface WebAuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    loading: boolean;
}

const WebAuthContext = createContext<WebAuthContextType | undefined>(undefined);

export const WebAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load user from localStorage on initial load
        const storedUser = localStorage.getItem('dentplus_user_session');
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                if (parsed && typeof parsed === 'object' && parsed.email) {
                    setUser(parsed);
                } else {
                    localStorage.removeItem('dentplus_user_session');
                }
            } catch (error) {
                localStorage.removeItem('dentplus_user_session');
            }
        }
        setLoading(false);
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        // We simulate a token for compatibility with the reference structure
        const sessionData = { ...userData, token: 'mock-jwt-token-' + Math.random() };
        localStorage.setItem('dentplus_user_session', JSON.stringify(sessionData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('dentplus_user_session');
    };

    return (
        <WebAuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </WebAuthContext.Provider>
    );
};

export const useWebAuth = () => {
    const context = useContext(WebAuthContext);
    if (context === undefined) {
        throw new Error('useWebAuth must be used within a WebAuthProvider');
    }
    return context;
};
