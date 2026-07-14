import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const technologies = [
    'React', 'Node.js', 'Express', 'MySQL', 'Docker', 'Nginx', 'Git', 'GitHub', 'Tailwind', 'TypeScript', 'Next.js', 'AWS', 'Vite', 'Framer Motion'
];

export const TechStackSection = () => {
    return (
        <section className="py-24 border-y border-borderColor/30 bg-surface/30">
            <div className="container mx-auto px-6 max-w-7xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/3">
                        <Layers className="text-primary mb-6" size={40} />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-3xl md:text-4xl font-bold mb-4"
                        >
                            Modern Stack
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted"
                        >
                            We leverage the latest and most stable technologies to ensure your product is scalable, fast, and future-proof.
                        </motion.p>
                    </div>

                    <div className="md:w-2/3 flex flex-wrap gap-4 justify-center md:justify-end">
                        {technologies.map((tech, idx) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: idx * 0.03 + 0.2, duration: 0.4 }}
                                className="px-6 py-3 rounded-full bg-background border border-borderColor hover:border-primary text-muted hover:text-white transition-colors cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
