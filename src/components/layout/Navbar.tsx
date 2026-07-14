import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import logoImage from '../../assets/Logo/Logo.png';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Company', path: '/about' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logoImage} alt="Himalayan Software Solutions Logo" className="h-14 w-auto object-contain mix-blend-lighten" />
                        <span className="font-heading font-bold text-xl tracking-tight">Himalayan<span className="text-primary">.</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-muted'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Button variant="primary" size="sm">Start Project</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t-0 mt-4 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-lg font-medium text-muted hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="primary" className="mt-4 w-full">Start Project</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
