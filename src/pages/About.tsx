import { Reveal } from '../components/Reveal';
import { User, MapPin, Calendar, Mail } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-accent mb-12">À propos de moi</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <Reveal delay={0.2}>
                    <div className="relative group cursor-pointer">
                        {/* Animated gradient border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-600 to-accent bg-[length:200%_200%] rounded-2xl blur opacity-40 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:animate-none"></div>

                        {/* Rotating gradient on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:animate-spin-slow"></div>

                        {/* Image container */}
                        <div className="relative bg-secondary rounded-2xl border-2 border-white/10 overflow-hidden group-hover:border-accent/50 transition-all duration-500">
                            <img
                                src="/djibo.jpg"
                                alt="Djibo"
                                className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Je suis un développeur passionné avec un œil attentif pour le design. Je me spécialise dans la création d'applications web modernes, réactives et conviviales. Avec une solide base en technologies frontend et backend, je m'efforce de créer des expériences numériques fluides.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de contribuer à des projets open-source ou de savourer une bonne tasse de café.
                        </p>

                        <div className="pt-6 space-y-4">
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-accent transition-colors duration-300">
                                <User className="w-6 h-6 text-accent" />
                                <span className="text-lg">Djibo</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-accent transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-accent" />
                                <span className="text-lg">Paris, France</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-accent transition-colors duration-300">
                                <Calendar className="w-6 h-6 text-accent" />
                                <span className="text-lg">Disponible pour freelance</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-accent transition-colors duration-300">
                                <Mail className="w-6 h-6 text-accent" />
                                <span className="text-lg">contact@djibo.dev</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default About;
