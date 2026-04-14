import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'LogicLife Technologies';
const LOGO_URL  = 'https://www.logiclifetechnologies.com/logo_transparent.png';
const OG_IMAGE  = 'https://www.logiclifetechnologies.com/og-image.jpg';

// ── Per-page SEO data ─────────────────────────────────────────────────────
const seoData = {

 
  home: {
    title: 'Logic Life Technologies | Digital Marketing Company in Visakhapatnam',
    description: 'Helping businesses grow with website development, branding & digital marketing in Visakhapatnam.',
    keywords: 'digital marketing company visakhapatnam, web development visakhapatnam, website development vizag, branding company andhra pradesh, IT company visakhapatnam',
    canonical: 'https://www.logiclifetechnologies.com/',
  },

  about: {
    title: 'About Us | LogicLife Technologies — Software Company Visakhapatnam',
    description: 'Learn about LogicLife Technologies — 8+ years of experience, 150+ projects delivered, 50+ team members. A trusted digital solutions partner in Visakhapatnam, Andhra Pradesh.',
    keywords: 'about logiclife technologies, IT company vizag, software development team visakhapatnam',
    canonical: 'https://www.logiclifetechnologies.com/about',
  },

  services: {
    title: 'Our Services | Web, Mobile, Software & Digital Marketing — LogicLife Technologies',
    description: 'Comprehensive digital services: Web Development, Mobile App Development, Custom Software, UI/UX Design, Digital Marketing, Cloud Services & Cybersecurity in Visakhapatnam.',
    keywords: 'web development services visakhapatnam, mobile app development, software development vizag, digital marketing agency visakhapatnam, cloud services andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/services',
  },

  portfolio: {
    title: 'Portfolio | Featured Projects — LogicLife Technologies Visakhapatnam',
    description: 'Explore our portfolio of 150+ successful web and mobile app projects across e-commerce, healthcare, education, fintech and more. Built by LogicLife Technologies.',
    keywords: 'logiclife technologies portfolio, software projects vizag, mobile app portfolio india, web development portfolio visakhapatnam',
    canonical: 'https://www.logiclifetechnologies.com/portfolio',
  },

  technologies: {
    title: 'Technologies We Use | React, Flutter, AWS & More — LogicLife Technologies',
    description: 'Our tech stack includes React, Next.js, Flutter, Node.js, Python, AWS, Azure and more. LogicLife Technologies uses modern technologies to build future-ready solutions.',
    keywords: 'react development visakhapatnam, flutter app development, node.js developers vizag, aws cloud services india',
    canonical: 'https://www.logiclifetechnologies.com/technologies',
  },

  careers: {
    title: 'Careers | Join Our Team — LogicLife Technologies Visakhapatnam',
    description: 'Join LogicLife Technologies! Open positions for Full Stack Developers, React Native Developers, UI/UX Designers & DevOps Engineers in Visakhapatnam & Remote.',
    keywords: 'software jobs visakhapatnam, developer jobs vizag, IT jobs andhra pradesh, react developer jobs, flutter developer jobs visakhapatnam',
    canonical: 'https://www.logiclifetechnologies.com/careers',
  },

  contact: {
    title: 'Contact Us | Get a Free Consultation — LogicLife Technologies Visakhapatnam',
    description: 'Contact LogicLife Technologies for web development, mobile apps, software solutions & digital marketing in Visakhapatnam. Call +91 95029 24788 or email us today.',
    keywords: 'contact logiclife technologies, web development consultation visakhapatnam, software company contact vizag',
    canonical: 'https://www.logiclifetechnologies.com/contact',
  },

  // ✅ FIX: key is 'privacyPolicy' AND 'privacy-policy' both work now
  privacyPolicy: {
    title: 'Privacy Policy | LogicLife Technologies',
    description: 'Read the Privacy Policy of LogicLife Technologies. Learn how we collect, use and protect your personal information.',
    keywords: 'logiclife technologies privacy policy',
    canonical: 'https://www.logiclifetechnologies.com/privacy-policy',
  },

  terms: {
    title: 'Terms & Conditions | LogicLife Technologies',
    description: 'Terms and Conditions governing the use of LogicLife Technologies services. Read before engaging our services.',
    keywords: 'logiclife technologies terms and conditions',
    canonical: 'https://www.logiclifetechnologies.com/terms',
  },

  // ── Service Detail pages ─────────────────────────────────────────────────
  serviceWebDevelopment: {
    title: 'Web Development Services in Visakhapatnam | LogicLife Technologies',
    description: 'Custom web application development using React, Next.js, Node.js & more. LogicLife Technologies builds scalable, high-performance websites in Visakhapatnam.',
    keywords: 'web development visakhapatnam, react development vizag, next.js developers andhra pradesh, website design company visakhapatnam',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=web-development',
  },
  serviceMobileApps: {
    title: 'Mobile App Development in Visakhapatnam | React Native & Flutter — LogicLife',
    description: 'iOS & Android mobile app development using React Native and Flutter. Build cross-platform mobile apps with LogicLife Technologies, Visakhapatnam.',
    keywords: 'mobile app development visakhapatnam, react native developers vizag, flutter app development andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=mobile-apps',
  },
  serviceSoftwareDevelopment: {
    title: 'Custom Software Development Visakhapatnam | ERP, CRM — LogicLife Technologies',
    description: 'Custom software solutions — ERP systems, CRM tools, automation and legacy modernization. LogicLife Technologies delivers enterprise software in Visakhapatnam.',
    keywords: 'custom software development visakhapatnam, erp development vizag, crm software andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=software-development',
  },
  serviceDigitalMarketing: {
    title: 'Digital Marketing Company in Visakhapatnam | SEO, PPC, Social Media — LogicLife',
    description: 'Data-driven digital marketing services: SEO, Google Ads, Social Media Marketing, Content Marketing. Grow your business online with LogicLife Technologies, Visakhapatnam.',
    keywords: 'digital marketing company visakhapatnam, seo services vizag, google ads visakhapatnam, social media marketing andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=digital-marketing',
  },
  serviceUiUxDesign: {
    title: 'UI/UX Design Services Visakhapatnam | Figma, Prototyping — LogicLife Technologies',
    description: 'User-centered UI/UX design — wireframing, prototyping, design systems and usability testing. Beautiful digital experiences by LogicLife Technologies.',
    keywords: 'ui ux design visakhapatnam, figma designers vizag, website design company andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=ui-ux-design',
  },
  serviceCloudServices: {
    title: 'Cloud Services & DevOps Visakhapatnam | AWS, Azure — LogicLife Technologies',
    description: 'Cloud migration, infrastructure setup, DevOps and CI/CD pipelines on AWS, Azure and Google Cloud. Reliable cloud solutions by LogicLife Technologies.',
    keywords: 'cloud services visakhapatnam, aws services vizag, azure devops andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=cloud-services',
  },
  serviceCybersecurity: {
    title: 'Cybersecurity Services Visakhapatnam | Security Audits & Penetration Testing',
    description: 'Comprehensive cybersecurity solutions: security audits, penetration testing, compliance management. Protect your digital assets with LogicLife Technologies.',
    keywords: 'cybersecurity company visakhapatnam, penetration testing india, security audit vizag',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=cybersecurity',
  },
  serviceSupportMaintenance: {
    title: '24/7 IT Support & Maintenance Services | LogicLife Technologies Visakhapatnam',
    description: 'Round-the-clock technical support and maintenance for web apps, mobile apps and software. Bug fixes, updates and performance optimization by LogicLife Technologies.',
    keywords: 'it support visakhapatnam, software maintenance vizag, website support andhra pradesh',
    canonical: 'https://www.logiclifetechnologies.com/ServiceDetail?slug=support-maintenance',
  },
};

