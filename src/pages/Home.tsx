import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-75" />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-150" />
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                        <h2 className="text-xl md:text-2xl text-accent font-medium">
                            Bonjour, je suis
                        </h2>
                        <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
                    >
                        <span className="text-white">DJIBO</span>
                        <span className="text-accent">.</span>
                    </motion.h1>

                    {/* Subtitle with icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Code className="w-6 h-6 text-accent" />
                            <p className="text-gray-400 text-xl md:text-3xl font-semibold">
                                Développeur Créatif
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Zap className="w-6 h-6 text-purple-500" />
                            <p className="text-gray-400 text-xl md:text-3xl font-semibold">
                                Designer UI/UX
                            </p>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed"
                    >
                        Je conçois des <span className="text-accent font-semibold">expériences numériques exceptionnelles</span> en combinant
                        créativité, code élégant et design moderne. Spécialisé en <span className="text-purple-400 font-semibold">React</span>,
                        <span className="text-purple-400 font-semibold"> TypeScript</span> et <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10"
                    >
                        <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all">
                            <div className="text-3xl font-bold text-accent mb-1">3+</div>
                            <div className="text-sm text-gray-400">Années d'expérience</div>
                        </div>
                        <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all">
                            <div className="text-3xl font-bold text-accent mb-1">50+</div>
                            <div className="text-sm text-gray-400">Projets réalisés</div>
                        </div>
                        <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all">
                            <div className="text-3xl font-bold text-accent mb-1">100%</div>
                            <div className="text-sm text-gray-400">Satisfaction client</div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
                    >
                        <Link
                            to="/projects"
                            className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg shadow-accent/50"
                        >
                            <span className="relative z-10 flex items-center">
                                Voir mes travaux <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            className="group px-8 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-all hover:scale-105 flex items-center shadow-lg shadow-accent/20"
                        >
                            Télécharger CV <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="mt-16"
                    >
                        <div className="flex flex-col items-center gap-2 text-gray-500">
                            <span className="text-sm">Scroll pour découvrir</span>
                            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
