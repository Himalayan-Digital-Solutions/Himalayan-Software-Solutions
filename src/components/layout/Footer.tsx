import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="border-t border-borderColor bg-background py-12 lg:py-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
                    <div className="md:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <span className="font-heading font-bold text-2xl tracking-tight">Himalayan<span className="text-primary">.</span></span>
                        </Link>
                        <p className="text-muted text-sm max-w-xs">
                            Building Intelligent Software That Powers Modern Businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Products</h4>
                        <ul className="space-y-4">
                            <li><Link to="/products/erp" className="text-muted hover:text-white transition-colors text-sm">Himalayan ERP</Link></li>
                            <li><Link to="/products/crm" className="text-muted hover:text-white transition-colors text-sm">Cloud CRM</Link></li>
                            <li><Link to="/products/pos" className="text-muted hover:text-white transition-colors text-sm">Cloud POS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/custom-software" className="text-muted hover:text-white transition-colors text-sm">Custom Software</Link></li>
                            <li><Link to="/services/web-dev" className="text-muted hover:text-white transition-colors text-sm">Web Apps</Link></li>
                            <li><Link to="/services/mobile-dev" className="text-muted hover:text-white transition-colors text-sm">Mobile Apps</Link></li>
                            <li><Link to="/services/ai" className="text-muted hover:text-white transition-colors text-sm">AI Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-muted hover:text-white transition-colors text-sm">About</Link></li>
                            <li><Link to="/careers" className="text-muted hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link to="/contact" className="text-muted hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link to="/privacy" className="text-muted hover:text-white transition-colors text-sm">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-borderColor flex flex-col md:flex-row items-center justify-between">
                    <p className="text-muted text-sm">
                        © {new Date().getFullYear()} Himalayan Software Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social icons if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
