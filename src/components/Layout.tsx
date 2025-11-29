// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-white overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
