import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Code2, MonitorPlay, Smartphone, Database, LineChart, Cloud, Brain, Shuffle, Paintbrush, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { icon: Code2, title: 'Custom Software Development', desc: 'Tailor-made, scalable solutions built around your exact business requirements.', link: '/services/custom-software' },
    { icon: MonitorPlay, title: 'Web Application Development', desc: 'Secure, high-performance web applications using modern monolithic or microservices architecture.', link: '/services/web-dev' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform mobile experiences for iOS and Android devices.', link: '/services/mobile-dev' },
    { icon: Database, title: 'ERP Development', desc: 'Comprehensive business management software streamlining core processes.', link: '/services/erp' },
    { icon: LineChart, title: 'CRM Development', desc: 'Powerful customer relationship tools that drive sales and client retention.', link: '/services/crm' },
    { icon: Cloud, title: 'Cloud Solutions', desc: 'Robust cloud infrastructure deployments, migrations, and cloud-native development.', link: '/services/cloud' },
    { icon: Brain, title: 'AI Integration', desc: 'Intelligent process automation and machine learning solutions for your business.', link: '/services/ai' },
    { icon: Shuffle, title: 'API Integration', desc: 'Seamlessly connect and sync distinct sub-systems and third-party software.', link: '/services/api' },
    { icon: Paintbrush, title: 'UI/UX Design', desc: 'Pixel-perfect, engaging, and premium interface designs like this one.', link: '/services/design' },
    { icon: LifeBuoy, title: 'Maintenance & Support', desc: '24/7 proactive monitoring, updates, and specialized technical support.', link: '/services/support' },
];

export const ServicesSection = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-6"
                    >
                        Capabilities & <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted text-lg"
                    >
                        End-to-end software engineering. We don't just write code; we solve complex business problems with state-of-the-art technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, idx) => {
                        const Icon = svc.icon;
                        return (
                            <Link to={svc.link} key={idx} className="block group">
                                <Card
                                    className="h-full group-hover:border-primary/50 transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx % 3) * 0.1 }}
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                        <Icon size={120} />
                                    </div>

                                    <div className="mb-6 p-4 rounded-xl bg-surface inline-block border border-borderColor w-fit group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="font-heading text-xl font-bold mb-3">{svc.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed mb-6">{svc.desc}</p>

                                    <div className="mt-auto flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        Learn more &rarr;
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
