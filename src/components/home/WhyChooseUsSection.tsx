import { motion } from 'framer-motion';
import { Shield, Zap, Server, LifeBuoy, CloudCog, Braces } from 'lucide-react';
import { Card } from '../ui/Card';

const reasons = [
    { icon: Server, title: 'Enterprise Architecture', text: 'Built on scalable microservices or robust monoliths, depending on requirements.' },
    { icon: Zap, title: 'Fast Delivery', text: 'Agile methodologies ensuring rapid prototyping and timely product launches.' },
    { icon: Shield, title: 'Secure Software', text: 'Bank-grade security protocols, standard encryption, and rigid penetration testing.' },
    { icon: CloudCog, title: 'Cloud Native', text: 'Designed for AWS, Google Cloud, or Azure with auto-scaling capabilities.' },
    { icon: Braces, title: 'Custom Built', text: 'Zero templates. Every line of code is written specifically for your business logic.' },
    { icon: LifeBuoy, title: 'Long Term Support', text: 'Dedicated engineers attached to your project long after deployment.' }
];

export const WhyChooseUsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-surface">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-6"
                    >
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted text-lg"
                    >
                        We don't cut corners. Our software solutions are built on solid architectural foundations ensuring performance and scalability.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <Card
                                    glass={false}
                                    hoverEffect={false}
                                    className="bg-background border-borderColor/50 h-full !p-8 group"
                                >
                                    <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                                        <Icon className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-3">{r.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{r.text}</p>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
