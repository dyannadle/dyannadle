import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    url?: string;
    image?: string;
    keywords?: string;
}

const SITE_URL = 'https://dyannadle.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const SEO: React.FC<SEOProps> = ({
    title = 'Deepak Yannadle | Software Tester & Developer',
    description = 'Portfolio of Deepak Yannadle, a Software Tester and Developer specializing in Automation Testing, Manual Testing, and AI/ML projects.',
    name = 'Deepak Yannadle',
    type = 'website',
    url = SITE_URL,
    image = DEFAULT_IMAGE,
    keywords = 'Deepak Yannadle, Software Tester, QA Engineer, Automation Testing, Selenium, Python, AI ML, Portfolio',
}) => {
    // JSON-LD structured data for Google rich results
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Deepak Yannadle',
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        jobTitle: 'Software Tester & Developer',
        description,
        sameAs: [
            'https://github.com/dyannadle',
            'https://linkedin.com/in/deepak-yannadle',
        ],
        knowsAbout: [
            'Software Testing',
            'Automation Testing',
            'Selenium',
            'Python',
            'AI/ML',
            'Manual Testing',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Deepak Yannadle Portfolio',
        url: SITE_URL,
        description,
        author: {
            '@type': 'Person',
            name: 'Deepak Yannadle',
        },
    };

    return (
        <Helmet>
            {/* ── Standard ────────────────────────────────────────── */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={name} />
            <link rel="canonical" href={url} />

            {/* ── Mobile / PWA ─────────────────────────────────────── */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#7c3aed" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Deepak Portfolio" />

            {/* ── Search engine verifications ──────────────────────── */}
            {/* Google – already using the HTML file in /public; this is a backup */}
            <meta name="google-site-verification" content="0dbb65bc5cf7265d" />
            {/* Bing – site already verified via Bing Webmaster Tools dashboard */}

            {/* ── Open Graph (Facebook / LinkedIn) ─────────────────── */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={`${name} – Portfolio`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Deepak Yannadle Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* ── Twitter Card ─────────────────────────────────────── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@deepakyannadle" />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* ── JSON-LD Structured Data ───────────────────────────── */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
