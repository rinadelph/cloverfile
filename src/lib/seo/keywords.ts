// SEO Keywords and Meta Data for Clover Mudanzas pages

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'Clover Mudanzas - Mudanzas Nacionales e Internacionales | +60 Anos de Experiencia',
    description: 'Servicios de mudanzas nacionales e internacionales en Venezuela. Embalaje profesional, traslado seguro de bienes personales y corporativos. Mas de 60 anos de experiencia.',
    keywords: [
      'mudanzas Venezuela',
      'mudanzas internacionales Venezuela',
      'mudanzas nacionales Venezuela',
      'empresa de mudanzas Caracas',
      'mudanzas corporativas',
      'embalaje profesional Venezuela',
      'traslado de bienes Venezuela'
    ],
    image: '/images/og-mudanzas.jpg'
  },

  'mudanzas-nacionales': {
    title: 'Mudanzas Nacionales Venezuela | Traslados a Todo el Pais',
    description: 'Servicios de mudanzas nacionales en Venezuela. Embalaje, transporte y almacenaje de bienes personales y corporativos a cualquier destino nacional.',
    keywords: [
      'mudanzas nacionales Venezuela',
      'mudanzas Caracas',
      'traslado nacional Venezuela',
      'mudanzas residenciales Venezuela',
      'mudanzas a todo el pais'
    ]
  },

  'mudanzas-internacionales': {
    title: 'Mudanzas Internacionales desde Venezuela | Servicio Puerta a Puerta',
    description: 'Mudanzas internacionales desde Venezuela a cualquier destino. Gestion aduanal, embalaje de exportacion, seguro a todo riesgo. Servicio puerta a puerta.',
    keywords: [
      'mudanzas internacionales Venezuela',
      'mudanzas desde Venezuela',
      'mudanzas al exterior',
      'relocation Venezuela',
      'mudanzas puerta a puerta',
      'mudanzas aereas Venezuela',
      'mudanzas maritimas Venezuela'
    ]
  },

  'mudanzas-oficinas': {
    title: 'Mudanzas de Oficinas Venezuela | Traslados Corporativos',
    description: 'Servicios de mudanzas de oficinas y traslados corporativos en Venezuela. Minimo impacto en sus operaciones. Embalaje y traslado de mobiliario y equipos.',
    keywords: [
      'mudanzas de oficinas Venezuela',
      'mudanzas corporativas Caracas',
      'traslado de oficinas',
      'mudanzas empresariales',
      'mudanzas comerciales Venezuela'
    ]
  },

  'clover-pack': {
    title: 'Clover Pack | Embalaje Profesional para Mudanzas',
    description: 'Servicios de embalaje profesional para mudanzas. Materiales de alta calidad, tecnicas especializadas para proteger sus pertenencias durante el traslado.',
    keywords: [
      'embalaje mudanzas Venezuela',
      'embalaje profesional',
      'materiales de embalaje',
      'proteccion de bienes mudanza',
      'Clover Pack'
    ]
  },

  contacto: {
    title: 'Contacto | Clover Mudanzas - Solicite su Presupuesto',
    description: 'Contacte a Clover Mudanzas para solicitar presupuesto sin compromiso. Mudanzas nacionales e internacionales. Tel: +58-212-8191152',
    keywords: [
      'contacto Clover Mudanzas',
      'presupuesto mudanza Venezuela',
      'cotizacion mudanza',
      'telefono mudanzas Venezuela'
    ]
  },

  nosotros: {
    title: 'Nosotros | Clover Mudanzas - +60 Anos de Experiencia',
    description: 'Conozca Clover Mudanzas: mas de 60 anos de experiencia en mudanzas nacionales e internacionales. Parte del Grupo Clover Venezuela.',
    keywords: [
      'historia Clover Mudanzas',
      'sobre nosotros mudanzas',
      'empresa mudanzas Venezuela',
      'Grupo Clover'
    ]
  },

  blog: {
    title: 'Blog | Clover Mudanzas - Consejos y Guias para tu Mudanza',
    description: 'Blog de consejos para mudanzas. Guias practicas, tips de embalaje y todo lo que necesitas saber para una mudanza exitosa.',
    keywords: [
      'blog mudanzas',
      'consejos mudanza',
      'tips embalaje',
      'guia mudanza internacional'
    ]
  },

  'para-ti': {
    title: 'Para Ti | Blog CloverFile Venezuela - Gestion Documental y Tecnologia',
    description: 'Articulos, noticias y consejos sobre gestion documental, digitalizacion de documentos, seguridad en la nube y soluciones tecnologicas para empresas venezolanas.',
    keywords: [
      'blog gestion documental',
      'articulos digitalizacion',
      'noticias tecnologia Venezuela',
      'consejos almacenamiento nube',
      'gestion de archivos empresariales',
      'seguridad documental',
      'WMS almacenes Venezuela'
    ]
  },

  'gestion-digital': {
    title: 'Gestion Digital de Documentos | Clover File Venezuela',
    description: 'Servicios de digitalizacion de documentos, software de gestion documental, automatizacion de flujos de trabajo y almacenamiento en nube. Transformamos tu archivo fisico en digital.',
    keywords: [
      'gestion digital documentos Venezuela',
      'digitalizacion de documentos',
      'escaneo de documentos',
      'software gestion documental',
      'automatizacion workflows',
      'almacenamiento en nube documentos',
      'OCR reconocimiento texto',
      'archivo digital empresarial',
      'digitalizacion planos libros',
      'flujos de trabajo documental'
    ]
  },

  'gestion-fisica': {
    title: 'Gestion Fisica de Documentos | Clover File Venezuela',
    description: 'Custodia y almacenamiento seguro de documentos fisicos en Venezuela. Cajas de archivo, almacenes especializados, boveda de medios magneticos y servicio de prestamos.',
    keywords: [
      'gestion fisica documentos Venezuela',
      'custodia de archivos',
      'almacenamiento documentos fisicos',
      'cajas de archivo',
      'boveda medios magneticos',
      'prestamo documentos',
      'inventario documental',
      'traslado de documentos',
      'archivo empresarial',
      'custodia segura documentos'
    ]
  },

  almacen: {
    title: 'Almacenamiento Logistico | Clover Venezuela - 70,000+ m2',
    description: 'Servicios de almacenamiento en Venezuela con mas de 70,000 m2 de capacidad. Cadena de frio, picking & packing, cross docking y gestion de inventarios WMS.',
    keywords: [
      'almacenamiento Venezuela',
      'almacen logistico',
      'cadena de frio',
      'picking packing',
      'cross docking',
      'WMS Venezuela',
      'gestion inventarios'
    ]
  }
};

