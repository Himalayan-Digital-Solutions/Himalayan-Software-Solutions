import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PageHeader
                title="Get in Touch"
                subtitle="We're ready to help you build the next generation of software for your business."
            />
            <div className="container mx-auto px-6 max-w-7xl py-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    <div>
                        <h2 className="font-heading text-3xl font-bold mb-8">Contact Information</h2>
                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4 items-start group border-b border-borderColor/30 pb-6">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                    <p className="text-muted">hello@himalayansoftware.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group border-b border-borderColor/30 pb-6">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                    <p className="text-muted">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group border-b border-borderColor/30 pb-6">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MessageSquare />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                                    <p className="text-muted">Chat with our sales team instantly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group border-b border-borderColor/30 pb-6">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                                    <p className="text-muted">Sainj Valley, Himachal Pradesh<br />India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 md:p-10 rounded-2xl border border-borderColor">
                        <h3 className="font-heading text-2xl font-bold mb-6">Send an Inquiry</h3>
                        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-muted font-medium">First Name</label>
                                    <input type="text" className="w-full bg-surface border border-borderColor rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-muted font-medium">Last Name</label>
                                    <input type="text" className="w-full bg-surface border border-borderColor rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted font-medium">Work Email</label>
                                <input type="email" className="w-full bg-surface border border-borderColor rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted font-medium">Message</label>
                                <textarea rows={4} className="w-full bg-surface border border-borderColor rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                            </div>
                            <Button variant="primary" className="w-full h-12">Submit Inquiry</Button>
                        </form>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};
