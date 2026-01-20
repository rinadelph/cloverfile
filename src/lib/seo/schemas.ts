// JSON-LD Schema generators for CloverFile SEO

const SITE_URL = 'https://www.cloverfileve.com';
const LOGO_URL = `${SITE_URL}/images/1502852123.png`;

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'CloverFile',
    alternateName: 'Clover File Venezuela',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 200,
      height: 60
    },
    foundingDate: '1984',
    description: 'Empresa lider en gestion documental en Venezuela. Mas de 40 anos de experiencia ofreciendo servicios de digitalizacion, software de gestion, automatizacion, almacenamiento en nube y custodia fisica de documentos.',
    slogan: 'Seguridad, Tiempo, Espacio',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Venezuela'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+58-212-8191152',
        contactType: 'customer service',
        areaServed: 'VE',
        availableLanguage: ['Spanish', 'English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Luis de Camoens, Centro Clover, P.3',
      addressLocality: 'La Trinidad',
      addressRegion: 'Caracas',
      addressCountry: 'VE'
    },
    sameAs: [
      'https://www.instagram.com/cloverfileve/',
      'https://www.facebook.com/cloverfileve'
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Grupo Clover Venezuela',
      url: 'https://www.cloverve.com'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Gestion Documental',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digitalizacion de Documentos'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software de Gestion Documental'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custodia Fisica de Documentos'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Almacenamiento en Nube'
          }
        }
      ]
    }
  };
}

// Services list for CloverFile
export const services = [
  {
    name: 'Digitalizacion de Documentos',
    description: 'Servicios profesionales de digitalizacion con equipos de alta gama. Escaneo de documentos, planos y libros con OCR integrado.',
    url: '/servicios/digitalizacion'
  },
  {
    name: 'Software de Gestion Documental',
    description: 'Plataformas integrales de gestion documental parametrizables y flexibles para entornos de alta exigencia.',
    url: '/servicios/software-gestion'
  },
  {
    name: 'Automatizacion de Procesos',
    description: 'Implementacion de flujos de trabajo digitales con tecnologias innovadoras para reducir trabajo manual.',
    url: '/servicios/automatizacion'
  },
  {
    name: 'Almacenamiento en Nube',
    description: 'Respaldo de datos en la nube con acceso 24/7 y capacidad adaptada a tus necesidades.',
    url: '/servicios/nube'
  },
  {
    name: 'Custodia Fisica',
    description: 'Almacenamiento seguro de documentos fisicos en instalaciones con vigilancia 24/7 y control ambiental.',
    url: '/servicios/custodia'
  },
  {
    name: 'Organizacion e Inventario',
    description: 'Asesoria experta en gestion documental, inventarios e indexacion de archivos fisicos y digitales.',
    url: '/servicios/inventario'
  }
];

// Service Schema
export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
  provider?: string;
}

export function getServiceSchema(service: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    image: service.image || LOGO_URL,
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    areaServed: {
      '@type': 'Country',
      name: service.areaServed || 'Venezuela'
    },
    serviceType: 'Document Management Services'
  };
}

// Get all services schemas
export function getAllServicesSchemas() {
  return services.map(service => getServiceSchema(service));
}

// Article Schema for blog posts
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  section?: string;
}

export function getArticleSchema(article: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${article.url}/#article`,
    headline: article.headline,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    image: {
      '@type': 'ImageObject',
      url: article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: article.author || 'CloverFile'
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${article.url}`
    },
    articleSection: article.section || 'Gestion Documental'
  };
}

// Breadcrumb Schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

// FAQ Schema
export interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// WebSite Schema (for homepage)
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'CloverFile',
    description: 'Gestion documental digital y fisica en Venezuela. Mas de 40 anos de experiencia protegiendo la informacion de empresas.',
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// WebPage Schema
export function getWebPageSchema(props: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${props.url}/#webpage`,
    url: `${SITE_URL}${props.url}`,
    name: props.name,
    description: props.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    about: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'es'
  };
}

// ContactPage Schema
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contactenos/#contactpage`,
    url: `${SITE_URL}/contactenos`,
    name: 'Contactenos - Clover Mudanzas Venezuela',
    description: 'Contacta a Clover Mudanzas. Av. Luis de Camoens, Centro Clover, La Trinidad, Caracas. Tel: +58-212-8191100. Mudanzas nacionales e internacionales.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// About Page Schema
export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/nosotros/#aboutpage`,
    url: `${SITE_URL}/nosotros`,
    name: 'Nosotros - Clover Mudanzas Venezuela',
    description: 'Conoce Clover Mudanzas: mas de 60 anos de experiencia en mudanzas nacionales e internacionales. Pioneros en servicios logisticos integrados desde 1964.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// LocalBusiness Schema for location pages
export function getLocalBusinessSchema(locationSlug: string) {
  const locationData: Record<string, { name: string; address: string; city: string; phone: string }> = {
    caracas: {
      name: 'Clover Mudanzas Caracas',
      address: 'Av. Luis de Camoens, Centro Clover, P.3, La Trinidad',
      city: 'Caracas',
      phone: '+58-212-8191100'
    },
    valencia: {
      name: 'Clover Mudanzas Valencia',
      address: 'Zona Industrial Valencia',
      city: 'Valencia, Carabobo',
      phone: '+58-212-8191100'
    },
    maracaibo: {
      name: 'Clover Mudanzas Maracaibo',
      address: 'Zona Industrial Maracaibo',
      city: 'Maracaibo, Zulia',
      phone: '+58-212-8191100'
    },
    'puerto-cabello': {
      name: 'Clover Mudanzas Puerto Cabello',
      address: 'Zona Portuaria Puerto Cabello',
      city: 'Puerto Cabello, Carabobo',
      phone: '+58-212-8191100'
    },
    barcelona: {
      name: 'Clover Mudanzas Barcelona',
      address: 'Zona Industrial Barcelona',
      city: 'Barcelona, Anzoategui',
      phone: '+58-212-8191100'
    },
    maiquetia: {
      name: 'Clover Mudanzas Maiquetia',
      address: 'Aeropuerto Internacional Simon Bolivar',
      city: 'Maiquetia, Vargas',
      phone: '+58-212-8191100'
    }
  };

  const location = locationData[locationSlug] || locationData['caracas'];

  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${SITE_URL}/ubicaciones/${locationSlug}/#localbusiness`,
    name: location.name,
    image: LOGO_URL,
    url: `${SITE_URL}/ubicaciones/${locationSlug}`,
    telephone: location.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressCountry: 'VE'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    priceRange: '$$',
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// CloverFile Organization Schema
export function getCloverFileOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'CloverFile',
    alternateName: 'Clover File Venezuela',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 200,
      height: 60
    },
    foundingDate: '1984',
    description: 'Empresa de gestion documental con mas de 40 anos de experiencia en Venezuela. Parte del Grupo Clover, pioneros en servicios logisticos integrados.',
    slogan: 'Seguridad, Tiempo, Espacio',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Venezuela'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+58-212-8191152',
        contactType: 'customer service',
        areaServed: 'VE',
        availableLanguage: ['Spanish', 'English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Luis de Camoens, Centro Clover, P.3',
      addressLocality: 'La Trinidad',
      addressRegion: 'Caracas',
      addressCountry: 'VE'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    sameAs: [
      'https://www.instagram.com/cloverfileve/',
      'https://www.facebook.com/cloverfileve',
      'https://servicioscloverfile.com/'
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Grupo Clover Venezuela',
      url: 'https://www.cloverve.com/'
    }
  };
}