// Location-specific SEO (for ubicaciones page)
export const locationSEO: Record<string, PageSEO> = {
  caracas: {
    title: 'Mudanzas en Caracas | Clover Mudanzas Venezuela',
    description: 'Servicios de mudanzas en Caracas. Mudanzas residenciales y corporativas en La Trinidad, Chacao, Altamira, Las Mercedes y toda el area metropolitana.',
    keywords: [
      'mudanzas Caracas',
      'mudanzas La Trinidad',
      'empresa mudanzas Caracas',
      'mudanzas residenciales Caracas'
    ]
  },
  valencia: {
    title: 'Mudanzas en Valencia | Clover Mudanzas Carabobo',
    description: 'Servicios de mudanzas en Valencia, Estado Carabobo. Mudanzas residenciales y empresariales en la zona centro-occidental de Venezuela.',
    keywords: [
      'mudanzas Valencia Venezuela',
      'mudanzas Carabobo',
      'empresa mudanzas Valencia'
    ]
  },
  maracaibo: {
    title: 'Mudanzas en Maracaibo | Clover Mudanzas Zulia',
    description: 'Servicios de mudanzas en Maracaibo, Estado Zulia. Mudanzas locales, nacionales e internacionales desde el occidente del pais.',
    keywords: [
      'mudanzas Maracaibo',
      'mudanzas Zulia',
      'empresa mudanzas Maracaibo'
    ]
  },
  'puerto-cabello': {
    title: 'Mudanzas Puerto Cabello | Clover Mudanzas',
    description: 'Servicios de mudanzas y embalaje en Puerto Cabello. Conexion portuaria para mudanzas internacionales.',
    keywords: [
      'mudanzas Puerto Cabello',
      'mudanzas portuarias Venezuela'
    ]
  },
  barcelona: {
    title: 'Mudanzas en Barcelona | Clover Mudanzas Anzoategui',
    description: 'Servicios de mudanzas en Barcelona y Puerto La Cruz, Estado Anzoategui. Mudanzas para el oriente venezolano.',
    keywords: [
      'mudanzas Barcelona Venezuela',
      'mudanzas Anzoategui',
      'mudanzas Puerto La Cruz'
    ]
  },
  maiquetia: {
    title: 'Mudanzas Aereas Maiquetia | Clover Mudanzas',
    description: 'Servicios de mudanzas aereas desde el Aeropuerto de Maiquetia. Conexion internacional rapida para sus pertenencias.',
    keywords: [
      'mudanzas aereas Venezuela',
      'mudanzas Maiquetia',
      'carga aerea mudanzas'
    ]
  }
};

