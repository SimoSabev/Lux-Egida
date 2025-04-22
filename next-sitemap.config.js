/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.luxegida.com", // 🔁 Change to your actual domain
    generateRobotsTxt: true,                     // Generates robots.txt
    sitemapSize: 7000,                           // Chunk limit (optional)
    changefreq: "weekly",
    priority: 0.7,            // Optional: pages you don't want indexed
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};
