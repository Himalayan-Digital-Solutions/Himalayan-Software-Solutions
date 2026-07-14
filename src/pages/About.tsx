import { motion } from 'framer-motion';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Target, ShieldCheck, Zap, Workflow, Mountain, Globe2 } from 'lucide-react';

const values = [
    {
        icon: Mountain,
        title: 'Himalayan Resilience',
        desc: 'Our software is built to weather the toughest scaling conditions, firmly grounded in solid architectural principles.'
    },
    {
        icon: Target,
        title: 'Product-First Mindset',
        desc: 'We are not a standard outsourcing agency. We treat every project like our own flagship product.'
    },
    {
        icon: ShieldCheck,
        title: 'Engineering Excellence',
        desc: 'Zero corner-cutting. We enforce strict test-driven development and modern security compliance.'
    },
    {
        icon: Zap,
        title: 'Speed & Agility',
        desc: 'Billion-dollar execution velocity without sacrificing the underlying code quality.'
    },
    {
        icon: Workflow,
        title: 'Seamless Automation',
        desc: 'We replace chaotic business processes with intelligent, automated software workflows.'
    },
    {
        icon: Globe2,
        title: 'Global Scale',
        desc: 'From high-altitude startups to deep-enterprise deployments, we deploy systems globally.'
    }
];

export const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col bg-background">
            <PageHeader
                title="About Us"
                subtitle="Building Intelligent Software That Powers Modern Businesses."
            />

            <div className="container mx-auto px-6 max-w-7xl py-24 flex-grow">

                {/* Core Philosophy Section */}
                <section className="mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                                We are a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Software Product Company.</span>
                            </h2>
                            <div className="space-y-6 text-muted text-lg leading-relaxed">
                                <p>
                                    Himalayan Software Solutions emerged from a single mandate: to elevate the standard of enterprise software by merging state-of-the-art engineering with breathtaking design.
                                </p>
                                <p>
                                    We help startups, SMEs, and massive enterprises digitally transform through custom software development and our leading SaaS platforms like Himalayan ERP.
                                </p>
                                <p>
                                    We are not another generic IT agency. We don't use templates. We don't outsource logical flow. We are a team of dedicated technologists crafting premium digital experiences completely from scratch, scaling products up to support millions of concurrent actions.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square flex items-center justify-center p-8"
                        >
                            {/* Graphic Abstraction representing structural code / mountains */}
                            <div className="absolute inset-0 border border-borderColor rounded-[40px] bg-surface/50 backdrop-blur-sm transform rotate-3 scale-105" />
                            <div className="absolute inset-0 border border-primary/30 rounded-[40px] bg-background transform -rotate-2" />

                            <div className="w-full h-full relative z-10 rounded-[32px] overflow-hidden flex flex-col gap-4 p-8 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]">
                                <div className="flex gap-3 mb-8">
                                    <div className="w-4 h-4 rounded-full bg-red-500/80" />
                                    <div className="w-4 h-4 rounded-full bg-yellow-500/80" />
                                    <div className="w-4 h-4 rounded-full bg-green-500/80" />
                                </div>

                                {/* Animated Bars */}
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: '100%', opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                                        className="flex gap-4"
                                    >
                                        <div className="h-6 w-16 rounded bg-primary/20 shrink-0" />
                                        <div className={`h-6 rounded bg-surface border border-borderColor/50 shrink-0`} style={{ width: `${80 - (i * 10)}%` }} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl font-bold mb-6"
                        >
                            Our Core <span className="text-primary">Values</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted text-lg"
                        >
                            The fundamental principles that govern our architecture, design, and company culture.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <Card className="h-full border-borderColor/50 group">
                                        <div className="w-12 h-12 bg-surface border border-borderColor rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                                            <Icon className="text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading mb-4 text-white/90 group-hover:text-white transition-colors">{v.title}</h3>
                                        <p className="text-muted leading-relaxed">{v.desc}</p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>

            </div>
        </motion.div>
    );
};
