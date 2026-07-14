import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';

export const GenericPage = ({ title, subtitle, content }: { title: string, subtitle?: string, content?: string }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col">
            <PageHeader title={title} subtitle={subtitle} />
            <div className="container mx-auto px-6 max-w-4xl py-24 flex-grow">
                <div className="prose prose-invert max-w-none text-muted leading-relaxed">
                    {content ? (
                        <p className="text-lg">{content}</p>
                    ) : (
                        <>
                            <p className="text-xl mb-6">We are currently updating our {title.toLowerCase()} content. Please check back later.</p>
                            <p>Everything at Himalayan Software Solutions is engineered for scale, aesthetics, and optimal performance.</p>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
