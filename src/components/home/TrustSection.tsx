import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedCounter({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number, suffix?: string }) {
    const [count, setCount] = useState(from);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(Math.floor(from + (to - from) * progress));
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(to);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [inView, from, to, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export const TrustSection = () => {
    const stats = [
        { value: 500, suffix: '+', label: 'Enterprise Clients' },
        { value: 99, suffix: '.9%', label: 'Uptime SLA' },
        { value: 10, suffix: 'M+', label: 'Transactions Processed' },
        { value: 24, suffix: '/7', label: 'Dedicated Support' },
    ];

    return (
        <section className="py-24 relative overflow-hidden border-y border-borderColor/50 bg-background/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-16">
                    <p className="text-muted text-sm font-semibold tracking-widest uppercase mb-4">Trusted by innovative companies worldwide</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center justify-center text-center space-y-2"
                        >
                            <h3 className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
                                <AnimatedCounter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                            </h3>
                            <p className="text-muted text-sm md:text-base font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Categories strip */}
                <div className="mt-20 flex flex-wrap justify-center gap-4 text-muted text-sm sm:text-base">
                    {['Enterprise Software', 'Custom Solutions', 'Cloud Ready', 'Secure Architecture', 'AI Integration'].map((cat, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-borderColor bg-surface/30">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
