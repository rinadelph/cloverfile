import { redirect, type Handle } from '@sveltejs/kit';

/**
 * Server hooks for handling redirects from old URLs
 * Ensures compatibility with original cloverve.com URLs
 */

const redirects: Record<string, string> = {
  // Service page redirects
  '/logistica-integral': '/logistica-integral-venezuela',
  '/impots': '/impot',

  // Legacy blog URLs
  '/index.php/blog': '/blog',
  '/index.php/casos-de-exito': '/casos-de-exito',

  // Common typos/variations
  '/servicios': '/#servicios',
  '/services': '/#servicios',
  '/contact': '/contacto',
  '/about': '/nosotros',
  '/about-us': '/nosotros',
  '/terms': '/terms-of-services',
  '/terminos': '/terms-of-services',
  '/privacy': '/privacy-policy',
  '/privacidad': '/privacy-policy',

  // CloverPack variations
  '/clover-pack': '/cloverpack',
  '/pack': '/cloverpack',
  '/embalaje': '/cloverpack',

  // Service variations
  '/aduana-venezuela': '/aduana',
  '/customs': '/aduana',
  '/warehouse': '/almacen',
  '/storage': '/almacen',
  '/almacenamiento': '/almacen',
  '/transporte': '/logistica-transporte-terrestre',
  '/transport': '/logistica-transporte-terrestre',
  '/ground-transport': '/logistica-transporte-terrestre',
  '/carga-internacional': '/impot',
  '/international-cargo': '/impot',
  '/import-export': '/impot',
};

export const handle: Handle = async ({ event, resolve }) => {
  const path = event.url.pathname;

  // Check for exact redirects
  if (redirects[path]) {
    throw redirect(301, redirects[path]);
  }

  // Handle trailing slash redirects (remove trailing slash)
  if (path.length > 1 && path.endsWith('/')) {
    throw redirect(301, path.slice(0, -1));
  }

  // Continue with normal request handling
  const response = await resolve(event);

  return response;
};
