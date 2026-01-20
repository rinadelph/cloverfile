// SEO Keywords and Meta Data for CloverFile pages

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'CloverFile | Gestion Documental Digital y Fisica en Venezuela',
    description: 'Servicios de gestion documental en Venezuela. Digitalizacion, software de gestion, automatizacion, almacenamiento en nube y custodia fisica de documentos. +40 anos de experiencia. Seguridad, Tiempo, Espacio.',
    keywords: [
      'gestion documental Venezuela',
      'digitalizacion de documentos Venezuela',
      'almacenamiento de documentos',
      'custodia de archivos',
      'software gestion documental',
      'escaneo de documentos',
      'archivo digital Venezuela',
      'CloverFile'
    ],
    image: '/images/1502852123.png'
  },

  'quienes-somos': {
    title: 'Quienes Somos | CloverFile - Empresa de Gestion Documental',
    description: 'Conoce CloverFile, empresa lider en gestion documental y custodia de archivos en Venezuela. Nuestra mision, vision y compromiso con la seguridad de tu informacion.',
    keywords: [
      'empresa gestion documental',
      'custodia de archivos',
      'empresa archivo digital Venezuela',
      'gestion de informacion empresarial',
      'CloverFile Venezuela'
    ]
  },

  servicios: {
    title: 'Servicios | CloverFile - Digitalizacion y Custodia de Archivos',
    description: 'Servicios profesionales de digitalizacion de documentos, almacenamiento y custodia de archivos. Soluciones integrales para la gestion documental de tu empresa.',
    keywords: [
      'digitalizacion',
      'almacenamiento documentos',
      'custodia de archivos',
      'servicios gestion documental',
      'archivo digital empresarial',
      'workflows documentales'
    ]
  },

  'gestion-digital': {
    title: 'Gestion Digital de Documentos | CloverFile Venezuela',
    description: 'Servicios de digitalizacion de documentos, software de gestion documental, automatizacion de flujos de trabajo y almacenamiento en nube.',
    keywords: [
      'gestion digital documentos Venezuela',
      'digitalizacion de documentos',
      'escaneo de documentos',
      'software gestion documental',
      'automatizacion workflows',
      'almacenamiento en nube documentos'
    ]
  },

  'gestion-fisica': {
    title: 'Gestion Fisica de Documentos | CloverFile Venezuela',
    description: 'Custodia y almacenamiento seguro de documentos fisicos en Venezuela. Cajas de archivo, almacenes especializados y servicio de prestamos.',
    keywords: [
      'gestion fisica documentos Venezuela',
      'custodia de archivos',
      'almacenamiento documentos fisicos',
      'cajas de archivo',
      'prestamo documentos'
    ]
  },

  contacto: {
    title: 'Contacto | CloverFile - Gestion Documental Venezuela',
    description: 'Contacta a CloverFile para soluciones de gestion documental en Venezuela. Consultoria personalizada en digitalizacion, custodia y almacenamiento de archivos.',
    keywords: [
      'contacto gestion documental',
      'consultoria archivo digital',
      'CloverFile contacto'
    ]
  },

  'para-ti': {
    title: 'Para Ti | Blog CloverFile Venezuela - Gestion Documental y Tecnologia',
    description: 'Articulos, noticias y consejos sobre gestion documental, digitalizacion de documentos, seguridad en la nube y soluciones tecnologicas para empresas venezolanas.',
    keywords: [
      'blog gestion documental',
      'articulos digitalizacion',
      'noticias tecnologia Venezuela',
      'consejos almacenamiento nube'
    ]
  }
};