// Service-specific FAQs
export const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'mudanzas-nacionales': [
    {
      question: 'Que incluye el servicio de mudanza nacional?',
      answer: 'Nuestro servicio incluye: embalaje profesional de todos sus bienes, carga y descarga, transporte seguro, almacenaje temporal si es necesario, e instalacion en el destino final.'
    },
    {
      question: 'A que destinos realizan mudanzas nacionales?',
      answer: 'Realizamos mudanzas a cualquier destino dentro de Venezuela, incluyendo Caracas, Valencia, Maracaibo, Barquisimeto, Barcelona, Puerto La Cruz, Merida, y todas las ciudades del pais.'
    },
    {
      question: 'Cuanto tiempo toma una mudanza nacional?',
      answer: 'El tiempo depende de la distancia y el volumen. Mudanzas dentro de la misma ciudad pueden completarse en 1-2 dias. Mudanzas a otras ciudades pueden tomar de 3-7 dias incluyendo embalaje y traslado.'
    }
  ],

  'mudanzas-internacionales': [
    {
      question: 'Que necesito para hacer una mudanza internacional?',
      answer: 'Necesitara: pasaporte vigente, visa o permiso de residencia del pais destino, inventario detallado de bienes, y documentos que acrediten propiedad de items de alto valor. Nosotros gestionamos toda la documentacion aduanal.'
    },
    {
      question: 'Cuanto tiempo toma una mudanza internacional?',
      answer: 'Por via maritima: 4-8 semanas dependiendo del destino. Por via aerea: 1-2 semanas. Incluye tiempo de embalaje, transito y despacho aduanal en origen y destino.'
    },
    {
      question: 'Ofrecen seguro para mudanzas internacionales?',
      answer: 'Si, ofrecemos seguro a todo riesgo que cubre sus bienes durante todo el proceso: embalaje, transporte, almacenaje y entrega. El seguro protege contra danos, perdida y robo.'
    },
    {
      question: 'Que paises manejan para mudanzas internacionales?',
      answer: 'Realizamos mudanzas a cualquier destino mundial. Los destinos mas frecuentes incluyen: Estados Unidos, Espana, Panama, Colombia, Chile, Argentina, Portugal, y otros paises de America y Europa.'
    }
  ],

  'mudanzas-oficinas': [
    {
      question: 'Como minimizan el impacto en las operaciones de la empresa?',
      answer: 'Planificamos cuidadosamente cada fase, trabajamos en horarios extendidos o fines de semana, y coordinamos la mudanza por etapas para minimizar el tiempo de inactividad de su empresa.'
    },
    {
      question: 'Manejan equipos de computacion y tecnologia?',
      answer: 'Si, contamos con experiencia en el traslado de equipos de TI, servidores, y tecnologia. Utilizamos embalaje especializado y personal capacitado para el manejo de equipos sensibles.'
    },
    {
      question: 'Ofrecen servicio de instalacion en el nuevo espacio?',
      answer: 'Si, nuestro servicio incluye la instalacion de mobiliario y equipos en la nueva ubicacion, siguiendo el plano de distribucion acordado con su empresa.'
    }
  ],

  'clover-pack': [
    {
      question: 'Que materiales utilizan para el embalaje?',
      answer: 'Utilizamos materiales de alta calidad: cajas reforzadas de diferentes tamanos, papel kraft, burbujas de aire, foam, esquineros, cinta de embalaje industrial, y materiales especiales para items fragiles.'
    },
    {
      question: 'Ofrecen embalaje para articulos especiales?',
      answer: 'Si, tenemos experiencia en embalaje de obras de arte, pianos, antiguedades, cristaleria fina, electrodomesticos grandes, y cualquier articulo que requiera cuidado especial.'
    },
    {
      question: 'El embalaje cumple con normas internacionales?',
      answer: 'Si, nuestro embalaje para mudanzas internacionales cumple con todas las normas de exportacion, incluyendo tratamiento fitosanitario de madera (NIMF-15) cuando es requerido.'
    }
  ]
};
