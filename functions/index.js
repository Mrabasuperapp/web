// =====================================================
// SEO & Discovery Endpoints for SmartStock Super App
// =====================================================

const BASE_URL = 'https://smartstock.co.tz';
const APP_NAME = 'SmartStock';
const APP_FULL_NAME = 'SmartStock Super App';
const APP_DESCRIPTION = 'Free POS & Inventory Management App for Small Business. Track sales, manage stock, print receipts, and grow your business.';
const COMPANY_NAME = 'JLI CoLTD';
const COMPANY_URL = 'https://smartstock.co.tz';

// All public routes (Flutter uses hash routing, these are for SEO reference)
const APP_ROUTES = [
    { path: '/', name: 'Dashboard', description: 'Main dashboard with business overview and quick actions', changefreq: 'daily', priority: 1.0 },
    { path: '/#/splash', name: 'Welcome', description: 'Welcome screen and onboarding', changefreq: 'monthly', priority: 0.5 },
    { path: '/#/login', name: 'Login', description: 'Sign in to your SmartStock account', changefreq: 'monthly', priority: 0.8 },
    { path: '/#/register', name: 'Register', description: 'Create a new SmartStock account for your business', changefreq: 'monthly', priority: 0.9 },
    { path: '/#/discover', name: 'Discover', description: 'Discover features and mini apps', changefreq: 'weekly', priority: 0.7 },
    
    // Sales Module
    { path: '/#/sales-hub', name: 'Sales Hub', description: 'Manage all your sales, customers, and expenses in one place', changefreq: 'daily', priority: 0.9 },
    { path: '/#/sales/register/inventory', name: 'Register Sale', description: 'Record new sales from your inventory', changefreq: 'daily', priority: 0.9 },
    { path: '/#/sales/register/shift', name: 'Shift-Based Sale', description: 'Record sales using shift-based entry', changefreq: 'daily', priority: 0.8 },
    { path: '/#/sales', name: 'Sales History', description: 'View and manage your sales history', changefreq: 'daily', priority: 0.8 },
    { path: '/#/sales/sold-items', name: 'Sold Items', description: 'Track items sold over time', changefreq: 'daily', priority: 0.7 },
    { path: '/#/sales/customers', name: 'Customers', description: 'Manage your customer database', changefreq: 'weekly', priority: 0.7 },
    { path: '/#/sales/orders', name: 'Online Orders', description: 'Manage online orders from your store', changefreq: 'daily', priority: 0.7 },
    
    // Expenses Module
    { path: '/#/expenses', name: 'Expenses', description: 'Track and manage business expenses', changefreq: 'daily', priority: 0.8 },
    { path: '/#/expenses/schedules', name: 'Recurring Expenses', description: 'Set up and manage recurring expenses', changefreq: 'weekly', priority: 0.6 },
    
    // Inventory Module
    { path: '/#/inventory', name: 'Inventory', description: 'Complete inventory management dashboard', changefreq: 'daily', priority: 0.9 },
    { path: '/#/inventory/products', name: 'Products', description: 'Manage your product catalog', changefreq: 'daily', priority: 0.9 },
    { path: '/#/inventory/products/create', name: 'Add Product', description: 'Add new products to your inventory', changefreq: 'weekly', priority: 0.7 },
    { path: '/#/inventory/categories', name: 'Categories', description: 'Organize products into categories', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/inventory/suppliers', name: 'Suppliers', description: 'Manage your suppliers and vendors', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/inventory/purchases', name: 'Purchases', description: 'Track inventory purchases and restocking', changefreq: 'daily', priority: 0.8 },
    { path: '/#/inventory/purchases/create', name: 'New Purchase', description: 'Record new inventory purchases', changefreq: 'daily', priority: 0.7 },
    { path: '/#/inventory/transfers', name: 'Transfers', description: 'Transfer stock between branches', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/inventory/transfers/send', name: 'Send Transfer', description: 'Send stock to another branch', changefreq: 'weekly', priority: 0.5 },
    { path: '/#/inventory/transfers/receive', name: 'Receive Transfer', description: 'Receive stock from another branch', changefreq: 'weekly', priority: 0.5 },
    { path: '/#/inventory/report', name: 'Stock Report', description: 'Detailed inventory and stock reports', changefreq: 'daily', priority: 0.7 },
    
    // Reports Module
    { path: '/#/reports/cash-overview', name: 'Cash Overview', description: 'Overview of cash flow and transactions', changefreq: 'daily', priority: 0.8 },
    { path: '/#/performance-hub', name: 'Performance Reports', description: 'Business performance analytics and reports', changefreq: 'daily', priority: 0.8 },
    { path: '/#/reports/product-performance', name: 'Product Performance', description: 'Analyze product sales performance', changefreq: 'daily', priority: 0.7 },
    { path: '/#/reports/seller-performance', name: 'Seller Performance', description: 'Track employee sales performance', changefreq: 'daily', priority: 0.7 },
    { path: '/#/reports/category-performance', name: 'Category Performance', description: 'Sales performance by category', changefreq: 'daily', priority: 0.7 },
    { path: '/#/reports/customer-performance', name: 'Customer Analytics', description: 'Analyze customer purchasing patterns', changefreq: 'daily', priority: 0.7 },
    { path: '/#/reports/business', name: 'Business Reports', description: 'Comprehensive business reports and insights', changefreq: 'daily', priority: 0.8 },
    { path: '/#/transactions', name: 'Transactions', description: 'View all business transactions', changefreq: 'daily', priority: 0.8 },
    
    // Accountant Module
    { path: '/#/accountant', name: 'Accountant Dashboard', description: 'Financial management and accounting tools', changefreq: 'daily', priority: 0.8 },
    
    // Analytics Module (HQ)
    { path: '/#/analytics', name: 'Analytics', description: 'Advanced business analytics dashboard', changefreq: 'daily', priority: 0.7 },
    
    // Messaging Module
    { path: '/#/messages', name: 'Messages', description: 'Team messaging and communication', changefreq: 'daily', priority: 0.6 },
    { path: '/#/messages/direct', name: 'Direct Messages', description: 'Private conversations with team members', changefreq: 'daily', priority: 0.5 },
    { path: '/#/messages/broadcasts', name: 'Broadcasts', description: 'Shop-wide announcements and broadcasts', changefreq: 'weekly', priority: 0.5 },
    
    // Profile & Settings
    { path: '/#/profile', name: 'Profile', description: 'Manage your account and business profile', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/profile/update', name: 'Update Profile', description: 'Update your personal information', changefreq: 'monthly', priority: 0.4 },
    { path: '/#/profile/settings', name: 'Shop Settings', description: 'Configure your shop settings', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/profile/users', name: 'Team Management', description: 'Manage employees and user access', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/profile/branches', name: 'Branch Management', description: 'Manage multiple business locations', changefreq: 'weekly', priority: 0.6 },
    { path: '/#/profile/billing', name: 'Billing History', description: 'View billing and payment history', changefreq: 'monthly', priority: 0.5 },
    { path: '/#/services', name: 'Core Services', description: 'Configure core business services', changefreq: 'monthly', priority: 0.4 },
    { path: '/#/payment', name: 'Subscription', description: 'Manage your subscription and payments', changefreq: 'monthly', priority: 0.5 },
];

// Feature list for structured data
const APP_FEATURES = [
    'Point of Sale (POS)',
    'Inventory Management',
    'Sales Tracking',
    'Receipt Printing',
    'Customer Management',
    'Expense Tracking',
    'Multi-branch Support',
    'Real-time Sync',
    'Offline Mode',
    'Business Reports',
    'Employee Management',
    'Supplier Management',
    'Stock Transfers',
    'Invoice Generation',
    'Payment Tracking',
    'Performance Analytics',
    'Team Messaging',
    'Scheduled Expenses'
];

// =====================================================
// Home redirect
// =====================================================
exports.home = {
    method: 'GET',
    path: '/',
    onRequest: (request, response) => {
        response.redirect("/assets/");
    }
};

// =====================================================
// Robots.txt - Search Engine Crawling Instructions
// =====================================================
exports.robotsTxt = {
    method: 'GET',
    path: '/robots.txt',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`# Robots.txt for ${APP_FULL_NAME}
# ${BASE_URL}

User-agent: *
Allow: /
Allow: /assets/
Disallow: /assets/flutter_bootstrap.js
Disallow: /assets/main.dart.js
Disallow: /assets/canvaskit/

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /
`);
    }
};