// Service-specific SEO
export const serviceSEO: Record<string, PageSEO> = {
  digitalizacion: {
    title: 'Digitalizacion de Documentos | CloverFile Venezuela',
    description: 'Servicios profesionales de digitalizacion de documentos en Venezuela. Convertimos sus archivos fisicos en documentos digitales seguros y accesibles.',
    keywords: [
      'digitalizacion documentos Venezuela',
      'escaneo de documentos',
      'conversion digital archivos'
    ]
  },

  software: {
    title: 'Software de Gestion Documental | CloverFile Venezuela',
    description: 'Plataformas integrales de gestion documental parametrizables y flexibles. Acceso por perfiles, busqueda avanzada y reportes automaticos.',
    keywords: [
      'software gestion documental Venezuela',
      'plataforma documental',
      'sistema gestion archivos'
    ]
  },

  automatizacion: {
    title: 'Automatizacion de Procesos | CloverFile Venezuela',
    description: 'Implementacion de flujos de trabajo digitales con tecnologias innovadoras para reducir trabajo manual y evitar errores humanos.',
    keywords: [
      'automatizacion procesos Venezuela',
      'workflows documentales',
      'flujos de trabajo digital'
    ]
  },

  nube: {
    title: 'Almacenamiento en Nube | CloverFile Venezuela',
    description: 'Respaldo de datos en la nube con acceso 24/7. Encriptacion segura y backup automatico con capacidad adaptada a tus necesidades.',
    keywords: [
      'almacenamiento nube Venezuela',
      'backup documental',
      'respaldo datos empresarial'
    ]
  },

  custodia: {
    title: 'Custodia Fisica de Documentos | CloverFile Venezuela',
    description: 'Almacenamiento seguro de documentos fisicos en instalaciones con vigilancia 24/7 y control ambiental. Mas de 4 millones de cajas bajo custodia.',
    keywords: [
      'custodia de archivos Venezuela',
      'almacenamiento seguro documentos',
      'boveda de archivos'
    ]
  },

  inventario: {
    title: 'Organizacion e Inventario | CloverFile Venezuela',
    description: 'Asesoria experta en gestion documental, inventarios e indexacion de archivos fisicos y digitales. Recuperacion inmediata de informacion.',
    keywords: [
      'inventario archivos Venezuela',
      'organizacion documentos',
      'indexacion archivos'
    ]
  },

  traslado: {
    title: 'Traslado de Documentos | CloverFile Venezuela',
    description: 'Trasladamos tu patrimonio documental y dispositivos de almacenamiento con protocolos de seguridad. Vehiculos propios con GPS y alcance nacional.',
    keywords: [
      'traslado documentos Venezuela',
      'transporte archivos',
      'mudanza documental'
    ]
  }
};

