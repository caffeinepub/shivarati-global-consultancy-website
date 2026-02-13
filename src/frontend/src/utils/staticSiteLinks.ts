/**
 * Utilities for generating sub-path-safe relative links to the site's multi-entry *.html pages.
 * This ensures navigation works when the site is hosted at the domain root or under a sub-path.
 */

/**
 * Generate a relative link to a static HTML page.
 * @param page - The page name (e.g., 'about', 'contact')
 * @param hash - Optional hash fragment (e.g., '#students')
 * @returns Relative path to the HTML page
 */
export function getPageLink(page: string, hash?: string): string {
  const htmlPage = page.endsWith('.html') ? page : `${page}.html`;
  return hash ? `${htmlPage}${hash}` : htmlPage;
}

/**
 * Navigate programmatically to a static HTML page.
 * @param page - The page name (e.g., 'about', 'contact')
 * @param hash - Optional hash fragment
 */
export function navigateToPage(page: string, hash?: string): void {
  const link = getPageLink(page, hash);
  window.location.assign(link);
}

/**
 * Get links for all main pages.
 */
export const pageLinks = {
  home: getPageLink('index'),
  about: getPageLink('about'),
  productOfferings: getPageLink('product-offerings'),
  gdpr: getPageLink('gdpr'),
  whyChooseUs: getPageLink('why-choose-us'),
  contact: getPageLink('contact'),
  disclaimer: getPageLink('disclaimer'),
};
