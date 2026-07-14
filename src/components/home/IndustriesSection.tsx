import { motion } from 'framer-motion';
import { ShoppingBag, Factory, GraduationCap, HeartPulse, Hotel, HardHat, Truck, Briefcase, Utensils, Rocket } from 'lucide-react';

const industries = [
    { name: 'Retail', icon: ShoppingBag },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Education', icon: GraduationCap },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Hospitality', icon: Hotel },
    { name: 'Construction', icon: HardHat },
    { name: 'Logistics', icon: Truck },
    { name: 'Professional Services', icon: Briefcase },
    { name: 'Restaurants', icon: Utensils },
    { name: 'Startups', icon: Rocket }
];

export const IndustriesSection = () => {
    return (
        <section className="py-24 border-y border-borderColor/30 relative">
            <div className="absolute inset-0 bg-surface/20 pointer-events-none" />
            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-4xl font-bold mb-4"
                    >
                        Industries We Serve
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <motion.div
                                key={ind.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className="group flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-xl border border-borderColor/50 bg-background hover:bg-surface hover:border-primary/50 transition-all cursor-pointer shadow-lg hover:shadow-primary/10"
                            >
                                <Icon className="text-muted group-hover:text-primary transition-colors" size={24} />
                                <span className="font-medium text-white/90 group-hover:text-white">{ind.name}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
