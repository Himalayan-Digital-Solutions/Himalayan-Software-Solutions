import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const ContactSection = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto glass rounded-3xl p-10 md:p-16 border border-primary/20 shadow-2xl relative overflow-hidden"
                >
                    {/* subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] pointer-events-none" />

                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Transform?</span>
                    </h2>
                    <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                        Whether you need a custom SaaS platform, an enterprise ERP, or a world-class website, our engineering team is ready to deliver.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-1 bg-surface border border-borderColor rounded-full px-6 h-14 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                        <Button variant="primary" size="lg" className="rounded-full shadow-lg hover:shadow-primary/50">
                            Let's Talk
                        </Button>
                    </form>

                    <p className="text-muted text-xs mt-6">
                        By connecting, you agree to our <a href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
