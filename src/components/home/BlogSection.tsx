import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        title: 'The Future of Cloud ERP Systems in 2024',
        category: 'Technology',
        date: 'Oct 12, 2023',
        desc: 'How artificial intelligence and machine learning are revolutionizing the way enterprise resources are managed.',
    },
    {
        title: 'Why Monolithic Architecture is Making a Comeback',
        category: 'Software Engineering',
        date: 'Sep 28, 2023',
        desc: 'Microservices aren\'t always the answer. We explore when a monolith is the superior architectural choice.',
    },
    {
        title: 'Digital Transformation for SMEs: A Practical Guide',
        category: 'Business Automation',
        date: 'Aug 15, 2023',
        desc: 'A step-by-step approach to digitizing your operations without disrupting existing revenue streams.',
    }
];

export const BlogSection = () => {
    return (
        <section className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl md:text-5xl font-bold mb-4"
                        >
                            Latest Insights
                        </motion.h2>
                    </div>
                    <Link to="/blog" className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium">
                        Read all articles <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Link to={`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`} className="block group h-full">
                                <Card className="h-full border-borderColor/50 p-6 flex flex-col group-hover:border-primary/50 group-hover:bg-surface/50 transition-colors">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{blog.category}</span>
                                        <span className="text-xs text-muted">{blog.date}</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-primary transition-colors flex items-start justify-between gap-4">
                                        {blog.title}
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mt-auto">{blog.desc}</p>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
