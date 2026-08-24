/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Disable source maps in production to prevent source code exposure
  productionBrowserSourceMaps: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },

  async redirects() {
    return [
      // Block the /_src Vercel source-exposure route (Gobuster finding).
      // Hard-redirect to homepage so the URL resolves without leaking anything.
      {
        source: '/_src',
        destination: '/',
        permanent: true,
      },
      {
        source: '/_src/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // ── DNS prefetch ────────────────────────────────────────────────
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },

          // ── HSTS — force HTTPS for 2 years across all subdomains ────────
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          // ── Clickjacking protection ─────────────────────────────────────
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },

          // ── MIME-type sniffing protection ───────────────────────────────
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // ── Referrer privacy ────────────────────────────────────────────
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },

          // ── Permissions / Feature Policy ────────────────────────────────
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },

          // ── Content-Security-Policy (XSS / injection protection) ────────
          // Allows:
          //   default-src  — only self
          //   script-src   — self + unsafe-inline (Next.js hydration) + Vercel Analytics CDN
          //   style-src    — self + unsafe-inline (Tailwind) + Google Fonts CSS
          //   font-src     — self + Google Fonts static files
          //   img-src      — self, data URIs, Unsplash, Aceternity (matches remotePatterns)
          //   connect-src  — self + Vercel telemetry
          //   frame-src    — none
          //   object-src   — none (blocks Flash / plugin exploits)
          //   base-uri     — self (prevents base-tag hijacking)
          //   form-action  — self
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://static.cloudflareinsights.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://assets.aceternity.com",
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://raw.githack.com",
              "media-src 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
