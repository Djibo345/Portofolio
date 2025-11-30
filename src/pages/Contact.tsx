import { Reveal } from '../components/Reveal';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-accent mb-12">Contact</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <Reveal delay={0.2}>
                        <h2 className="text-2xl font-bold text-white mb-6">Entrons en contact</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Vous avez un projet en tête ou vous voulez simplement dire bonjour ? J'aimerais avoir de vos nouvelles. Remplissez le formulaire ou envoyez-moi un email directement.
                        </p>
                    </Reveal>

                    <div className="space-y-6">
                        <Reveal delay={0.3}>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-medium">d01619479@gmail.com</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Localisation</p>
                                    <p className="text-white font-medium">Mali, Bamako</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Téléphone</p>
                                    <p className="text-white font-medium">+223 70 55 99 50</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <Reveal delay={0.4}>
                    <form className="space-y-6 bg-secondary/30 p-8 rounded-2xl border border-white/5">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-gray-400">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Jean Dupont"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="jean@exemple.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-gray-400">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="Demande de projet"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                placeholder="Parlez-moi de votre projet..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:bg-accent-glow transition-all transform hover:scale-[1.02] flex items-center justify-center"
                        >
                            Envoyer le message <Send size={20} className="ml-2" />
                        </button>
                    </form>
                </Reveal>
            </div>
        </div>
    );
};

export default Contact;
