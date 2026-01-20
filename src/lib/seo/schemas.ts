// JSON-LD Schema generators for CloverFile SEO

const SITE_URL = 'https://www.cloverfileve.com';
const LOGO_URL = `${SITE_URL}/images/1502852123.png`;

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'CloverFile',
    alternateName: 'CloverFile Venezuela',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 200,
      height: 60
    },
    foundingDate: '1986',
    description: 'CloverFile es lider en gestion documental integral en Venezuela. Mas de 35 anos de experiencia en almacenaje de archivos, automatizacion de flujos de trabajo y consultoria.',
    slogan: 'Somos soluciones para ti',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200
    },
    areaServed: {
      '@type': 'Country',
      name: 'Venezuela'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+58-414-4708354',
        contactType: 'customer service',
        areaServed: 'VE',
        availableLanguage: ['Spanish']
      },
      {
        '@type': 'ContactPoint',
        email: 'atc.cloverfile@cloverve.com',
        contactType: 'customer service'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Venezuela, Torre El Saman, Piso 3, Oficina 3-1',
      addressLocality: 'El Rosal, Municipio Chacao',
      addressRegion: 'Caracas',
      addressCountry: 'VE'
    },
    sameAs: [
      'https://www.instagram.com/cloverfilevzla/',
      'https://www.facebook.com/profile.php?id=100092613104079',
      'https://www.linkedin.com/company/clovervzla/'
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Clover Internacional',
      url: 'https://www.cloverve.com'
    }
  };
}

// Services list for CloverFile
export const services = [
  {
    name: 'Gestion Documental Integral',
    description: 'Administracion completa de documentos fisicos y digitales con los mas altos estandares de seguridad.',
    url: '/servicios/gestion-documental'
  },
  {
    name: 'Almacenaje de Archivos',
    description: 'Instalaciones de almacenamiento seguro para documentos fisicos con control de acceso y monitoreo 24/7.',
    url: '/servicios/almacenaje'
  },
  {
    name: 'Automatizacion de Flujos',
    description: 'Optimizacion de procesos documentales mediante tecnologia avanzada que mejora la eficiencia operativa.',
    url: '/servicios/automatizacion'
  },
  {
    name: 'Consultoria y Asesoria',
    description: 'Expertos en gestion de informacion que le ayudan a disenar soluciones personalizadas para su empresa.',
    url: '/servicios/consultoria'
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
    serviceType: 'Document Management'
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
    description: 'Gestion documental integral en Venezuela. Mas de 35 anos de experiencia.',
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
    name: 'Contacto - CloverFile Venezuela',
    description: 'Contacta a CloverFile para soluciones de gestion documental. 8 ubicaciones estrategicas en Venezuela.',
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
    '@id': `${SITE_URL}/quienes-somos/#aboutpage`,
    url: `${SITE_URL}/quienes-somos`,
    name: 'Quienes Somos - CloverFile Venezuela',
    description: 'Conozca CloverFile: mas de 35 anos de experiencia en gestion documental integral en Venezuela. Unidad de negocio de Clover Internacional.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

// Location data for CloverFile locations
export const locations = [
  {
    id: 'el-rosal',
    name: 'CloverFile - El Rosal (Oficina Principal)',
    shortName: 'El Rosal',
    isHeadquarters: true,
    address: {
      streetAddress: 'Avenida Venezuela, Torre El Saman, Piso 3, Oficina 3-1',
      addressLocality: 'El Rosal, Municipio Chacao',
      addressRegion: 'Caracas',
      postalCode: '1060',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.4883, longitude: -66.8574 },
    phone: '+58-414-4708354',
    email: 'atc.cloverfile@cloverve.com',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Gestion Documental', 'Consultoria', 'Atencion al Cliente']
  },
  {
    id: 'macarao',
    name: 'CloverFile - Almacen Macarao',
    shortName: 'Macarao',
    isHeadquarters: false,
    address: {
      streetAddress: 'Urbanizacion Industrial La Fe',
      addressLocality: 'Parroquia Macarao, Municipio Libertador',
      addressRegion: 'Caracas, Distrito Capital',
      postalCode: '1090',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.4567, longitude: -66.9789 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
  },
  {
    id: 'valencia',
    name: 'CloverFile - Almacen Valencia',
    shortName: 'Valencia',
    isHeadquarters: false,
    address: {
      streetAddress: 'Urbanizacion Parque Comercio Industrial Castillito',
      addressLocality: 'Municipio San Diego',
      addressRegion: 'Estado Carabobo',
      postalCode: '2006',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.1579, longitude: -67.9967 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
  },
  {
    id: 'barcelona',
    name: 'CloverFile - Almacen Barcelona',
    shortName: 'Barcelona',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial Los Montones, Calle F, Parcela 45',
      addressLocality: 'Barcelona',
      addressRegion: 'Estado Anzoategui',
      postalCode: '6001',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.1136, longitude: -64.6878 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
  },
  {
    id: 'maracaibo',
    name: 'CloverFile - Almacen Maracaibo',
    shortName: 'Maracaibo',
    isHeadquarters: false,
    address: {
      streetAddress: 'Avenida 50, entre 61C y calle 148',
      addressLocality: 'Municipio Maracaibo',
      addressRegion: 'Estado Zulia',
      postalCode: '4004',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.6544, longitude: -71.6398 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
  },
  {
    id: 'la-trinidad',
    name: 'CloverFile - La Trinidad',
    shortName: 'La Trinidad',
    isHeadquarters: false,
    address: {
      streetAddress: 'Calle Paris, Edificio Clover',
      addressLocality: 'La Trinidad',
      addressRegion: 'Caracas',
      postalCode: '1080',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.4396, longitude: -66.8511 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Sede Corporativa', 'Almacenamiento']
  },
  {
    id: 'la-yaguara',
    name: 'CloverFile - Almacen La Yaguara',
    shortName: 'La Yaguara',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Industrial La Yaguara',
      addressLocality: 'La Yaguara',
      addressRegion: 'Caracas',
      postalCode: '1070',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.4789, longitude: -66.9456 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
  },
  {
    id: 'puerto-cabello',
    name: 'CloverFile - Almacen Puerto Cabello',
    shortName: 'Puerto Cabello',
    isHeadquarters: false,
    address: {
      streetAddress: 'Zona Portuaria',
      addressLocality: 'Puerto Cabello',
      addressRegion: 'Estado Carabobo',
      postalCode: '2050',
      addressCountry: 'VE'
    },
    geo: { latitude: 10.4731, longitude: -68.0119 },
    phone: '+58-414-4708354',
    openingHours: ['Mo-Fr 08:00-17:00'],
    services: ['Almacenamiento de Archivos', 'Custodia Documental']
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
    email: location.email || 'atc.cloverfile@cloverve.com',
    address: {
      '@type': 'PostalAddress',
      ...location.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude
    },
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
