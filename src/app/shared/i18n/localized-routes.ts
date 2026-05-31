import { Lang } from './translations';

export type PageKey =
  | 'home'
  | 'osteopatia'
  | 'especialidades'
  | 'sobre-mi'
  | 'contacto'
  | 'cita-online';

export const SUPPORTED_LANGS: Lang[] = ['ca', 'es'];

export const ROUTE_SEGMENTS: Record<Lang, Record<PageKey, string>> = {
  ca: {
    home: '',
    osteopatia: 'osteopatia',
    especialidades: 'especialitats',
    'sobre-mi': 'sobre-mi',
    contacto: 'contacte',
    'cita-online': 'cita-online'
  },
  es: {
    home: '',
    osteopatia: 'osteopatia',
    especialidades: 'especialidades',
    'sobre-mi': 'sobre-mi',
    contacto: 'contacto',
    'cita-online': 'cita-online'
  }
};

export function buildLocalizedPath(lang: Lang, page: PageKey): string {
  const segment = ROUTE_SEGMENTS[lang][page];
  return segment ? `/${lang}/${segment}` : `/${lang}`;
}

export function parseLocalizedUrl(url: string): { lang: Lang; page: PageKey } | null {
  const path = url.split('?')[0].split('#')[0];
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { lang: 'ca', page: 'home' };
  }

  const lang = segments[0];
  if (lang !== 'ca' && lang !== 'es') {
    return null;
  }

  const pageSegment = segments[1] ?? '';
  const page = pageKeyFromSegment(lang, pageSegment);
  if (!page) {
    return null;
  }

  return { lang, page };
}

export function pageKeyFromSegment(lang: Lang, segment: string): PageKey | null {
  if (!segment) {
    return 'home';
  }

  for (const [page, pageSegment] of Object.entries(ROUTE_SEGMENTS[lang]) as [PageKey, string][]) {
    if (pageSegment === segment) {
      return page;
    }
  }

  return null;
}
