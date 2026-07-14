import { motion } from 'framer-motion';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
    Code2, MonitorPlay, Smartphone, Database,
    LineChart, Cloud, Brain, Shuffle, Paintbrush, LifeBuoy, CheckCircle2
} from 'lucide-react';

const allServices = [
    {
        id: 'custom-software',
        icon: Code2,
        title: 'Custom Software Development',
        desc: 'Bespoke, scalable software solutions engineered precisely around your proprietary business workflows. We eliminate bottlenecks by building tools that work the way you do.',
        features: ['Workflow Automation', 'Legacy Modernization', 'SaaS Product Development', 'Enterprise Portals']
    },
    {
        id: 'web-dev',
        icon: MonitorPlay,
        title: 'Web Application Development',
        desc: 'High-performance, secure, and responsive web applications. From internal dashboards to massive consumer-facing platforms, we build for scale.',
        features: ['Single Page Applications (SPAs)', 'Progressive Web Apps (PWAs)', 'Microservices Architecture', 'Headless CMS Integration']
    },
    {
        id: 'mobile-dev',
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile experiences that captivate users. We ensure flawless performance across iOS and Android ecosystems.',
        features: ['iOS Native (Swift)', 'Android Native (Kotlin)', 'React Native / Flutter', 'Mobile API Development']
    },
    {
        id: 'erp',
        icon: Database,
        title: 'ERP Development',
        desc: 'Comprehensive Enterprise Resource Planning systems to synchronize all facets of your operations from inventory to accounting into a single source of truth.',
        features: ['Custom ERP Logic', 'Finance & Accounting', 'Supply Chain Management', 'Third-Party Software Sync']
    },
    {
        id: 'crm',
        icon: LineChart,
        title: 'CRM Development',
        desc: 'Customer Relationship Management platforms designed to supercharge your sales pipeline, enhance customer retention, and track real-time analytics.',
        features: ['Sales Funnel Tracking', 'Lead Management', 'Automated Marketing Pipelines', 'Email & SMS Integrations']
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud Solutions',
        desc: 'Future-proof your infrastructure. We architect, deploy, and manage scalable cloud-native architectures ensuring 99.99% uptime.',
        features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'Cloud Migrations', 'Serverless Computing']
    },
    {
        id: 'ai',
        icon: Brain,
        title: 'AI Integration',
        desc: 'Leverage artificial intelligence and machine learning to automate complex data analysis, enhance customer support, and build predictive models.',
        features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Custom GPT/LLM Implementations']
    },
    {
        id: 'api',
        icon: Shuffle,
        title: 'API Integration',
        desc: 'We seamlessly connect distinct sub-systems, unifying your tech stack through secure and lightning-fast custom API architectures.',
        features: ['RESTful API Design', 'GraphQL Implementations', 'Payment Gateways', 'Third-party Logistics (3PL)']
    },
    {
        id: 'design',
        icon: Paintbrush,
        title: 'UI/UX Design',
        desc: 'Pixel-perfect, engaging interfaces that look like a billion-dollar brand. We focus on conversion, accessibility, and breathtaking aesthetics.',
        features: ['Prototyping & Wireframing', 'Design Systems', 'Usability Testing', 'Interactive Micro-animations']
    },
    {
        id: 'support',
        icon: LifeBuoy,
        title: 'Maintenance & Support',
        desc: 'Our relationship doesn\'t end at deployment. We provide dedicated monitoring, security patching, and continuous feature expansion.',
        features: ['24/7 Server Monitoring', 'Security Audits', 'Performance Optimization', 'Version Upgrades']
    },
];

export const Services = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col bg-background">
            <PageHeader
                title="Our Services"
                subtitle="End-to-end software engineering excellence tailored for scaling businesses."
            />

            <div className="container mx-auto px-6 max-w-7xl py-24 flex-grow">
                <div className="space-y-32">
                    {allServices.map((service, idx) => {
                        const Icon = service.icon;
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                {/* Visual Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors pointer-events-none" />
                                    <Card className="aspect-square flex items-center justify-center p-12 border-primary/20 relative overflow-hidden bg-surface/50 backdrop-blur-xl group-hover:border-primary/40 transition-colors">
                                        {/* Abstract tech background graphic */}
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-surface to-background"></div>
                                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[60px]" />
                                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />

                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 200 }}
                                            className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-background border border-borderColor flex items-center justify-center shadow-2xl shadow-primary/20"
                                        >
                                            <Icon size={80} className="text-white drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]" strokeWidth={1} />
                                        </motion.div>
                                    </Card>
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                                        <span className="font-heading font-bold">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                    </div>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                                    <p className="text-muted text-lg leading-relaxed mb-8">
                                        {service.desc}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                                <span className="text-white/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to={`/contact?service=${service.id}`}>
                                        <Button variant="outline" className="gap-2">
                                            Discuss this service
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Global CTA */}
            <section className="py-24 border-t border-borderColor/50 bg-primary/5 mt-16">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Need a custom approach?</h2>
                    <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">Our architects can design a tailored technology stack and roadmap for your specific business case.</p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Schedule a Consultation</Button>
                    </Link>
                </div>
            </section>

        </motion.div>
    );
};
