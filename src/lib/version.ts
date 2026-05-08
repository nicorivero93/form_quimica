// Versión del bundle inyectada por Vite en build time.
// Formato: YYYY-MM-DD-{git-short-sha}. Fallback: 'dev'.
// Se muestra en el footer global para identificar qué deploy está corriendo
// cada cliente cuando reporta un bug.

declare const __APP_VERSION__: string;

export const APP_VERSION: string =
  typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'dev';
