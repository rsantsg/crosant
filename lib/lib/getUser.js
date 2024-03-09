'use client'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { useRouter } from 'next/navigation'

// Define custom hook to manage user authentication state
export function getUser() {
    const [user, setUser] = useState(null); // Initialize user state to null
    const router = useRouter(); // Get router instance

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            // Update user state when authentication state changes
            setUser(authUser.uid);
        });

        // Cleanup function to unsubscribe from the listener
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        // Check if user exists and their email changes, then refresh router
        if (user && user.email) {
            router.refresh();
        }
    }, [user, router]); // Trigger effect when user or router changes

    // Return the user state to be used by components
    return user;
}
