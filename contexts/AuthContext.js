'use client';
import { createContext, useState, useEffect, useCallback } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabaseBrowser';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const supabase = createSupabaseBrowserClient();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Effect to check for an active session on initial load
    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };
        getSession();

        // Listener for auth state changes (login, logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => {
            subscription?.unsubscribe();
        };
    }, [supabase.auth]);

    // Login function, memoized with useCallback
    const login = useCallback(async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
    }, [supabase.auth]);

    // SignUp function, memoized with useCallback
    const signUp = useCallback(async (email, password, fullName) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName, // This data is used by our SQL trigger
                }
            }
        });
        if (error) throw error;
        // You might want to show a "Check your email" message here
    }, [supabase.auth]);

    // Logout function, memoized with useCallback
    const logout = useCallback(async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    }, [supabase.auth]);

    const value = {
        user,
        loading,
        login,
        signUp,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};