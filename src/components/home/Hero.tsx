import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { MousePointer2, ChevronDown } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 overflow-hidden">

            {/* Main Content */}
            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">

                {/* Premium Abstract Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex justify-center mb-10 pointer-events-none mx-auto max-w-xs relative"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-32 h-8 bg-primary/20 blur-[15px] rounded-full" />
                        <div className="absolute w-12 h-3 bg-accent/40 blur-[8px] rounded-full" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_3px_rgba(56,189,248,0.8)]" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-5xl mx-auto"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent Software</span> That Powers Modern Businesses.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    We build ERP systems, custom software, websites, mobile applications, AI-powered solutions and scalable cloud platforms that help businesses grow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                        Explore Himalayan ERP
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-md">
                        Start Your Project
                    </Button>
                </motion.div>

                {/* Abstract Floating Dashboard Illustration mock */}
                <motion.div
                    style={{ y, opacity }}
                    className="mt-20 mx-auto max-w-5xl relative pointer-events-none select-none"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                    <div className="relative glass rounded-t-2xl border-b-0 p-2 overflow-hidden shadow-2xl">
                        <div className="bg-surface/80 rounded-xl w-full h-[400px] md:h-[500px] border border-borderColor flex items-center justify-center relative overflow-hidden">
                            {/* Decorative mock dashboard items */}
                            <div className="absolute top-6 left-6 right-6 h-12 bg-white/5 rounded-lg border border-white/5"></div>
                            <div className="absolute top-24 left-6 w-64 h-32 bg-white/5 rounded-lg border border-white/5"></div>
                            <div className="absolute top-24 left-[300px] right-6 h-64 bg-white/5 rounded-lg border border-white/5"></div>
                            <div className="absolute bottom-6 left-6 right-6 h-32 bg-gradient-to-t from-primary/10 to-transparent"></div>

                            <MousePointer2 className="absolute top-[40%] text-white animate-pulse" size={32} />
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};
