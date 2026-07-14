import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business landscape and specific problem statements.' },
    { num: '02', title: 'Planning', desc: 'Architectural blueprints, tech stack selection, and milestone tracking.' },
    { num: '03', title: 'Design', desc: 'Figma prototypes, UI/UX conceptualization, and design systems.' },
    { num: '04', title: 'Development', desc: 'Agile sprints converting designs into robust, scalable code.' },
    { num: '05', title: 'Testing', desc: 'QA, automation testing, security audits, and performance tuning.' },
    { num: '06', title: 'Deployment', desc: 'CI/CD pipeline execution and zero-downtime cloud releases.' }
];

export const ProcessSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4"
                    >
                        How We <span className="text-primary">Build</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted text-lg max-w-2xl mx-auto"
                    >
                        A transparent, agile pipeline ensuring predictable delivery of high-quality software.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative group"
                        >
                            {/* Connector Line (hidden on mobile, visible on desktop between items) */}
                            {idx % 3 !== 2 && idx !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[28px] left-[60px] right-[-40px] h-[1px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
                            )}

                            <div className="flex gap-4 relative z-10">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-surface border border-borderColor flex items-center justify-center font-heading font-bold text-xl text-muted group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors shadow-lg">
                                    {step.num}
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-heading font-bold text-xl mb-2 text-white/90 group-hover:text-white transition-colors">{step.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
