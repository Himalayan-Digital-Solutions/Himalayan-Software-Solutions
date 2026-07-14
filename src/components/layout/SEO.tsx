import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
}

export const SEO = ({
    title = 'Himalayan Software Solutions - Building Intelligent Software',
    description = 'Himalayan Software Solutions is a modern software company helping startups, SMEs and enterprises digitally transform their businesses through custom software development and SaaS products.',
    canonicalUrl = 'https://himalayansoftware.com'
}: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://himalayansoftware.com/og-image.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="https://himalayansoftware.com/twitter-image.jpg" />

            {/* JSON-LD Schema.org Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Himalayan Software Solutions",
                    "url": canonicalUrl,
                    "logo": "https://himalayansoftware.com/logo.png",
                    "description": description,
                    "sameAs": [
                        "https://twitter.com/himalayansoftware",
                        "https://linkedin.com/company/himalayansoftware"
                    ]
                })}
            </script>
        </Helmet>
    );
};