// =====================================================
// Sitemap.xml - Search Engine Discovery
// =====================================================
exports.sitemapXml = {
    method: 'GET',
    path: '/sitemap.xml',
    onRequest: (request, response) => {
        const lastmod = new Date().toISOString().split('T')[0];
        
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
        
        APP_ROUTES.forEach(route => {
            xml += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
        });
        
        xml += `</urlset>`;
        
        response.setHeader('Content-Type', 'application/xml');
        response.setHeader('Cache-Control', 'public, max-age=3600');
        response.send(xml);
    }
};

// =====================================================
// Sitemap Index (for multiple sitemaps if needed)
// =====================================================
exports.sitemapIndexXml = {
    method: 'GET',
    path: '/sitemap-index.xml',
    onRequest: (request, response) => {
        const lastmod = new Date().toISOString().split('T')[0];
        
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
        
        response.setHeader('Content-Type', 'application/xml');
        response.setHeader('Cache-Control', 'public, max-age=3600');
        response.send(xml);
    }
};

// =====================================================
// Security.txt - Security Researchers
// =====================================================
exports.securityTxt = {
    method: 'GET',
    path: '/.well-known/security.txt',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`# Security Policy for ${APP_FULL_NAME}
# ${BASE_URL}/.well-known/security.txt

Contact: mailto:security@fahamutech.com
Contact: https://fahamutech.com/contact
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en, sw
Canonical: ${BASE_URL}/.well-known/security.txt
Policy: https://fahamutech.com/security-policy
Hiring: https://fahamutech.com/careers
`);
    }
};

