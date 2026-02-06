import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

// Force dynamic rendering if needed, though this page is static-friendly.
export const dynamic = 'force-dynamic';

const LoginPage = () => {
    return (
        <div className="flex flex-col h-screen bg-[var(--bg-color)]">
            {/* Navbar - passing props if needed, or relying on its internal state */}
            <Navbar />

            {/* Main Content Area - Centered Login Form */}
            <main className="flex-grow flex items-center justify-center w-full px-4 py-12 md:py-20">
                <LoginForm />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LoginPage;
