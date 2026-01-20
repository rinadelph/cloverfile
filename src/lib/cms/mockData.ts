/**
 * Mock data for articles and case studies
 * This will be replaced by the actual CMS implementation
 */

import type { Article, CaseStudy, BlogPost, Story } from './types';

export const mockCaseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'optimizacion-cadena-suministro-retail',
    title: {
      es: 'Optimizacion de Cadena de Suministro para Retail Nacional',
      en: 'Supply Chain Optimization for National Retail'
    },
    excerpt: {
      es: 'Como ayudamos a una cadena de retail a reducir costos logisticos en un 35% mediante la implementacion de soluciones 3PL personalizadas.',
      en: 'How we helped a retail chain reduce logistics costs by 35% through customized 3PL solutions.'
    },
    content: {
      es: `## El Desafio

Una importante cadena de retail con mas de 50 tiendas en Venezuela enfrentaba problemas criticos en su cadena de suministro: tiempos de entrega inconsistentes, altos costos de almacenamiento y falta de visibilidad en tiempo real de su inventario.

## Nuestra Solucion

Implementamos una solucion integral que incluyo:

- **Centralizacion del almacenamiento**: Consolidamos sus operaciones en nuestros almacenes estrategicamente ubicados
- **Sistema WMS personalizado**: Integramos nuestra plataforma de gestion de almacenes con sus sistemas existentes
- **Rutas optimizadas**: Diseñamos rutas de distribucion eficientes para todas sus tiendas
- **Monitoreo en tiempo real**: Implementamos Clover-Track para seguimiento de envios

## Los Resultados

Despues de 6 meses de implementacion:

- **35%** de reduccion en costos logisticos
- **98%** de tasa de entrega a tiempo
- **40%** de mejora en rotacion de inventario
- **24 horas** tiempo promedio de reposicion`,
      en: `## The Challenge

A major retail chain with over 50 stores in Venezuela faced critical supply chain issues: inconsistent delivery times, high storage costs, and lack of real-time inventory visibility.

## Our Solution

We implemented a comprehensive solution including:

- **Storage centralization**: Consolidated operations in our strategically located warehouses
- **Customized WMS**: Integrated our warehouse management platform with their existing systems
- **Optimized routes**: Designed efficient distribution routes for all stores
- **Real-time monitoring**: Implemented Clover-Track for shipment tracking

## The Results

After 6 months of implementation:

- **35%** reduction in logistics costs
- **98%** on-time delivery rate
- **40%** improvement in inventory turnover
- **24 hours** average replenishment time`
    },
    featuredImage: '/images/1.jpg',
    images: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'],
    category: 'case-study',
    tags: ['retail', 'logistica-3pl', 'almacenamiento'],
    author: 'Equipo Clover',
    publishedAt: '2024-11-15T10:00:00Z',
    updatedAt: '2024-11-15T10:00:00Z',
    published: true,
    client: 'Cadena Retail Nacional',
    industry: 'Retail',
    results: {
      es: '35% reduccion de costos, 98% entregas a tiempo',
      en: '35% cost reduction, 98% on-time deliveries'
    },
    duration: '6 meses',
    services: ['Logistica Integral', 'Almacen', 'Transporte Terrestre']
  },
  {
    id: 'cs-2',
    slug: 'logistica-farmaceutica-cadena-frio',
    title: {
      es: 'Logistica Farmaceutica con Cadena de Frio',
      en: 'Pharmaceutical Logistics with Cold Chain'
    },
    excerpt: {
      es: 'Implementacion de solucion de cadena de frio para distribucion de medicamentos en todo el territorio nacional.',
      en: 'Implementation of cold chain solution for nationwide pharmaceutical distribution.'
    },
    content: {
      es: `## El Desafio

Una empresa farmaceutica multinacional requeria un socio logistico capaz de mantener la integridad de la cadena de frio para productos sensibles a la temperatura, cumpliendo con todas las regulaciones del sector.

## Nuestra Solucion

Desarrollamos una solucion especializada:

- **Almacenamiento refrigerado**: Areas dedicadas con control de temperatura 2-8°C
- **Transporte refrigerado**: Flota con unidades de frio monitoreadas
- **Trazabilidad completa**: Sistema de registro de temperatura en cada punto
- **Certificaciones**: Cumplimiento de normas BPA y GDP

## Los Resultados

- **100%** de envios con cadena de frio intacta
- **Zero** perdidas por ruptura de cadena de frio
- **99.5%** de disponibilidad de producto
- Certificacion como operador logistico farmaceutico`,
      en: `## The Challenge

A multinational pharmaceutical company required a logistics partner capable of maintaining cold chain integrity for temperature-sensitive products while complying with all industry regulations.

## Our Solution

We developed a specialized solution:

- **Refrigerated storage**: Dedicated areas with 2-8°C temperature control
- **Refrigerated transport**: Fleet with monitored cooling units
- **Complete traceability**: Temperature recording system at every point
- **Certifications**: BPA and GDP compliance

## The Results

- **100%** of shipments with intact cold chain
- **Zero** losses due to cold chain breach
- **99.5%** product availability
- Certification as pharmaceutical logistics operator`
    },
    featuredImage: '/images/2.jpg',
    images: ['/images/2.jpg', '/images/3.jpg'],
    category: 'case-study',
    tags: ['farmaceutico', 'cadena-frio', 'almacenamiento'],
    author: 'Equipo Clover',
    publishedAt: '2024-10-20T10:00:00Z',
    updatedAt: '2024-10-20T10:00:00Z',
    published: true,
    client: 'Farmaceutica Internacional',
    industry: 'Farmaceutico',
    results: {
      es: '100% integridad de cadena de frio, cero perdidas',
      en: '100% cold chain integrity, zero losses'
    },
    duration: '12 meses',
    services: ['Almacen', 'Transporte Terrestre', 'Logistica Integral']
  },
  {
    id: 'cs-3',
    slug: 'expansion-internacional-manufacturera',
    title: {
      es: 'Expansion Internacional de Empresa Manufacturera',
      en: 'International Expansion for Manufacturing Company'
    },
    excerpt: {
      es: 'Gestion integral de importaciones y distribucion nacional para empresa en proceso de expansion.',
      en: 'Comprehensive import management and national distribution for expanding company.'
    },
    content: {
      es: `## El Desafio

Una empresa manufacturera venezolana en crecimiento necesitaba escalar sus operaciones de importacion de materias primas mientras expandia su distribucion nacional.

## Nuestra Solucion

Creamos un programa integral:

- **Agenciamiento aduanal**: Gestion completa de importaciones
- **Consolidacion de carga**: Optimizacion de envios internacionales
- **Almacenamiento estrategico**: Centros de distribucion regionales
- **Distribucion nacional**: Cobertura en todo el territorio

## Los Resultados

- **50%** de reduccion en tiempos de nacionalizacion
- **25%** de ahorro en costos de importacion
- Expansion a 12 nuevas ciudades
- Tiempo de entrega promedio de 48 horas a nivel nacional`,
      en: `## The Challenge

A growing Venezuelan manufacturing company needed to scale its raw material import operations while expanding its national distribution.

## Our Solution

We created a comprehensive program:

- **Customs agency**: Complete import management
- **Cargo consolidation**: International shipment optimization
- **Strategic storage**: Regional distribution centers
- **National distribution**: Coverage across the entire territory

## The Results

- **50%** reduction in nationalization times
- **25%** savings in import costs
- Expansion to 12 new cities
- Average 48-hour delivery time nationwide`
    },
    featuredImage: '/images/3.jpg',
    images: ['/images/3.jpg', '/images/1.jpg'],
    category: 'case-study',
    tags: ['manufactura', 'importacion', 'aduana', 'distribucion'],
    author: 'Equipo Clover',
    publishedAt: '2024-09-10T10:00:00Z',
    updatedAt: '2024-09-10T10:00:00Z',
    published: true,
    client: 'Manufacturera Venezolana',
    industry: 'Manufactura',
    results: {
      es: '50% menos tiempo de nacionalizacion, 25% ahorro',
      en: '50% faster nationalization, 25% savings'
    },
    duration: '8 meses',
    services: ['Aduana', 'Carga Internacional', 'Almacen', 'Transporte Terrestre']
  },
  {
    id: 'cs-4',
    slug: 'ecommerce-fulfillment-startup',
    title: {
      es: 'Fulfillment para Startup de E-commerce',
      en: 'Fulfillment for E-commerce Startup'
    },
    excerpt: {
      es: 'Solucion de fulfillment escalable para startup de comercio electronico con crecimiento explosivo.',
      en: 'Scalable fulfillment solution for fast-growing e-commerce startup.'
    },
    content: {
      es: `## El Desafio

Una startup de e-commerce experimentaba un crecimiento del 200% anual y necesitaba una solucion de fulfillment que pudiera escalar rapidamente sin comprometer la calidad del servicio.

## Nuestra Solucion

Implementamos un modelo de fulfillment flexible:

- **Integracion tecnologica**: API con su plataforma de e-commerce
- **Picking optimizado**: Sistema de preparacion de pedidos eficiente
- **Empaque personalizado**: Branding de la marca en cada envio
- **Entregas express**: Same-day delivery en Caracas

## Los Resultados

- Capacidad de procesar **500+ pedidos diarios**
- **4 horas** de tiempo promedio de preparacion
- **99%** de precision en pedidos
- Escalamiento sin inversiones en infraestructura propia`,
      en: `## The Challenge

An e-commerce startup experiencing 200% annual growth needed a fulfillment solution that could scale quickly without compromising service quality.

## Our Solution

We implemented a flexible fulfillment model:

- **Technology integration**: API with their e-commerce platform
- **Optimized picking**: Efficient order preparation system
- **Custom packaging**: Brand packaging for each shipment
- **Express deliveries**: Same-day delivery in Caracas

## The Results

- Capacity to process **500+ daily orders**
- **4 hours** average preparation time
- **99%** order accuracy
- Scaling without own infrastructure investments`
    },
    featuredImage: '/images/1.jpg',
    images: ['/images/1.jpg', '/images/2.jpg'],
    category: 'case-study',
    tags: ['ecommerce', 'fulfillment', 'startup', 'tecnologia'],
    author: 'Equipo Clover',
    publishedAt: '2024-08-05T10:00:00Z',
    updatedAt: '2024-08-05T10:00:00Z',
    published: true,
    client: 'E-commerce Startup',
    industry: 'E-commerce',
    results: {
      es: '500+ pedidos diarios, 99% precision',
      en: '500+ daily orders, 99% accuracy'
    },
    duration: '4 meses',
    services: ['Almacen', 'Logistica Integral', 'Transporte Terrestre']
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'tendencias-logistica-2024',
    title: {
      es: 'Tendencias de Logistica para 2024: Lo que Debes Saber',
      en: 'Logistics Trends for 2024: What You Need to Know'
    },
    excerpt: {
      es: 'Descubre las principales tendencias que estan transformando la industria logistica este año.',
      en: 'Discover the main trends transforming the logistics industry this year.'
    },
    content: {
      es: `La industria logistica esta en constante evolucion, y 2024 trae consigo cambios significativos que las empresas deben conocer para mantenerse competitivas.

## 1. Automatizacion e Inteligencia Artificial

La automatizacion de procesos logisticos ya no es el futuro, es el presente. Desde robots en almacenes hasta sistemas de prediccion de demanda basados en IA, las empresas que adopten estas tecnologias tendran una ventaja competitiva significativa.

## 2. Sostenibilidad y Logistica Verde

Los consumidores demandan cada vez mas practicas sostenibles. Las empresas logisticas estan invirtiendo en:
- Flotas electricas
- Empaques reciclables
- Optimizacion de rutas para reducir emisiones

## 3. Omnicanalidad

La integracion perfecta entre canales online y offline requiere una logistica flexible capaz de adaptarse a multiples modelos de entrega.

## 4. Visibilidad en Tiempo Real

Los clientes esperan saber exactamente donde estan sus envios en todo momento. Las plataformas de tracking avanzadas son ahora un estandar.

## Conclusion

En Clover, estamos comprometidos con estar a la vanguardia de estas tendencias, ofreciendo a nuestros clientes las soluciones logisticas mas avanzadas del mercado.`,
      en: `The logistics industry is constantly evolving, and 2024 brings significant changes that companies must understand to stay competitive.

## 1. Automation and Artificial Intelligence

Logistics process automation is no longer the future, it's the present. From warehouse robots to AI-based demand prediction systems, companies adopting these technologies will have a significant competitive advantage.

## 2. Sustainability and Green Logistics

Consumers increasingly demand sustainable practices. Logistics companies are investing in:
- Electric fleets
- Recyclable packaging
- Route optimization to reduce emissions

## 3. Omnichannel

Perfect integration between online and offline channels requires flexible logistics capable of adapting to multiple delivery models.

## 4. Real-Time Visibility

Customers expect to know exactly where their shipments are at all times. Advanced tracking platforms are now standard.

## Conclusion

At Clover, we are committed to being at the forefront of these trends, offering our clients the most advanced logistics solutions in the market.`
    },
    featuredImage: '/images/2.jpg',
    images: [],
    category: 'blog',
    tags: ['tendencias', 'logistica', 'tecnologia', 'innovacion'],
    author: 'Maria Rodriguez',
    publishedAt: '2024-12-01T10:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    published: true,
    readTime: 5
  },
  {
    id: 'blog-2',
    slug: 'como-elegir-operador-logistico',
    title: {
      es: 'Como Elegir el Operador Logistico Ideal para tu Empresa',
      en: 'How to Choose the Ideal Logistics Operator for Your Company'
    },
    excerpt: {
      es: 'Guia completa para seleccionar el socio logistico que mejor se adapte a las necesidades de tu negocio.',
      en: 'Complete guide to selecting the logistics partner that best fits your business needs.'
    },
    content: {
      es: `Elegir el operador logistico correcto puede marcar la diferencia entre el exito y el fracaso de tu negocio. Aqui te presentamos los factores clave a considerar.

## 1. Experiencia en tu Industria

No todos los operadores logisticos son iguales. Busca uno que tenga experiencia especifica en tu sector:
- Manejo de productos especiales
- Conocimiento de regulaciones
- Referencias de clientes similares

## 2. Infraestructura y Cobertura

Evalua si el operador cuenta con:
- Almacenes en ubicaciones estrategicas
- Flota propia o alianzas confiables
- Cobertura geografica adecuada

## 3. Tecnologia

En la era digital, la tecnologia es fundamental:
- Sistemas de gestion de almacenes (WMS)
- Plataformas de tracking
- Integraciones con tu ERP

## 4. Flexibilidad y Escalabilidad

Tu negocio crecera (esperamos), y tu operador logistico debe poder crecer contigo.

## 5. Relacion Precio-Valor

No siempre lo mas barato es lo mejor. Evalua el valor total que recibes por tu inversion.

## En Clover

Ofrecemos mas de 55 años de experiencia, infraestructura de primer nivel y tecnologia avanzada para ser tu aliado logistico ideal.`,
      en: `Choosing the right logistics operator can make the difference between success and failure for your business. Here are the key factors to consider.

## 1. Industry Experience

Not all logistics operators are the same. Look for one with specific experience in your sector:
- Handling of special products
- Knowledge of regulations
- References from similar clients

## 2. Infrastructure and Coverage

Evaluate if the operator has:
- Warehouses in strategic locations
- Own fleet or reliable partnerships
- Adequate geographic coverage

## 3. Technology

In the digital age, technology is fundamental:
- Warehouse management systems (WMS)
- Tracking platforms
- Integrations with your ERP

## 4. Flexibility and Scalability

Your business will grow (hopefully), and your logistics operator must be able to grow with you.

## 5. Price-Value Relationship

The cheapest is not always the best. Evaluate the total value you receive for your investment.

## At Clover

We offer over 55 years of experience, first-class infrastructure, and advanced technology to be your ideal logistics partner.`
    },
    featuredImage: '/images/3.jpg',
    images: [],
    category: 'blog',
    tags: ['consejos', 'logistica', 'negocio', 'seleccion'],
    author: 'Carlos Mendez',
    publishedAt: '2024-11-20T10:00:00Z',
    updatedAt: '2024-11-20T10:00:00Z',
    published: true,
    readTime: 7
  },
  {
    id: 'blog-3',
    slug: 'beneficios-tercerizar-logistica',
    title: {
      es: 'Los 7 Beneficios de Tercerizar tu Logistica',
      en: 'The 7 Benefits of Outsourcing Your Logistics'
    },
    excerpt: {
      es: 'Conoce las ventajas de confiar tu operacion logistica a expertos y como puede impulsar tu negocio.',
      en: 'Learn the advantages of entrusting your logistics operation to experts and how it can boost your business.'
    },
    content: {
      es: `Tercerizar la logistica (3PL) es una decision estrategica que puede transformar tu negocio. Aqui los principales beneficios:

## 1. Reduccion de Costos

Al tercerizar, conviertes costos fijos en variables y aprovechas economias de escala que un operador especializado puede ofrecer.

## 2. Enfoque en el Core Business

Delega las operaciones logisticas y concentra tus recursos en lo que mejor sabes hacer: tu producto o servicio.

## 3. Acceso a Tecnologia Avanzada

Los operadores 3PL invierten constantemente en tecnologia que seria muy costosa adquirir individualmente.

## 4. Flexibilidad Operativa

Escala tus operaciones hacia arriba o hacia abajo segun la demanda sin preocuparte por la infraestructura.

## 5. Experiencia y Conocimiento

Beneficiate de años de experiencia y mejores practicas de la industria.

## 6. Reduccion de Riesgos

Comparte los riesgos operativos con tu socio logistico.

## 7. Mejora del Servicio al Cliente

Un operador especializado puede ofrecer tiempos de entrega mas cortos y mayor confiabilidad.`,
      en: `Outsourcing logistics (3PL) is a strategic decision that can transform your business. Here are the main benefits:

## 1. Cost Reduction

By outsourcing, you convert fixed costs to variable and take advantage of economies of scale that a specialized operator can offer.

## 2. Focus on Core Business

Delegate logistics operations and concentrate your resources on what you do best: your product or service.

## 3. Access to Advanced Technology

3PL operators constantly invest in technology that would be too expensive to acquire individually.

## 4. Operational Flexibility

Scale your operations up or down according to demand without worrying about infrastructure.

## 5. Experience and Knowledge

Benefit from years of experience and industry best practices.

## 6. Risk Reduction

Share operational risks with your logistics partner.

## 7. Customer Service Improvement

A specialized operator can offer shorter delivery times and greater reliability.`
    },
    featuredImage: '/images/1.jpg',
    images: [],
    category: 'blog',
    tags: ['3pl', 'tercerizacion', 'logistica', 'beneficios'],
    author: 'Ana Garcia',
    publishedAt: '2024-11-05T10:00:00Z',
    updatedAt: '2024-11-05T10:00:00Z',
    published: true,
    readTime: 6
  }
];