// =====================================================
// Humans.txt - Team Credits
// =====================================================
exports.humansTxt = {
    method: 'GET',
    path: '/humans.txt',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`/* TEAM */
Company: ${COMPANY_NAME}
Site: ${COMPANY_URL}
Location: Tanzania
Twitter: @fahamutech

/* PRODUCT */
Name: ${APP_FULL_NAME}
Description: ${APP_DESCRIPTION}
Version: 1.0.0
Platform: Web, Android, iOS

/* TECHNOLOGY */
Framework: Flutter
Backend: Node.js
Database: PostgreSQL
Hosting: Firebase Hosting
Analytics: Google Analytics

/* FEATURES */
${APP_FEATURES.map(f => `- ${f}`).join('\n')}

/* CONTACT */
Email: smartstocktz@gmail.com
Mobile: +255764943055
Instagram: @smartstocktz
Website: ${BASE_URL}
Company: ${COMPANY_URL}
`);
    }
};

// =====================================================
// App Manifest for PWA
// =====================================================
exports.manifest = {
    method: 'GET',
    path: '/manifest.json',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.json({
            name: APP_FULL_NAME,
            short_name: APP_NAME,
            description: APP_DESCRIPTION,
            start_url: "/assets/",
            display: "standalone",
            background_color: "#0175C2",
            theme_color: "#0175C2",
            orientation: "natural",
            prefer_related_applications: false,
            categories: ["business", "finance", "productivity", "utilities"],
            lang: "en",
            dir: "ltr",
            scope: "/",
            id: "mraba-pos",
            shortcuts: [
                {
                    name: "New Sale",
                    short_name: "Sale",
                    description: "Record a new sale",
                    url: "/assets/#/sales/register/inventory",
                    icons: [{ src: "/assets/icons/Icon-192.png", sizes: "192x192" }]
                },
                {
                    name: "Inventory",
                    short_name: "Stock",
                    description: "Manage inventory",
                    url: "/assets/#/inventory",
                    icons: [{ src: "/assets/icons/Icon-192.png", sizes: "192x192" }]
                },
                {
                    name: "Reports",
                    short_name: "Reports",
                    description: "View business reports",
                    url: "/assets/#/reports/business",
                    icons: [{ src: "/assets/icons/Icon-192.png", sizes: "192x192" }]
                }
            ],
            screenshots: [
                {
                    src: "/assets/icons/Icon-512.png",
                    sizes: "512x512",
                    type: "image/png",
                    form_factor: "wide",
                    label: "SmartStock Super App Dashboard"
                }
            ],
            icons: [
                { src: "/assets/icons/Icon-192.png", sizes: "192x192", type: "image/png" },
                { src: "/assets/icons/Icon-512.png", sizes: "512x512", type: "image/png" },
                { src: "/assets/icons/Icon-maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
                { src: "/assets/icons/Icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
            ],
            related_applications: [
                {
                    platform: "play",
                    url: "https://play.google.com/store/apps/details?id=com.fahamutech.smartstock",
                    id: "com.fahamutech.smartstock"
                }
            ]
        });
    }
};

// =====================================================
// OpenSearch Description - Browser Search Integration
// =====================================================
exports.opensearch = {
    method: 'GET',
    path: '/opensearch.xml',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/opensearchdescription+xml');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${APP_NAME}</ShortName>
  <Description>${APP_DESCRIPTION}</Description>
  <Tags>pos inventory sales business management</Tags>
  <Contact>smartstocktz@gmail.com</Contact>
  <Url type="text/html" template="${BASE_URL}/assets/#/inventory?search={searchTerms}"/>
  <Image height="16" width="16" type="image/png">${BASE_URL}/assets/favicon.png</Image>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
</OpenSearchDescription>`);
    }
};

// =====================================================
// BrowserConfig.xml - Windows Tiles
// =====================================================
exports.browserconfig = {
    method: 'GET',
    path: '/browserconfig.xml',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/xml');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/assets/icons/Icon-192.png"/>
      <square310x310logo src="/assets/icons/Icon-512.png"/>
      <TileColor>#0175C2</TileColor>
    </tile>
  </msapplication>
</browserconfig>`);
    }
};

