import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/about' },
        { name: 'Compétences', path: '/skills' },
        { name: 'Services', path: '/services' },
        { name: 'Projets', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={twMerge(
                'fixed w-full z-50 transition-all duration-300',
                scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <Code2 className="w-8 h-8 text-accent group-hover:text-accent-glow transition-colors duration-300" />
                    <span className="text-2xl font-bold tracking-tighter group-hover:text-accent transition-colors duration-300">
                        DJIBO
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'text-sm font-medium transition-colors duration-300 hover:text-accent relative group',
                                location.pathname === link.path ? 'text-accent' : 'text-gray-300'
                            )}
                        >
                            {link.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                                location.pathname === link.path ? 'w-full' : ''
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-t border-white/10 md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={clsx(
                                        'text-lg font-medium transition-colors duration-300 hover:text-accent',
                                        location.pathname === link.path ? 'text-accent' : 'text-gray-300'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