export const mockStories: Story[] = [
  {
    id: 'story-1',
    slug: 'clover-celebra-60-aniversario',
    title: {
      es: 'Clover Celebra su 60 Aniversario con Expansion de Servicios',
      en: 'Clover Celebrates 60th Anniversary with Service Expansion'
    },
    excerpt: {
      es: 'En nuestro aniversario 60, anunciamos nuevas inversiones y expansion de nuestra capacidad operativa.',
      en: 'On our 60th anniversary, we announce new investments and expansion of our operational capacity.'
    },
    content: {
      es: `Este año marca un hito importante para Clover Internacional: 60 años sirviendo a Venezuela con soluciones logisticas de excelencia.

## Nuestra Historia

Desde 1964, hemos crecido junto con nuestros clientes, adaptandonos a los cambios del mercado y siempre innovando para ofrecer el mejor servicio.

## Nuevas Inversiones

Para celebrar este aniversario, anunciamos:

- Ampliacion de 5,000 m² de capacidad de almacenamiento
- Nueva flota de vehiculos con tecnologia de ultima generacion
- Expansion de nuestros servicios de cadena de frio

## Gracias a Nuestros Clientes

Nada de esto seria posible sin la confianza de quienes nos han elegido como su aliado logistico. Seguiremos trabajando para superar sus expectativas.`,
      en: `This year marks an important milestone for Clover Internacional: 60 years serving Venezuela with excellent logistics solutions.

## Our History

Since 1964, we have grown alongside our clients, adapting to market changes and always innovating to offer the best service.

## New Investments

To celebrate this anniversary, we announce:

- 5,000 m² expansion of storage capacity
- New fleet of vehicles with latest generation technology
- Expansion of our cold chain services

## Thanks to Our Clients

None of this would be possible without the trust of those who have chosen us as their logistics partner. We will continue working to exceed their expectations.`
    },
    featuredImage: '/images/2.jpg',
    images: [],
    category: 'news',
    tags: ['noticias', 'empresa', 'aniversario'],
    author: 'Comunicaciones Clover',
    publishedAt: '2024-12-10T10:00:00Z',
    updatedAt: '2024-12-10T10:00:00Z',
    published: true,
    highlight: true
  },
  {
    id: 'story-2',
    slug: 'nueva-certificacion-iso',
    title: {
      es: 'Clover Obtiene Certificacion ISO 9001:2015',
      en: 'Clover Obtains ISO 9001:2015 Certification'
    },
    excerpt: {
      es: 'Reafirmamos nuestro compromiso con la calidad obteniendo la certificacion ISO 9001:2015.',
      en: 'We reaffirm our commitment to quality by obtaining ISO 9001:2015 certification.'
    },
    content: {
      es: `Nos enorgullece anunciar que hemos obtenido la certificacion ISO 9001:2015 para nuestros sistemas de gestion de calidad.

## Que Significa Esta Certificacion

La ISO 9001:2015 es el estandar internacional para sistemas de gestion de calidad. Esta certificacion demuestra nuestro compromiso con:

- Mejora continua de procesos
- Satisfaccion del cliente
- Gestion eficiente de recursos
- Cumplimiento de requisitos legales

## Beneficios para Nuestros Clientes

Esta certificacion se traduce en:
- Mayor confiabilidad en nuestros servicios
- Procesos estandarizados y documentados
- Trazabilidad completa de operaciones
- Compromiso medible con la calidad`,
      en: `We are proud to announce that we have obtained ISO 9001:2015 certification for our quality management systems.

## What This Certification Means

ISO 9001:2015 is the international standard for quality management systems. This certification demonstrates our commitment to:

- Continuous process improvement
- Customer satisfaction
- Efficient resource management
- Compliance with legal requirements

## Benefits for Our Clients

This certification translates to:
- Greater reliability in our services
- Standardized and documented processes
- Complete operation traceability
- Measurable commitment to quality`
    },
    featuredImage: '/images/3.jpg',
    images: [],
    category: 'news',
    tags: ['certificacion', 'calidad', 'iso'],
    author: 'Comunicaciones Clover',
    publishedAt: '2024-10-01T10:00:00Z',
    updatedAt: '2024-10-01T10:00:00Z',
    published: true,
    highlight: false
  }
];

export const mockArticles: Article[] = [
  ...mockCaseStudies,
  ...mockBlogPosts,
  ...mockStories
];
