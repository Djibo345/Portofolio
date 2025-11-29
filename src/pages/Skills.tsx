import { Reveal } from '../components/Reveal';

const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"] },
    { category: "Outils", items: ["Git", "Docker", "Figma", "VS Code", "Vite"] },
];

const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-accent mb-12">Compétences</h1>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                    <Reveal key={skillGroup.category} delay={index * 0.2}>
                        <div className="bg-secondary/50 p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-colors duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-primary rounded-full text-sm text-gray-300 border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Skills;