// FAQ content for service pages
export const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  digitalizacion: [
    {
      question: 'Que tipos de documentos pueden digitalizar?',
      answer: 'Digitalizamos todo tipo de documentos: contratos, facturas, expedientes, planos, libros contables, documentos legales, archivos historicos y cualquier documento en formato fisico que requiera ser convertido a formato digital.'
    },
    {
      question: 'Como garantizan la calidad de la digitalizacion?',
      answer: 'Utilizamos equipos de escaneo de alta resolucion y software especializado para garantizar la maxima calidad. Cada documento pasa por un proceso de control de calidad antes de ser entregado.'
    },
    {
      question: 'Que formatos de archivo entregan?',
      answer: 'Entregamos los documentos digitalizados en el formato que mejor se adapte a sus necesidades: PDF, TIFF, JPEG, PNG, entre otros. Tambien ofrecemos documentos con OCR para busqueda de texto.'
    }
  ],

  custodia: [
    {
      question: 'Que medidas de seguridad tienen para la custodia de archivos?',
      answer: 'Contamos con instalaciones con control de acceso biometrico, videovigilancia 24/7, sistemas contra incendios, control de humedad y temperatura, y protocolos estrictos de seguridad para el personal autorizado.'
    },
    {
      question: 'Como puedo acceder a mis documentos en custodia?',
      answer: 'Puede solicitar acceso a sus documentos a traves de nuestra plataforma digital o contactando a nuestro equipo. Entregamos los documentos fisicos o copias digitales segun su preferencia, con tiempos de respuesta garantizados.'
    },
    {
      question: 'Ofrecen destruccion certificada de documentos?',
      answer: 'Si, ofrecemos servicios de destruccion certificada de documentos al finalizar su periodo de retencion, con certificados de destruccion que cumplen con las normativas legales vigentes.'
    }
  ],

  nube: [
    {
      question: 'Que tan seguro es el almacenamiento digital?',
      answer: 'Utilizamos encriptacion de nivel empresarial, servidores redundantes, backups automaticos y cumplimos con los mas altos estandares de seguridad de la informacion para proteger sus documentos digitales.'
    },
    {
      question: 'Puedo acceder a mis documentos desde cualquier lugar?',
      answer: 'Si, nuestra plataforma permite acceso seguro a sus documentos desde cualquier dispositivo con conexion a internet, con autenticacion de multiples factores para mayor seguridad.'
    },
    {
      question: 'Que capacidad de almacenamiento ofrecen?',
      answer: 'Ofrecemos planes escalables que se adaptan a las necesidades de su empresa, desde pequenos archivos hasta grandes volumenes de documentos, con posibilidad de crecimiento segun sus requerimientos.'
    }
  ],

  automatizacion: [
    {
      question: 'Que procesos se pueden automatizar?',
      answer: 'Se pueden automatizar procesos como aprobacion de documentos, flujos de facturacion, gestion de contratos, onboarding de empleados, solicitudes internas y cualquier proceso que involucre documentos y aprobaciones.'
    },
    {
      question: 'Se integra con otros sistemas empresariales?',
      answer: 'Si, nuestras soluciones de workflows se integran con sistemas ERP, CRM, correo electronico y otras herramientas empresariales para crear flujos de trabajo unificados.'
    },
    {
      question: 'Cuanto tiempo toma implementar un workflow?',
      answer: 'El tiempo de implementacion varia segun la complejidad del proceso, pero tipicamente un workflow basico puede estar operativo en 2-4 semanas, incluyendo configuracion, pruebas y capacitacion.'
    }
  ],

  'gestion-digital': [
    {
      question: 'Que tipos de documentos pueden digitalizar?',
      answer: 'Digitalizamos todo tipo de documentos: contratos, facturas, expedientes, planos, libros contables, documentos legales, archivos historicos y cualquier documento en formato fisico que requiera ser convertido a formato digital.'
    },
    {
      question: 'Como garantizan la calidad de la digitalizacion?',
      answer: 'Utilizamos equipos de escaneo de alta resolucion y software especializado para garantizar la maxima calidad. Cada documento pasa por un proceso de control de calidad antes de ser entregado.'
    },
    {
      question: 'Que formatos de archivo entregan?',
      answer: 'Entregamos los documentos digitalizados en el formato que mejor se adapte a sus necesidades: PDF, TIFF, JPEG, PNG, entre otros. Tambien ofrecemos documentos con OCR para busqueda de texto.'
    },
    {
      question: 'Ofrecen almacenamiento en la nube?',
      answer: 'Si, respaldamos tus datos en nuestro servicio de Nube, brindando acceso 24 x 7 a la informacion, con capacidad de almacenamiento adaptada a tus necesidades y costos accesibles.'
    }
  ],

  'gestion-fisica': [
    {
      question: 'Que medidas de seguridad tienen para la custodia de archivos?',
      answer: 'Contamos con instalaciones con control de acceso biometrico, videovigilancia CCTV 24/7, sistemas contra incendios, control de humedad y temperatura, cerco electrico y protocolos estrictos de seguridad.'
    },
    {
      question: 'Como puedo acceder a mis documentos en custodia?',
      answer: 'Puede solicitar acceso a sus documentos a traves de nuestro sistema computarizado disponible 24 horas. Entregamos los documentos fisicos o copias digitales segun su preferencia, con tiempos de respuesta garantizados.'
    },
    {
      question: 'Que caracteristicas tienen las cajas de archivo?',
      answer: 'Nuestras cajas son de carton corrugado doble pared de alta calidad (41x25x32 cm), protegen contra cambios de temperatura y humedad, soportan hasta 25kg, permiten apilamiento de 5 cajas y tienen vida util de 10 anos.'
    },
    {
      question: 'Ofrecen servicio de traslado de documentos?',
      answer: 'Si, trasladamos tu patrimonio documental con vehiculos propios vigilados con GPS, adaptados al tipo de material, con alcance nacional y protocolos que garantizan la seguridad y trazabilidad.'
    }
  ]
};

// Location-specific SEO (for ubicaciones page)
export const locationSEO: Record<string, PageSEO> = {
  caracas: {
    title: 'Gestion Documental en Caracas | CloverFile Venezuela',
    description: 'Servicios de gestion documental en Caracas. Digitalizacion, custodia de archivos y almacenamiento seguro para empresas en la capital.',
    keywords: [
      'gestion documental Caracas',
      'custodia archivos Caracas',
      'digitalizacion Caracas'
    ]
  },
  valencia: {
    title: 'Gestion Documental en Valencia | CloverFile Carabobo',
    description: 'Servicios de gestion documental en Valencia, Estado Carabobo. Digitalizacion y custodia de archivos para empresas.',
    keywords: [
      'gestion documental Valencia Venezuela',
      'custodia archivos Carabobo'
    ]
  },
  maracaibo: {
    title: 'Gestion Documental en Maracaibo | CloverFile Zulia',
    description: 'Servicios de gestion documental en Maracaibo, Estado Zulia. Digitalizacion y almacenamiento seguro de documentos.',
    keywords: [
      'gestion documental Maracaibo',
      'custodia archivos Zulia'
    ]
  }
};