// =====================================================
// App Info API - JSON endpoint for app metadata
// =====================================================
exports.appInfo = {
    method: 'GET',
    path: '/api/app-info',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Cache-Control', 'public, max-age=3600');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.json({
            name: APP_FULL_NAME,
            shortName: APP_NAME,
            description: APP_DESCRIPTION,
            version: "1.0.0",
            url: BASE_URL,
            company: {
                name: COMPANY_NAME,
                url: COMPANY_URL,
                email: "smartstocktz@gmail.com",
                mobile: "+255764943055",
                instagram: "@smartstocktz",
                location: "Tanzania"
            },
            features: APP_FEATURES,
            platforms: ["web", "android", "ios"],
            routes: APP_ROUTES.map(r => ({
                path: r.path,
                name: r.name,
                description: r.description
            })),
            social: {
                twitter: "https://twitter.com/fahamutech",
                facebook: "https://facebook.com/fahamutech",
                linkedin: "https://linkedin.com/company/fahamutech",
                instagram: "https://instagram.com/smartstocktz"
            },
            support: {
                email: "smartstocktz@gmail.com",
                mobile: "+255764943055",
                instagram: "https://instagram.com/smartstocktz",
                website: BASE_URL
            },
            legal: {
                privacy: "https://fahamutech.com/privacy",
                terms: "https://fahamutech.com/terms",
                cookies: "https://fahamutech.com/cookies"
            }
        });
    }
};

