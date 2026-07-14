import { motion } from 'framer-motion';

export const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden border-b border-borderColor/30 bg-surface/30">
            <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-heading text-4xl md:text-6xl font-bold mb-6"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-muted text-lg max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
