import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Valley View Homestay',
        type: 'Website & Booking Engine',
        desc: 'A premium, responsive website with seamless parallax effects and booking capability built for a luxury stay in the Himalayas.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind'],
        gradient: 'from-green-500/20 to-emerald-900/20',
    },
    {
        title: 'Swad Sakti Masala',
        type: 'E-Commerce Platform',
        desc: 'High-performance online store with real-time inventory tracking and integrated payment gateways.',
        tech: ['React', 'Node.js', 'MySQL'],
        gradient: 'from-red-500/20 to-orange-900/20',
    },
    {
        title: 'School Management System',
        type: 'SaaS Application',
        desc: 'Comprehensive portal connecting teachers, parents, and administration with attendance, grading, and fees management.',
        tech: ['Vite', 'Express', 'Docker'],
        gradient: 'from-blue-500/20 to-indigo-900/20',
    },
    {
        title: 'Restaurant CRM',
        type: 'Enterprise Tool',
        desc: 'Custom CRM allowing restaurants to manage table reservations, POS billing, and customer loyalty programs.',
        tech: ['TypeScript', 'React', 'MongoDB'],
        gradient: 'from-purple-500/20 to-pink-900/20',
    }
];

export const PortfolioSection = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl md:text-5xl font-bold mb-4"
                        >
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted text-lg max-w-2xl"
                        >
                            We've successfully partnered with businesses across sectors to deliver impactful digital products.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        href="/portfolio" className="text-primary hover:text-white font-medium flex items-center gap-2 transition-colors">
                        View All Case Studies <ArrowUpRight size={18} />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <Card className="h-full group-hover:border-primary/40 transition-colors p-0 overflow-hidden cursor-pointer flex flex-col">
                                <div className={`h-48 md:h-64 bg-gradient-to-br ${proj.gradient} relative overflow-hidden flex items-center justify-center`}>
                                    {/* Fake UI mockup placeholder */}
                                    <div className="absolute top-10 left-10 right-10 bottom-0 bg-background/80 rounded-t-xl border border-borderColor/50 shadow-2xl p-4 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="w-1/3 h-4 rounded bg-surface border border-borderColor/50"></div>
                                        <div className="flex gap-2">
                                            <div className="w-1/4 h-16 rounded bg-surface border border-borderColor/50"></div>
                                            <div className="w-3/4 h-16 rounded bg-surface border border-borderColor/50"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1 bg-surface relative z-10 transition-colors group-hover:bg-background">
                                    <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-2">{proj.type}</p>
                                    <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
                                        {proj.title}
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-muted leading-relaxed mb-6 flex-1">{proj.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {proj.tech.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-muted">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