// ── Slug → key mapping ────────────────────────────────────────────────────
const slugToSeoKey = {
  'web-development':      'serviceWebDevelopment',
  'mobile-apps':          'serviceMobileApps',
  'software-development': 'serviceSoftwareDevelopment',
  'digital-marketing':    'serviceDigitalMarketing',
  'ui-ux-design':         'serviceUiUxDesign',
  'cloud-services':       'serviceCloudServices',
  'cybersecurity':        'serviceCybersecurity',
  'support-maintenance':  'serviceSupportMaintenance',
};

// ── Component ─────────────────────────────────────────────────────────────
export default function SEOHead({ page, slug, title, description, keywords, canonical }) {
  let seo = {};

  if (page === 'serviceDetail' && slug) {
    const key = slugToSeoKey[slug];
    seo = key ? seoData[key] : seoData.services;
  } else if (page) {
    // ✅ FIX: 'privacy-policy' → 'privacyPolicy' auto-convert
    const normalised = page
      .replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // kebab-case → camelCase
    seo = seoData[page] || seoData[normalised] || {};
  }

  const finalTitle       = title       || seo.title       || `${SITE_NAME} | Digital Solutions`;
  const finalDescription = description || seo.description || 'Helping businesses grow with website development, branding & digital marketing in Visakhapatnam.';
  const finalKeywords    = keywords    || seo.keywords    || 'software development visakhapatnam, IT company vizag';
  const finalCanonical   = canonical   || seo.canonical   || 'https://www.logiclifetechnologies.com/';

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description"         content={finalDescription} />
      <meta name="keywords"            content={finalKeywords} />
      <link rel="canonical"            href={finalCanonical} />
      <meta name="robots"              content="index, follow" />
      <meta name="author"              content="LogicLife Technologies" />

      {/* Open Graph */}
      <meta property="og:type"         content="website" />
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:title"        content={finalTitle} />
      <meta property="og:description"  content={finalDescription} />
      <meta property="og:url"          content={finalCanonical} />
      <meta property="og:image"        content={OG_IMAGE} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"       content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image"       content={OG_IMAGE} />

      {/* Geo — Local SEO Visakhapatnam */}
      <meta name="geo.region"          content="IN-AP" />
      <meta name="geo.placename"       content="Visakhapatnam, Andhra Pradesh, India" />
      <meta name="geo.position"        content="17.6868;83.2185" />
      <meta name="ICBM"                content="17.6868, 83.2185" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LogicLife Technologies",
          "url": "https://www.logiclifetechnologies.com",
          "logo": LOGO_URL,
          "description": "Leading digital marketing and software development company in Visakhapatnam.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Co-away, Visakhapatnam",
            "addressLocality": "Visakhapatnam",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "530001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-95029-24788",
            "contactType": "customer service",
            "email": "bdm@logiclifetechnologies.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Telugu"]
          },
          "sameAs": [
            "https://www.instagram.com/logiclifetechnologies/"
          ]
        })}
      </script>
    </Helmet>
  );
}