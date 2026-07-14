import { motion } from 'framer-motion';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Users, Database, Zap, ShieldCheck } from 'lucide-react';

const products = [
    {
        id: 'himalayan-erp',
        title: 'Himalayan ERP',
        tagline: 'The Ultimate Cloud-Based Business Management System',
        description: 'Our flagship Enterprise Resource Planning platform. Seamlessly manage inventory, sales, purchases, POS, GST billing, human resources, and detailed financial accounting from one unified, lightning-fast dashboard.',
        features: [
            { icon: LayoutDashboard, text: 'Real-time Analytics Dashboard' },
            { icon: Database, text: 'Advanced Inventory & Logistics' },
            { icon: Users, text: 'Integrated HR & Payroll' },
            { icon: Zap, text: 'Automated Workflows' }
        ],
        primary: true
    },
    {
        id: 'cloud-crm',
        title: 'Himalayan CRM',
        tagline: 'Modern Customer Relationship Management',
        description: 'A powerful sales pipeline tracker designed to supercharge your conversion rates. Monitor lead statuses, automate marketing follow-ups, and visualize sales forecasts instantly.',
        features: [
            { icon: Users, text: '360° Customer View' },
            { icon: Zap, text: 'Sales Automation' },
            { icon: ShieldCheck, text: 'Secure Data Storage' }
        ],
        primary: false
    },
    {
        id: 'cloud-pos',
        title: 'Cloud POS',
        tagline: 'Lightning-fast Point of Sale',
        description: 'Built for retail and hospitality, our POS system works offline and syncs instantly to the cloud when reconnected. Integrates directly with Himalayan ERP.',
        features: [
            { icon: ShoppingCart, text: 'Offline Mode Support' },
            { icon: LayoutDashboard, text: 'Multi-store Management' },
            { icon: Zap, text: 'Instant Tax Calculation' }
        ],
        primary: false
    }
];

export const Products = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col bg-background">
            <PageHeader
                title="Our Products"
                subtitle="Intelligent, scalable SaaS solutions engineered to accelerate your digital transformation."
            />

            <div className="container mx-auto px-6 max-w-7xl py-24 flex-grow">

                {/* Core Product Features Overview */}
                <div className="grid lg:grid-cols-1 gap-16 mb-24">
                    {products.map((product) => {
                        if (product.primary) {
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary via-primary/20 to-transparent"
                                >
                                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                                    <div className="bg-surface/90 backdrop-blur-2xl rounded-[23px] overflow-hidden p-8 lg:p-12 border border-borderColor flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                                        <div className="w-full lg:w-1/2 relative z-10">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                                Flagship
                                            </div>
                                            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{product.title}</h2>
                                            <h3 className="text-xl text-primary font-medium mb-6">{product.tagline}</h3>
                                            <p className="text-muted leading-relaxed mb-10 text-lg">
                                                {product.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                                {product.features.map((feature, fIdx) => {
                                                    const Icon = feature.icon;
                                                    return (
                                                        <div key={fIdx} className="flex gap-4 items-start">
                                                            <div className="w-10 h-10 rounded-lg bg-background border border-borderColor flex items-center justify-center text-primary flex-shrink-0">
                                                                <Icon size={20} />
                                                            </div>
                                                            <span className="text-white font-medium py-2 text-sm">{feature.text}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className="flex flex-wrap gap-4">
                                                <Button variant="primary" size="lg">Start Free Trial</Button>
                                                <Button variant="outline" size="lg">Schedule Demo</Button>
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 relative">
                                            <div className="aspect-[4/3] rounded-2xl bg-background border border-borderColor shadow-2xl shadow-primary/10 overflow-hidden relative group">

                                                {/* Mock UI window */}
                                                <div className="h-10 bg-surface border-b border-borderColor flex items-center px-4 gap-2 w-full">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                </div>
                                                <div className="p-6 h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col gap-4 group-hover:scale-105 transition-transform duration-700">
                                                    <div className="flex gap-4">
                                                        <div className="w-48 h-24 bg-surface rounded-xl border border-borderColor shadow relative overflow-hidden">
                                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent"></div>
                                                            <div className="absolute top-4 left-4 w-8 h-8 rounded bg-primary/20"></div>
                                                        </div>
                                                        <div className="flex-1 h-24 bg-surface rounded-xl border border-borderColor shadow relative overflow-hidden">
                                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/30 to-transparent"></div>
                                                            <div className="absolute top-4 left-4 w-8 h-8 rounded bg-accent/20"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-surface rounded-xl border border-borderColor flex items-end p-6 gap-2">
                                                        {[40, 70, 45, 90, 65, 100, 80, 110, 85, 120].map((h, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ height: 0 }}
                                                                whileInView={{ height: `${h}%` }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                                                                className="flex-1 bg-primary/40 rounded-t-sm"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }
                    })}
                </div>

                {/* Secondary Products */}
                <div className="grid md:grid-cols-2 gap-8">
                    {products.filter(p => !p.primary).map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <Card className="h-full flex flex-col p-8 group">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                                        <p className="text-sm font-semibold text-accent">{product.tagline}</p>
                                    </div>
                                </div>

                                <p className="text-muted leading-relaxed mb-8 flex-grow">
                                    {product.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {product.features.map((feature, fIdx) => {
                                        const Icon = feature.icon;
                                        return (
                                            <div key={fIdx} className="flex gap-3 items-center text-sm font-medium text-white/80">
                                                <Icon size={16} className="text-primary" />
                                                {feature.text}
                                            </div>
                                        )
                                    })}
                                </div>

                                <Link to={`/contact?product=${product.id}`}>
                                    <Button variant="outline" className="w-full">Request Beta Access</Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
