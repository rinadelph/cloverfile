// Location data for dedicated location pages

export interface LocationPageData {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  region: string;
  facilities: string[];
  services: string[];
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  openingHours: string;
  mapUrl: string;
}

export const locationPages: LocationPageData[] = [
  {
    id: 'caracas',
    slug: 'caracas',
    name: 'Caracas',
    title: 'Logística en Caracas | Clover Venezuela - 3 Ubicaciones',
    description: 'Servicios logísticos en Caracas: La Trinidad (sede principal), Macarao y La Yaguara. Almacenamiento, transporte y distribución en la capital de Venezuela.',
    heroTitle: 'Logística en Caracas',
    heroDescription: 'Tres ubicaciones estratégicas en la capital: La Trinidad (sede principal), Macarao y La Yaguara. Cobertura total para tu operación logística.',
    region: 'Distrito Capital',
    facilities: [
      'La Trinidad - Sede Principal y Oficinas Corporativas',
      'Macarao - Centro de Distribución',
      'La Yaguara - Almacén y Cross-Docking'
    ],
    services: [
      'Logística Integral 3PL',
      'Almacenamiento con WMS',
      'Distribución urbana y metropolitana',
      'Cross-docking',
      'Gestión de inventarios',
      'Servicios aduaneros'
    ],
    address: {
      street: 'Calle Paris, Edificio Clover',
      city: 'La Trinidad',
      state: 'Caracas',
      postalCode: '1080'
    },
    coordinates: {
      lat: 10.4396,
      lng: -66.8511
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=La+Trinidad+Caracas+Venezuela'
  },
  {
    id: 'valencia',
    slug: 'valencia',
    name: 'Valencia',
    title: 'Logística en Valencia | Clover Venezuela - Estado Carabobo',
    description: 'Centro logístico en Valencia, Estado Carabobo. Almacenamiento, transporte y distribución para la zona industrial central de Venezuela.',
    heroTitle: 'Logística en Valencia',
    heroDescription: 'Centro de operaciones para la zona central de Venezuela. Ubicación estratégica en el corazón industrial del país.',
    region: 'Estado Carabobo',
    facilities: [
      'Almacén principal Valencia',
      'Centro de distribución regional'
    ],
    services: [
      'Almacenamiento general y refrigerado',
      'Distribución regional',
      'Cross-docking',
      'Picking y packing',
      'Gestión de inventarios'
    ],
    address: {
      street: 'Zona Industrial Valencia',
      city: 'Valencia',
      state: 'Carabobo',
      postalCode: '2001'
    },
    coordinates: {
      lat: 10.1579,
      lng: -67.9967
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Valencia+Carabobo+Venezuela'
  },
  {
    id: 'puerto-cabello',
    slug: 'puerto-cabello',
    name: 'Puerto Cabello',
    title: 'Logística Portuaria Puerto Cabello | Clover Venezuela',
    description: 'Servicios logísticos portuarios en Puerto Cabello. Operaciones de carga marítima, almacenamiento y servicios aduanales en el principal puerto de Venezuela.',
    heroTitle: 'Logística en Puerto Cabello',
    heroDescription: 'Operaciones portuarias en el principal puerto del país. Carga marítima, almacenamiento y servicios aduanales especializados.',
    region: 'Estado Carabobo',
    facilities: [
      'Almacén portuario',
      'Área de consolidación/desconsolidación',
      'Oficina de operaciones aduanales'
    ],
    services: [
      'Carga marítima FCL/LCL',
      'Almacenamiento portuario',
      'Servicios aduanales',
      'Consolidación de carga',
      'Desconsolidación',
      'Nacionalización de mercancías'
    ],
    address: {
      street: 'Zona Portuaria',
      city: 'Puerto Cabello',
      state: 'Carabobo',
      postalCode: '2050'
    },
    coordinates: {
      lat: 10.4731,
      lng: -68.0119
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Puerto+Cabello+Carabobo+Venezuela'
  },
  {
    id: 'maiquetia',
    slug: 'maiquetia',
    name: 'Maiquetía',
    title: 'Logística Aeroportuaria Maiquetía | Clover Venezuela',
    description: 'Servicios logísticos aeroportuarios en Maiquetía. Carga aérea internacional, operaciones aduanales y almacenamiento en el Aeropuerto Internacional Simón Bolívar.',
    heroTitle: 'Logística en Maiquetía',
    heroDescription: 'Operaciones de carga aérea en el principal aeropuerto internacional de Venezuela. Servicios especializados para importación y exportación aérea.',
    region: 'Estado Vargas',
    facilities: [
      'Almacén aeroportuario',
      'Zona de carga aérea',
      'Oficina de aduanas'
    ],
    services: [
      'Carga aérea internacional',
      'Servicios aduanales aeroportuarios',
      'Almacenamiento de carga aérea',
      'Consolidación aérea',
      'Courier y hand carrier',
      'Documentación de exportación'
    ],
    address: {
      street: 'Aeropuerto Internacional Simón Bolívar',
      city: 'Maiquetía',
      state: 'Vargas',
      postalCode: '1160'
    },
    coordinates: {
      lat: 10.6012,
      lng: -66.9912
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Aeropuerto+Maiquetia+Venezuela'
  },
  {
    id: 'barcelona',
    slug: 'barcelona',
    name: 'Barcelona',
    title: 'Logística en Barcelona | Clover Venezuela - Anzoátegui',
    description: 'Centro logístico en Barcelona, Estado Anzoátegui. Almacenamiento y distribución para el oriente venezolano y zona petrolera.',
    heroTitle: 'Logística en Barcelona',
    heroDescription: 'Centro de operaciones para el oriente venezolano. Servicios especializados para la industria petrolera, gasífera y comercial de la región.',
    region: 'Estado Anzoátegui',
    facilities: [
      'Almacén regional',
      'Centro de distribución oriente'
    ],
    services: [
      'Almacenamiento general',
      'Distribución regional',
      'Logística para sector petrolero',
      'Transporte terrestre',
      'Gestión de inventarios'
    ],
    address: {
      street: 'Zona Industrial Barcelona',
      city: 'Barcelona',
      state: 'Anzoátegui',
      postalCode: '6001'
    },
    coordinates: {
      lat: 10.1136,
      lng: -64.6878
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Barcelona+Anzoategui+Venezuela'
  },
  {
    id: 'maracaibo',
    slug: 'maracaibo',
    name: 'Maracaibo',
    title: 'Logística en Maracaibo | Clover Venezuela - Zulia',
    description: 'Centro logístico en Maracaibo, Estado Zulia. Almacenamiento y distribución para el occidente venezolano y conexión con Colombia.',
    heroTitle: 'Logística en Maracaibo',
    heroDescription: 'Centro de operaciones para el occidente venezolano. Cobertura para Zulia, Táchira y conexión con la frontera colombiana.',
    region: 'Estado Zulia',
    facilities: [
      'Almacén regional Zulia',
      'Centro de distribución occidente'
    ],
    services: [
      'Almacenamiento general',
      'Distribución regional',
      'Transporte terrestre',
      'Logística para sector petrolero',
      'Operaciones fronterizas'
    ],
    address: {
      street: 'Zona Industrial Maracaibo',
      city: 'Maracaibo',
      state: 'Zulia',
      postalCode: '4001'
    },
    coordinates: {
      lat: 10.6544,
      lng: -71.6398
    },
    phone: '+58-212-8191152',
    email: 'clover@cloverve.com',
    openingHours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/?q=Maracaibo+Zulia+Venezuela'
  }
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return locationPages.find(loc => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locationPages.map(loc => loc.slug);
}
