import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    // --- Main pages ---
    {
      url: 'https://www.veltris.uk/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.veltris.uk/services',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.veltris.uk/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.veltris.uk/work',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.veltris.uk/contact',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // --- Work sub-pages ---
    {
      url: 'https://www.veltris.uk/work/uk-properties',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // --- Prototype showcase pages ---
    {
      url: 'https://www.veltris.uk/prototypes/noir-atelier',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.veltris.uk/prototypes/blackline-atelier',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.veltris.uk/prototypes/sterling',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.veltris.uk/prototypes/hartley',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // --- Legal pages ---
    {
      url: 'https://www.veltris.uk/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.veltris.uk/cookie-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.veltris.uk/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
