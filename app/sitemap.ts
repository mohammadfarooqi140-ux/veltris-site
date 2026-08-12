import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
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
    {
      url: 'https://www.veltris.uk/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://www.veltris.uk/cookie-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://www.veltris.uk/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
