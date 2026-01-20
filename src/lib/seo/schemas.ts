// JSON-LD Schema generators for Clover Venezuela SEO

const SITE_URL = 'https://www.cloverve.com';
const LOGO_URL = `${SITE_URL}/images/logo.png`;

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Clover Venezuela',
    alternateName: 'Clover Logística',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 200,
      height: 60
    },
    foundingDate: '1964',
    description: 'Empresa de logística integral con más de 60 años de experiencia en Venezuela. Ofrecemos servicios de almacenamiento, transporte terrestre, aduanas y carga internacional.',
    slogan: '+60 Años de Experiencia Logística',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 200,
      maxValue: 500
    },
    areaServed: {
      '@type': 'Country',
      name: 'Venezuela'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+58-212-8191152',
        contactType: 'customer service',
        areaServed: 'VE',
        availableLanguage: ['Spanish']
      },
      {
        '@type': 'ContactPoint',
        email: 'clover@cloverve.com',
        contactType: 'customer service'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Paris, Edificio Clover',
      addressLocality: 'La Trinidad',
      addressRegion: 'Caracas',
      addressCountry: 'VE'
    },
    sameAs: [
      'https://instagram.com/clover.logistica',
      'https://www.facebook.com/profile.php?id=100092613104079',
      'https://www.linkedin.com/company/clovervzla/'
    ]
  };
}

// Location data for all 8 locations
export const locations = [
  {
    id: 'la-trinidad',
    name: 'Clover Venezuela - La Trinidad (Sede Principal)',
    shortName: 'La Trinidad',
    isHeadquarters: true,
    address: {
      streetAddress: 'Calle Paris, Edificio Clover',
      addressLocality: 'La Trinidad',
      addressRegion: 'Caracas',
      postalCode: '1080',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.4396,
      longitude: -66.8511
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Logística Integral', 'Almacenamiento', 'Aduanas', 'Transporte']
  },
  {
    id: 'macarao',
    name: 'Clover Venezuela - Macarao',
    shortName: 'Macarao',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial Macarao',
      addressLocality: 'Macarao',
      addressRegion: 'Caracas',
      postalCode: '1090',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.4567,
      longitude: -66.9789
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento', 'Distribución']
  },
  {
    id: 'la-yaguara',
    name: 'Clover Venezuela - La Yaguara',
    shortName: 'La Yaguara',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial La Yaguara',
      addressLocality: 'La Yaguara',
      addressRegion: 'Caracas',
      postalCode: '1070',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.4789,
      longitude: -66.9456
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento', 'Distribución']
  },
  {
    id: 'maiquetia',
    name: 'Clover Venezuela - Maiquetía',
    shortName: 'Maiquetía',
    isHeadquarters: false,
    address: {
      streetAddress: 'Aeropuerto Internacional Simón Bolívar',
      addressLocality: 'Maiquetía',
      addressRegion: 'Vargas',
      postalCode: '1160',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.6012,
      longitude: -66.9912
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Carga Aérea', 'Aduanas', 'Carga Internacional']
  },
  {
    id: 'valencia',
    name: 'Clover Venezuela - Valencia',
    shortName: 'Valencia',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial Valencia',
      addressLocality: 'Valencia',
      addressRegion: 'Carabobo',
      postalCode: '2001',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.1579,
      longitude: -67.9967
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento', 'Transporte', 'Distribución']
  },
  {
    id: 'puerto-cabello',
    name: 'Clover Venezuela - Puerto Cabello',
    shortName: 'Puerto Cabello',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Portuaria',
      addressLocality: 'Puerto Cabello',
      addressRegion: 'Carabobo',
      postalCode: '2050',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.4731,
      longitude: -68.0119
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Carga Marítima', 'Aduanas', 'Almacenamiento Portuario']
  },
  {
    id: 'barcelona',
    name: 'Clover Venezuela - Barcelona',
    shortName: 'Barcelona',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial Barcelona',
      addressLocality: 'Barcelona',
      addressRegion: 'Anzoátegui',
      postalCode: '6001',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.1136,
      longitude: -64.6878
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento', 'Transporte', 'Distribución']
  },
  {
    id: 'maracaibo',
    name: 'Clover Venezuela - Maracaibo',
    shortName: 'Maracaibo',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial Maracaibo',
      addressLocality: 'Maracaibo',
      addressRegion: 'Zulia',
      postalCode: '4001',
      addressCountry: 'VE'
    },
    geo: {
      latitude: 10.6544,
      longitude: -71.6398
    },
    phone: '+58-212-8191152',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento', 'Transporte', 'Distribución']
  }
];

// LocalBusiness Schema for a single location
export function getLocalBusinessSchema(locationId: string) {
  const location = locations.find(l => l.id === locationId);
  if (!location) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/ubicaciones/${location.id}/#localbusiness`,
    name: location.name,
    image: LOGO_URL,
    url: `${SITE_URL}/ubicaciones/${location.id}`,
    telephone: location.phone,
    email: location.email || 'clover@cloverve.com',
    address: {
      '@type': 'PostalAddress',
      ...location.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude
    },
    openingHoursSpecification: location.openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days === 'Mo-Fr' ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] : [days],
        opens,
        closes
      };
    }),
    priceRange: '$$',
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// All LocalBusiness schemas combined
export function getAllLocalBusinessSchemas() {
  return locations.map(location => getLocalBusinessSchema(location.id));
}

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
    serviceType: 'Logistics'
  };
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
      name: article.author || 'Clover Venezuela'
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${article.url}`
    },
    articleSection: article.section || 'Logística'
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
    name: 'Clover Venezuela',
    description: 'Soluciones logísticas integrales en Venezuela',
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
    '@id': `${SITE_URL}/contacto/#contactpage`,
    url: `${SITE_URL}/contacto`,
    name: 'Contacto - Clover Venezuela',
    description: 'Contacta a Clover Venezuela. 8 ubicaciones estratégicas en todo el país.',
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
    name: 'Nosotros - Clover Venezuela',
    description: 'Conoce la historia de Clover Venezuela, más de 60 años de experiencia en logística integral.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// Services collection for homepage
export const services = [
  {
    name: 'Logística Integral',
    description: 'Soluciones 3PL completas para optimizar su cadena de suministro en Venezuela.',
    url: '/logistica-integral-venezuela'
  },
  {
    name: 'Almacenamiento',
    description: 'Más de 70,000 m² de almacenes estratégicamente ubicados en Venezuela.',
    url: '/almacen'
  },
  {
    name: 'Transporte Terrestre',
    description: 'Flota propia con GPS tracking para distribución segura en todo Venezuela.',
    url: '/logistica-transporte-terrestre'
  },
  {
    name: 'Servicios Aduaneros',
    description: 'Agenciamiento aduanal certificado OEA para importaciones y exportaciones.',
    url: '/aduana'
  },
  {
    name: 'Carga Internacional',
    description: 'Transporte de carga aérea, marítima FCL y LCL desde cualquier origen.',
    url: '/impot'
  },
  {
    name: 'CloverPack',
    description: 'Servicios de embalaje industrial y profesional para proteger su mercancía.',
    url: '/cloverpack'
  }
];

// Get all services schemas
export function getAllServicesSchemas() {
  return services.map(service => getServiceSchema(service));
}
