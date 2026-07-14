import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SEO } from './SEO';

export const RootLayout = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <SEO />
            {/* Global Background Elements */}
            <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                {/* Aurora gradients */}
                <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px] mix-blend-screen pointer-events-none"></div>
            </div>

            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};
