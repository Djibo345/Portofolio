import { Reveal } from '../components/Reveal';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Plateforme E-Commerce",
        description: "Une boutique en ligne complète construite avec Next.js, Stripe et Sanity CMS.",
        tags: ["Next.js", "Stripe", "Sanity", "Tailwind"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        links: { demo: "#", github: "#" }
    },
    {
        title: "App de Gestion de Tâches",
        description: "Une application de productivité pour gérer les tâches et les projets avec collaboration en temps réel.",
        tags: ["React", "Firebase", "Redux", "MUI"],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        links: { demo: "#", github: "#" }
    },
    {
        title: "Site Portfolio",
        description: "Un site portfolio moderne avec des animations fluides et un thème sombre.",
        tags: ["React", "Framer Motion", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        links: { demo: "#", github: "#" }
    }
];

const Projects = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-accent mb-12">Projets</h1>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.2}>
                        <div className="group rounded-xl overflow-hidden bg-secondary/50 border border-white/5 hover:border-accent/50 transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/50 text-accent border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href={project.links.github} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} className="mr-2" /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center text-sm text-accent hover:text-accent-glow transition-colors">
                                        Démo Live <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Projects;
