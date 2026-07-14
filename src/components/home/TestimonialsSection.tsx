import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'CEO, TechStart Inc.',
        content: 'Himalayan Software Solutions delivered our custom CRM ahead of schedule. The code quality and the premium UI they designed completely transformed our workflow. They are true engineers.',
    },
    {
        name: 'Rajiv Sharma',
        role: 'Director, Valley View Homestay',
        content: 'Their team built an incredible web property for our business. The transition animations and booking engine integration have directly resulted in a 40% increase in direct bookings.',
    },
    {
        name: 'Emily Chen',
        role: 'CTO, LogisticsPro',
        content: 'We migrated from a legacy ERP to Himalayan ERP. The cloud architecture handles our scale effortlessly. It is rare to find an agency that understands enterprise architecture so well.',
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4"
                    >
                        Client <span className="text-primary">Feedback</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <Card className="h-full border-primary/20 bg-background/50 backdrop-blur-xl">
                                <div className="flex gap-1 mb-6 text-accent">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-muted leading-relaxed mb-8 flex-1 italic">
                                    "{test.content}"
                                </p>
                                <div className="mt-auto">
                                    <h4 className="font-bold text-white mb-1">{test.name}</h4>
                                    <p className="text-sm text-primary">{test.role}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
