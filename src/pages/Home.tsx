import { Hero } from '../components/home/Hero';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedProductSection } from '../components/home/FeaturedProductSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BlogSection } from '../components/home/BlogSection';
import { ContactSection } from '../components/home/ContactSection';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col w-full"
        >
            <Hero />
            <TrustSection />
            <ServicesSection />
            <FeaturedProductSection />
            <WhyChooseUsSection />
            <IndustriesSection />
            <PortfolioSection />
            <ProcessSection />
            <TechStackSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
        </motion.div>
    );
};