// =====================================================
// Routes Map API - JSON list of all routes
// =====================================================
exports.routesMap = {
    method: 'GET',
    path: '/api/routes',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Cache-Control', 'public, max-age=3600');
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        // Group routes by module
        const modules = {
            dashboard: APP_ROUTES.filter(r => ['/', '/#/splash', '/#/discover'].includes(r.path)),
            auth: APP_ROUTES.filter(r => r.path.includes('/login') || r.path.includes('/register')),
            sales: APP_ROUTES.filter(r => r.path.includes('/sales') || r.path.includes('/expenses')),
            inventory: APP_ROUTES.filter(r => r.path.includes('/inventory')),
            reports: APP_ROUTES.filter(r => r.path.includes('/reports') || r.path.includes('/performance') || r.path.includes('/transactions')),
            accountant: APP_ROUTES.filter(r => r.path.includes('/accountant')),
            analytics: APP_ROUTES.filter(r => r.path.includes('/analytics')),
            messaging: APP_ROUTES.filter(r => r.path.includes('/messages')),
            profile: APP_ROUTES.filter(r => r.path.includes('/profile') || r.path.includes('/services') || r.path.includes('/payment')),
        };
        
        response.json({
            total: APP_ROUTES.length,
            baseUrl: BASE_URL,
            hashRouting: true,
            modules,
            allRoutes: APP_ROUTES
        });
    }
};

// =====================================================
// Schema.org JSON-LD - Structured Data API
// =====================================================
exports.jsonLd = {
    method: 'GET',
    path: '/api/schema',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/ld+json');
        response.setHeader('Cache-Control', 'public, max-age=3600');
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        const schema = {
            "@context": "https://schema.org",
            "@graph": [
                // SoftwareApplication
                {
                    "@type": "SoftwareApplication",
                    "@id": `${BASE_URL}/#software`,
                    "name": APP_FULL_NAME,
                    "alternateName": APP_NAME,
                    "description": APP_DESCRIPTION,
                    "url": BASE_URL,
                    "applicationCategory": "BusinessApplication",
                    "applicationSubCategory": ["Point of Sale", "Inventory Management", "Business Management"],
                    "operatingSystem": ["Web", "Android", "iOS"],
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "description": "Free plan available"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.5",
                        "ratingCount": "1000",
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "featureList": APP_FEATURES,
                    "screenshot": `${BASE_URL}/assets/icons/Icon-512.png`,
                    "softwareVersion": "1.0.0",
                    "downloadUrl": "https://play.google.com/store/apps/details?id=com.fahamutech.smartstock",
                    "installUrl": BASE_URL,
                    "permissions": "Works offline",
                    "storageRequirements": "50MB",
                    "author": {
                        "@type": "Organization",
                        "@id": `${COMPANY_URL}/#organization`
                    },
                    "publisher": {
                        "@type": "Organization",
                        "@id": `${COMPANY_URL}/#organization`
                    }
                },
                // Organization
                {
                    "@type": "Organization",
                    "@id": `${COMPANY_URL}/#organization`,
                    "name": COMPANY_NAME,
                    "url": COMPANY_URL,
                    "logo": `${BASE_URL}/assets/icons/Icon-512.png`,
                    "email": "smartstocktz@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "TZ",
                        "addressLocality": "Tanzania"
                    },
                    "sameAs": [
                        "https://twitter.com/fahamutech",
                        "https://facebook.com/fahamutech",
                        "https://linkedin.com/company/fahamutech",
                        "https://instagram.com/smartstocktz",
                        BASE_URL
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "customer support",
                        "email": "smartstocktz@gmail.com",
                        "telephone": "+255764943055",
                        "availableLanguage": ["English", "Swahili"]
                    }
                },
                // WebSite
                {
                    "@type": "WebSite",
                    "@id": `${BASE_URL}/#website`,
                    "url": BASE_URL,
                    "name": APP_FULL_NAME,
                    "description": APP_DESCRIPTION,
                    "publisher": {
                        "@type": "Organization",
                        "@id": `${COMPANY_URL}/#organization`
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${BASE_URL}/assets/#/inventory?search={search_term_string}`
                        },
                        "query-input": "required name=search_term_string"
                    },
                    "inLanguage": "en"
                },
                // WebApplication
                {
                    "@type": "WebApplication",
                    "@id": `${BASE_URL}/#webapp`,
                    "name": APP_FULL_NAME,
                    "url": BASE_URL,
                    "applicationCategory": "BusinessApplication",
                    "browserRequirements": "Requires JavaScript. Requires HTML5.",
                    "softwareVersion": "1.0.0",
                    "operatingSystem": "Any",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    }
                },
                // BreadcrumbList for main navigation
                {
                    "@type": "BreadcrumbList",
                    "@id": `${BASE_URL}/#breadcrumb`,
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": BASE_URL
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Sales",
                            "item": `${BASE_URL}/#/sales-hub`
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Inventory",
                            "item": `${BASE_URL}/#/inventory`
                        },
                        {
                            "@type": "ListItem",
                            "position": 4,
                            "name": "Reports",
                            "item": `${BASE_URL}/#/reports/business`
                        }
                    ]
                },
                // FAQ
                {
                    "@type": "FAQPage",
                    "@id": `${BASE_URL}/#faq`,
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is SmartStock Super App?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "SmartStock Super App is a business management application designed for small businesses. It helps you track sales, manage stock, print receipts, and grow your business."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is SmartStock Super App free?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, SmartStock Super App offers a free plan with essential features. Premium plans are available for businesses needing advanced features like multi-branch support and detailed analytics."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does SmartStock Super App work offline?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, SmartStock Super App works offline. Your data is synced automatically when you're back online, ensuring you never lose a sale."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I use SmartStock Super App on multiple devices?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, SmartStock Super App syncs across all your devices in real-time. Use it on web, Android, or iOS devices."
                            }
                        }
                    ]
                }
            ]
        };
        
        response.json(schema);
    }
};

