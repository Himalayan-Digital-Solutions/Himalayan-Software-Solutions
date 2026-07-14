import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { LayoutDashboard, Package, ShoppingCart, FileText, Users, DollarSign } from 'lucide-react';

const features = [
    { icon: LayoutDashboard, title: 'Dashboard', desc: 'Centralized view of all business metrics.' },
    { icon: Package, title: 'Inventory', desc: 'Real-time stock tracking and management.' },
    { icon: ShoppingCart, title: 'Sales & POS', desc: 'Streamlined checkout and sales orders.' },
    { icon: FileText, title: 'GST Billing', desc: 'Compliant automated invoicing and tax.' },
    { icon: Users, title: 'HR & Employees', desc: 'Manage payroll, attendance, and staff.' },
    { icon: DollarSign, title: 'Accounting', desc: 'Complete financial control and reporting.' },
];

export const FeaturedProductSection = () => {
    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Flagship Platform
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Himalayan <span className="text-primary">ERP</span>
                        </h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed max-w-xl">
                            An all-in-one cloud-based business management software that helps companies manage inventory, sales, purchases, accounting, customers, employees, reporting, and operations from one unified dashboard.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {features.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-white font-medium">
                                            <Icon className="text-primary" size={20} />
                                            {item.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex gap-4">
                            <Button variant="primary">Request Demo</Button>
                            <Button variant="outline">View Features</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glowing backdrop */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

                        <Card className="p-2 border-primary/20">
                            <div className="bg-background rounded-xl overflow-hidden border border-borderColor">
                                {/* Mac style header */}
                                <div className="h-10 bg-surface border-b border-borderColor flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <div className="mx-auto text-xs text-muted">erp.himalayansoftware.com</div>
                                </div>
                                {/* Dashboard body */}
                                <div className="p-6 h-[400px] flex flex-col gap-4 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="w-32 h-6 bg-surface rounded" />
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-surface" />
                                            <div className="w-8 h-8 rounded-full bg-surface" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="h-24 bg-surface rounded-lg border border-borderColor/50 p-4 flex flex-col justify-between">
                                                <div className="w-8 h-8 rounded bg-primary/20" />
                                                <div className="w-16 h-2 bg-muted/20 rounded mt-2" />
                                                <div className="w-24 h-4 bg-white/20 rounded mt-2" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-surface rounded-lg border border-borderColor/50 mt-4 flex items-end p-4 gap-4">
                                        {/* Fake Chart Columns */}
                                        {[100, 60, 80, 40, 90, 70, 110, 50].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: h }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                                className="flex-1 bg-primary/40 rounded-t border-t border-primary/50"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
