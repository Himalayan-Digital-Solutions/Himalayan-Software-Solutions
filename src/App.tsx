import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { GenericPage } from './pages/GenericPage';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />

                {/* Secondary Pages */}
                <Route path="/about" element={<GenericPage title="About Us" subtitle="We build intelligent software that powers modern businesses." />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/industries" element={<GenericPage title="Industries" subtitle="Solutions tailored for your industry." />} />
                <Route path="/portfolio" element={<GenericPage title="Portfolio" subtitle="Read our case studies." />} />
                <Route path="/technology" element={<GenericPage title="Technology" subtitle="The modern stack we use." />} />
                <Route path="/blog" element={<GenericPage title="Blog" subtitle="Insights and engineering thoughts." />} />
                <Route path="/careers" element={<GenericPage title="Careers" subtitle="Join our engineering team." />} />
                <Route path="/privacy" element={<GenericPage title="Privacy Policy" />} />
                <Route path="/terms" element={<GenericPage title="Terms of Service" />} />

                {/* Catch-alls */}
                <Route path="/services/*" element={<GenericPage title="Service Details" subtitle="Specialized engineering service." />} />
                <Route path="/products/*" element={<GenericPage title="Product Details" subtitle="Cloud SaaS Platform." />} />
                <Route path="/blog/*" element={<GenericPage title="Blog Article" />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <RootLayout>
                    <AnimatedRoutes />
                </RootLayout>
            </Router>
        </HelmetProvider>
    );
}

export default App;
