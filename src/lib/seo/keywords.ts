// SEO Keywords and Meta Data for Clover Venezuela pages

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'Clover Venezuela - Logística Integral | +60 Años de Experiencia',
    description: 'Soluciones logísticas integrales en Venezuela. Almacenamiento, transporte terrestre, aduanas y carga internacional. Más de 60 años de experiencia y 500+ clientes satisfechos.',
    keywords: [
      'logística Venezuela',
      'logística integral Venezuela',
      'operador logístico Venezuela',
      '3PL Venezuela',
      'almacén Venezuela',
      'transporte Venezuela'
    ]
  },

  'logistica-integral-venezuela': {
    title: 'Logística Integral Venezuela | Operador 3PL Certificado',
    description: 'Servicios de logística integral 3PL en Venezuela. Optimizamos su cadena de suministro con almacenamiento, transporte y distribución. +60 años de experiencia.',
    keywords: [
      'logística integral Venezuela',
      '3PL Venezuela',
      'operador logístico Venezuela',
      'cadena de suministro Venezuela',
      'outsourcing logístico',
      'gestión logística'
    ]
  },

  almacen: {
    title: 'Almacén Logístico Venezuela | 70,000 m² de Almacenamiento',
    description: 'Almacenamiento logístico en Venezuela con más de 70,000 m² en 8 ubicaciones estratégicas. Gestión de inventario, picking, packing y distribución.',
    keywords: [
      'almacén logístico Venezuela',
      'almacenamiento Caracas',
      'almacén 70000 m²',
      'bodega Venezuela',
      'almacén refrigerado',
      'gestión de inventario'
    ]
  },

  'logistica-transporte-terrestre': {
    title: 'Transporte Terrestre Venezuela | Flota Propia con GPS',
    description: 'Transporte terrestre de carga en Venezuela con flota propia y rastreo GPS en tiempo real. Distribución segura a nivel nacional.',
    keywords: [
      'transporte terrestre Venezuela',
      'transporte de carga Venezuela',
      'flota propia Venezuela',
      'GPS tracking carga',
      'distribución nacional',
      'camiones Venezuela'
    ]
  },

  aduana: {
    title: 'Agencia Aduanal Venezuela | Servicios OEA Certificados',
    description: 'Agenciamiento aduanal en Venezuela. Nacionalización de mercancías, clasificación arancelaria, certificación OEA. Agilizamos sus importaciones y exportaciones.',
    keywords: [
      'agencia aduanal Venezuela',
      'nacionalización Venezuela',
      'OEA Venezuela',
      'importación Venezuela',
      'exportación Venezuela',
      'clasificación arancelaria',
      'SENIAT'
    ]
  },

  impot: {
    title: 'Carga Internacional Venezuela | Aérea, Marítima FCL/LCL',
    description: 'Servicios de carga internacional hacia Venezuela. Transporte aéreo, marítimo FCL y LCL. Consolidación y desconsolidación de carga.',
    keywords: [
      'carga internacional Venezuela',
      'carga aérea Venezuela',
      'carga marítima Venezuela',
      'FCL Venezuela',
      'LCL Venezuela',
      'freight forwarder Venezuela'
    ]
  },

  cloverpack: {
    title: 'Embalaje Industrial Venezuela | CloverPack Profesional',
    description: 'Servicios de embalaje industrial y profesional en Venezuela. Protección de mercancía, paletizado y acondicionamiento para transporte.',
    keywords: [
      'embalaje industrial Venezuela',
      'embalaje profesional',
      'paletizado Venezuela',
      'empaque industrial',
      'protección de carga',
      'CloverPack'
    ]
  },

  contacto: {
    title: 'Contacto | Clover Venezuela - 8 Ubicaciones Estratégicas',
    description: 'Contacta a Clover Venezuela. 8 ubicaciones estratégicas: Caracas, Valencia, Puerto Cabello, Maiquetía, Barcelona, Maracaibo. Tel: +58-212-8191152',
    keywords: [
      'contacto Clover Venezuela',
      'ubicaciones Clover',
      'teléfono Clover Venezuela',
      'email logística Venezuela'
    ]
  },

  nosotros: {
    title: 'Nosotros | Clover Venezuela - +60 Años de Historia',
    description: 'Conoce Clover Venezuela: +60 años de experiencia en logística integral. Nuestra historia, misión, visión y valores. Líder en soluciones logísticas.',
    keywords: [
      'historia Clover Venezuela',
      'sobre nosotros logística',
      'empresa logística Venezuela',
      'valores Clover'
    ]
  },

  blog: {
    title: 'Blog | Clover Venezuela - Noticias y Tendencias Logísticas',
    description: 'Blog de logística y cadena de suministro en Venezuela. Artículos sobre tendencias, mejores prácticas y novedades del sector logístico.',
    keywords: [
      'blog logística Venezuela',
      'noticias logística',
      'tendencias cadena de suministro',
      'artículos logística'
    ]
  },

  'casos-de-exito': {
    title: 'Casos de Éxito | Clover Venezuela - Historias de Clientes',
    description: 'Descubre cómo Clover Venezuela ha transformado la logística de empresas líderes. Casos de éxito y testimonios de clientes satisfechos.',
    keywords: [
      'casos de éxito logística',
      'testimonios clientes',
      'historias de éxito',
      'clientes Clover Venezuela'
    ]
  }
};