// =====================================================
// Favicon redirect
// =====================================================
exports.favicon = {
    method: 'GET',
    path: '/favicon.ico',
    onRequest: (request, response) => {
        response.redirect('/assets/favicon.png');
    }
};

// =====================================================
// Apple App Site Association (for iOS deep linking)
// =====================================================
exports.appleAppSiteAssociation = {
    method: 'GET',
    path: '/.well-known/apple-app-site-association',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.json({
            applinks: {
                apps: [],
                details: [
                    {
                        appID: "TEAM_ID.com.fahamutech.smartstock",
                        paths: ["*"]
                    }
                ]
            },
            webcredentials: {
                apps: ["TEAM_ID.com.fahamutech.smartstock"]
            }
        });
    }
};

// =====================================================
// Android Asset Links (for Android deep linking)
// =====================================================
exports.assetlinks = {
    method: 'GET',
    path: '/.well-known/assetlinks.json',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.json([
            {
                relation: ["delegate_permission/common.handle_all_urls"],
                target: {
                    namespace: "android_app",
                    package_name: "com.fahamutech.smartstock",
                    sha256_cert_fingerprints: [
                        "YOUR_SHA256_FINGERPRINT_HERE"
                    ]
                }
            }
        ]);
    }
};

// =====================================================
// Health check endpoint
// =====================================================
exports.health = {
    method: 'GET',
    path: '/health',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            app: APP_NAME,
            version: '1.0.0'
        });
    }
};

// =====================================================
// Ads.txt (if using advertising)
// =====================================================
exports.adsTxt = {
    method: 'GET',
    path: '/ads.txt',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`# ads.txt for ${APP_FULL_NAME}
# Contact: ads@fahamutech.com
# Currently no advertising partners
`);
    }
};

// =====================================================
// App-ads.txt (mobile advertising)
// =====================================================
exports.appAdsTxt = {
    method: 'GET',
    path: '/app-ads.txt',
    onRequest: (request, response) => {
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', 'public, max-age=86400');
        response.send(`# app-ads.txt for ${APP_FULL_NAME}
# Contact: ads@fahamutech.com
# Currently no advertising partners
`);
    }
};
