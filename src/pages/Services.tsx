import { Reveal } from '../components/Reveal';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const services = [
    {
        icon: <Code size={40} />,
        title: "Développement Web",
        description: "Création de sites web rapides, réactifs et évolutifs utilisant des technologies modernes comme React, Next.js et Tailwind CSS."
    },
    {
        icon: <Palette size={40} />,
        title: "Design UI/UX",
        description: "Conception d'interfaces utilisateur intuitives et visuellement attrayantes offrant des expériences utilisateur fluides."
    },
    {
        icon: <Smartphone size={40} />,
        title: "Développement Mobile",
        description: "Développement d'applications mobiles multiplateformes utilisant React Native et Expo."
    },
    {
        icon: <Globe size={40} />,
        title: "Optimisation SEO",
        description: "Optimisation des sites web pour les moteurs de recherche afin d'améliorer la visibilité et le trafic organique."
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-accent mb-12">Services</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Reveal key={service.title} delay={index * 0.2}>
                        <div className="bg-secondary/50 p-8 rounded-xl border border-white/5 hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300 group">
                            <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Services;
