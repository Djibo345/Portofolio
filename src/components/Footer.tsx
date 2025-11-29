import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary/50 py-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Djibo. Tous droits réservés.
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:contact@djibo.dev" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm">
                        <span>Fait avec</span>
                        <Heart size={16} className="mx-1 text-red-500 fill-red-500" />
                        <span>par Djibo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