// Location-specific SEO
export const locationSEO: Record<string, PageSEO> = {
  caracas: {
    title: 'Logística en Caracas | Clover Venezuela - 3 Ubicaciones',
    description: 'Servicios logísticos en Caracas: La Trinidad, Macarao y La Yaguara. Almacenamiento, transporte y distribución en la capital.',
    keywords: [
      'logística Caracas',
      'almacén Caracas',
      'transporte Caracas',
      'La Trinidad logística',
      'distribución Caracas'
    ]
  },

  valencia: {
    title: 'Logística en Valencia | Clover Venezuela - Estado Carabobo',
    description: 'Centro logístico en Valencia, Estado Carabobo. Almacenamiento y distribución para la zona central de Venezuela.',
    keywords: [
      'logística Valencia Venezuela',
      'almacén Valencia',
      'transporte Carabobo',
      'distribución Valencia'
    ]
  },

  'puerto-cabello': {
    title: 'Logística Portuaria Puerto Cabello | Clover Venezuela',
    description: 'Servicios logísticos en Puerto Cabello. Operaciones portuarias, almacenamiento de carga marítima y servicios aduanales.',
    keywords: [
      'logística Puerto Cabello',
      'puerto Puerto Cabello',
      'carga marítima Venezuela',
      'almacén portuario'
    ]
  },

  maiquetia: {
    title: 'Logística Aeroportuaria Maiquetía | Clover Venezuela',
    description: 'Servicios logísticos en Aeropuerto de Maiquetía. Carga aérea internacional, aduanas y almacenamiento aeroportuario.',
    keywords: [
      'logística Maiquetía',
      'carga aérea Venezuela',
      'aeropuerto Maiquetía',
      'aduana aeroportuaria'
    ]
  },

  barcelona: {
    title: 'Logística en Barcelona | Clover Venezuela - Anzoátegui',
    description: 'Centro logístico en Barcelona, Estado Anzoátegui. Almacenamiento y distribución para el oriente venezolano.',
    keywords: [
      'logística Barcelona Venezuela',
      'almacén Anzoátegui',
      'transporte oriente Venezuela'
    ]
  },

  maracaibo: {
    title: 'Logística en Maracaibo | Clover Venezuela - Zulia',
    description: 'Centro logístico en Maracaibo, Estado Zulia. Almacenamiento y distribución para el occidente venezolano.',
    keywords: [
      'logística Maracaibo',
      'almacén Zulia',
      'transporte occidente Venezuela',
      'distribución Maracaibo'
    ]
  }
};

// FAQ content for service pages
export const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'logistica-integral-venezuela': [
    {
      question: '¿Qué es la logística integral 3PL?',
      answer: 'La logística integral 3PL (Third Party Logistics) es un modelo donde una empresa externa gestiona todas las operaciones logísticas: almacenamiento, inventario, transporte y distribución, permitiendo a las empresas enfocarse en su negocio principal.'
    },
    {
      question: '¿Cuáles son las ventajas de tercerizar la logística?',
      answer: 'Las principales ventajas incluyen: reducción de costos operativos, acceso a infraestructura especializada, flexibilidad para escalar operaciones, tecnología avanzada de gestión y experiencia profesional en cadena de suministro.'
    },
    {
      question: '¿Clover Venezuela está certificado como operador logístico?',
      answer: 'Sí, Clover Venezuela cuenta con más de 60 años de experiencia y certificaciones que garantizan la calidad de nuestros servicios logísticos, incluyendo certificación OEA (Operador Económico Autorizado).'
    }
  ],

  almacen: [
    {
      question: '¿Cuánto espacio de almacenamiento tiene Clover Venezuela?',
      answer: 'Contamos con más de 70,000 m² de almacenes distribuidos en 8 ubicaciones estratégicas en Venezuela: Caracas (La Trinidad, Macarao, La Yaguara), Valencia, Puerto Cabello, Maiquetía, Barcelona y Maracaibo.'
    },
    {
      question: '¿Ofrecen almacenamiento refrigerado?',
      answer: 'Sí, disponemos de instalaciones con almacenamiento refrigerado y climatizado para productos que requieren control de temperatura, garantizando la cadena de frío.'
    },
    {
      question: '¿Cómo se gestiona el inventario?',
      answer: 'Utilizamos sistemas WMS (Warehouse Management System) para control de inventario en tiempo real, con trazabilidad completa de su mercancía desde la recepción hasta el despacho.'
    }
  ],

  'logistica-transporte-terrestre': [
    {
      question: '¿Clover Venezuela tiene flota propia?',
      answer: 'Sí, contamos con flota propia de vehículos de diferentes capacidades, todos equipados con GPS para rastreo en tiempo real, garantizando seguridad y puntualidad en las entregas.'
    },
    {
      question: '¿Qué cobertura tiene el transporte terrestre?',
      answer: 'Ofrecemos cobertura a nivel nacional en Venezuela, con operaciones desde nuestras 8 ubicaciones estratégicas que nos permiten llegar a cualquier punto del país.'
    },
    {
      question: '¿Puedo rastrear mi carga en tiempo real?',
      answer: 'Sí, todos nuestros vehículos cuentan con sistema GPS que permite el seguimiento en tiempo real de su carga, brindando visibilidad completa de sus envíos.'
    }
  ],

  aduana: [
    {
      question: '¿Qué es la certificación OEA?',
      answer: 'OEA (Operador Económico Autorizado) es una certificación que otorga el SENIAT a empresas que cumplen estándares de seguridad y cumplimiento aduanero, permitiendo procesos más ágiles y beneficios en sus operaciones de comercio exterior.'
    },
    {
      question: '¿Qué servicios aduanales ofrece Clover Venezuela?',
      answer: 'Ofrecemos: nacionalización de mercancías, clasificación arancelaria, liquidación de impuestos, gestión de permisos y certificados, regímenes especiales y asesoría en comercio exterior.'
    },
    {
      question: '¿En qué puertos y aeropuertos operan?',
      answer: 'Operamos en los principales puntos de entrada del país: Puerto Cabello, La Guaira, Aeropuerto de Maiquetía, y tenemos capacidad de gestionar operaciones en cualquier aduana de Venezuela.'
    }
  ],

  impot: [
    {
      question: '¿Qué es carga FCL y LCL?',
      answer: 'FCL (Full Container Load) es cuando su carga ocupa un contenedor completo. LCL (Less than Container Load) es cuando su carga se consolida con otras cargas en un mismo contenedor, siendo ideal para volúmenes menores.'
    },
    {
      question: '¿Desde qué países pueden importar carga?',
      answer: 'Gestionamos carga internacional desde cualquier origen: Estados Unidos, Europa, Asia (China, especialmente), y América Latina. Contamos con una red global de agentes y corresponsales.'
    },
    {
      question: '¿Ofrecen servicio de carga aérea?',
      answer: 'Sí, manejamos carga aérea para envíos urgentes o mercancía de alto valor. Operamos desde el Aeropuerto de Maiquetía con servicios de consolidación y desconsolidación.'
    }
  ],

  cloverpack: [
    {
      question: '¿Qué tipo de embalaje ofrecen?',
      answer: 'Ofrecemos embalaje industrial para maquinaria, equipos y productos especiales; embalaje comercial para productos de consumo; paletizado y retractilado; y soluciones personalizadas según las necesidades de su mercancía.'
    },
    {
      question: '¿El embalaje protege contra la humedad?',
      answer: 'Sí, utilizamos materiales y técnicas especializadas para protección contra humedad, incluyendo barreras de vapor, desecantes y embalaje hermético cuando sea necesario.'
    },
    {
      question: '¿Pueden embalar mercancía para exportación?',
      answer: 'Sí, realizamos embalaje que cumple con normativas internacionales para exportación, incluyendo tratamiento fitosanitario de madera (NIMF-15) cuando se requiere.'
    }
  ]
};
