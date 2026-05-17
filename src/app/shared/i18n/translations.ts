export type Lang = 'es' | 'ca';

export type TranslationMap = Record<string, string | Record<string, string>>;

export const translations: Record<Lang, Record<string, TranslationMap>> = {
  es: {
    NAV: {
      HOME: 'Inicio',
      OSTEOPATHY: 'Osteopatía',
      SPECIALTIES: 'Especialidades',
      ABOUT: 'Sobre mí',
      CONTACT: 'Contacto',
      BOOK_ONLINE: 'Cita Online'
    },
    HOME: {
      BADGE: 'Clínica de Salud Integral',
      TITLE_1: 'Reequilibramos tu cuerpo,',
      TITLE_2: 'transformamos tu salud.',
      DESCRIPTION: 'Clínica de Osteopatía y Fisioterapia avanzada en el corazón de Barcelona. Especialistas en salud integral con enfoque humano y científico.',
      CTA_PRIMARY: 'Descubre nuestros tratamientos',
      CTA_SECONDARY: 'Solicita tu primera visita',
      SPECIALTIES_TITLE: 'Áreas de especialización',
      SPECIALTIES_GENERAL_TITLE: 'Osteopatía General',
      SPECIALTIES_GENERAL_DESC: 'Tratamiento del sistema musculoesquelético mediante técnicas manuales precisas que restauran la movilidad articular y alivian el dolor crónico.',
      SPECIALTIES_OBSTETRIC_TITLE: 'Osteopatía Obstétrica',
      SPECIALTIES_OBSTETRIC_DESC: 'Acompañamiento durante el embarazo y postparto para aliviar molestias, preparar el cuerpo para el parto y facilitar la recuperación.',
      SPECIALTIES_PEDIATRIC_TITLE: 'Osteopatía Pediátrica',
      SPECIALTIES_PEDIATRIC_DESC: 'Abordaje suave y seguro para bebés y niños, tratando problemas de sueño, cólicos, plagiocefalia y alteraciones del desarrollo.',
      SPECIALTIES_CTA: 'Ver más',
      ABOUT_TITLE: '¿Qué es la Osteopatía?',
      ABOUT_DESC: 'La osteopatía es una terapia manual que aborda el cuerpo como un todo interconectado. A través de técnicas de diagnóstico y tratamiento manual, el osteópata identifica y corrige disfunciones de movilidad en los tejidos del cuerpo, restaurando el equilibrio y permitiendo que los mecanismos de autocuración del organismo funcionen de forma óptima. Sin fármacos ni cirugía, la osteopatía trata la causa de los síntomas, no solo sus manifestaciones.',
      ABOUT_CTA: 'Saber más sobre osteopatía',
      BIO_TITLE: 'Profesional de confianza',
      BIO_TEXT: 'Con más de 15 años de experiencia clínica, nuestro equipo combina el rigor científico con un trato cercano y humano. Cada paciente recibe un plan personalizado basado en una evaluación completa, porque entendemos que cada cuerpo es único.',
      BIO_CTA: 'Conoce al equipo',
      CONTACT_CTA: 'Contacta con nosotros'
    },
    SECTIONS: {
      OSTEOPATHY: 'Osteopatía',
      OSTEOPATHY_DESC: 'Técnicas manuales precisas para restaurar el equilibrio de tu cuerpo desde la raíz.',
      SPECIALTIES: 'Especialidades',
      SPECIALTIES_DESC: 'Fisioterapia avanzada, posturología dinámica y PNI clínica para una salud integral.',
      ABOUT: 'Sobre mí',
      ABOUT_DESC: 'Más de 15 años dedicados a la osteopatía integrativa en Barcelona.',
      CONTACT: 'Contacto',
      CONTACT_DESC: 'Escríbenos o visítanos en el corazón de Barcelona.'
    },
    FOOTER: {
      DESCRIPTION: 'Clínica de Osteopatía y Fisioterapia avanzada en Barcelona. Recupera tu equilibrio, transforma tu salud.',
      SERVICES_TITLE: 'Servicios',
      CONTACT_TITLE: 'Contacto',
      ADDRESS: 'Carrer de Pau Claris 123, 08009 Barcelona',
      PHONE: '+34 934 567 890',
      EMAIL: 'hola@osteomer.com',
      RIGHTS: 'Todos los derechos reservados.'
    }
  },
  ca: {
    NAV: {
      HOME: 'Inici',
      OSTEOPATHY: 'Osteopatia',
      SPECIALTIES: 'Especialitats',
      ABOUT: 'Sobre mi',
      CONTACT: 'Contacte',
      BOOK_ONLINE: 'Cita Online'
    },
    HOME: {
      BADGE: 'Clínica de Salut Integral',
      TITLE_1: 'Reequilibrem el teu cos,',
      TITLE_2: 'transformem la teva salut.',
      DESCRIPTION: 'Clínica d\'Osteopatia i Fisioteràpia avançada al cor de Barcelona. Especialistes en salut integral amb enfoc humà i científic.',
      CTA_PRIMARY: 'Descobreix els nostres tractaments',
      CTA_SECONDARY: 'Sol·licita la teva primera visita',
      SPECIALTIES_TITLE: 'Àrees d\'especialització',
      SPECIALTIES_GENERAL_TITLE: 'Osteopatia General',
      SPECIALTIES_GENERAL_DESC: 'Tractament del sistema musculoesquelètic mitjançant tècniques manuals precises que restauren la mobilitat articular i alleugen el dolor crònic.',
      SPECIALTIES_OBSTETRIC_TITLE: 'Osteopatia Obstètrica',
      SPECIALTIES_OBSTETRIC_DESC: 'Acompanyament durant l\'embaràs i postpart per alleujar molèsties, preparar el cos per al part i facilitar la recuperació.',
      SPECIALTIES_PEDIATRIC_TITLE: 'Osteopatia Pediàtrica',
      SPECIALTIES_PEDIATRIC_DESC: 'Abordatge suau i segur per a nadons i nens, tractant problemes de son, còlics, plagiocefàlia i alteracions del desenvolupament.',
      SPECIALTIES_CTA: 'Veure més',
      ABOUT_TITLE: 'Què és l\'Osteopatia?',
      ABOUT_DESC: 'L\'osteopatia és una teràpia manual que aborda el cos com un tot interconnectat. A través de tècniques de diagnòstic i tractament manual, l\'osteòpata identifica i corregeix disfuncions de mobilitat en els teixits del cos, restaurant l\'equilibri i permetent que els mecanismes d\'autocuració de l\'organisme funcionin de manera òptima. Sense fàrmacs ni cirurgia, l\'osteopatia tracta la causa dels símptomes, no només les seves manifestacions.',
      ABOUT_CTA: 'Saber més sobre osteopatia',
      BIO_TITLE: 'Professional de confiança',
      BIO_TEXT: 'Amb més de 15 anys d\'experiència clínica, el nostre equip combina el rigor científic amb un tracte proper i humà. Cada pacient rep un pla personalitzat basat en una avaluació completa, perquè entenem que cada cos és únic.',
      BIO_CTA: 'Coneix l\'equip',
      CONTACT_CTA: 'Contacta amb nosaltres'
    },
    SECTIONS: {
      OSTEOPATHY: 'Osteopatia',
      OSTEOPATHY_DESC: 'Tècniques manuals precises per restaurar l\'equilibri del teu cos des de l\'arrel.',
      SPECIALTIES: 'Especialitats',
      SPECIALTIES_DESC: 'Fisioteràpia avançada, posturologia dinàmica i PNI clínica per a una salut integral.',
      ABOUT: 'Sobre mi',
      ABOUT_DESC: 'Més de 15 anys dedicats a l\'osteopatia integrativa a Barcelona.',
      CONTACT: 'Contacte',
      CONTACT_DESC: 'Escriu-nos o visita\'ns al cor de Barcelona.'
    },
    FOOTER: {
      DESCRIPTION: 'Clínica d\'Osteopatia i Fisioteràpia avançada a Barcelona. Recupera el teu equilibri, transforma la teva salut.',
      SERVICES_TITLE: 'Serveis',
      CONTACT_TITLE: 'Contacte',
      ADDRESS: 'Carrer de Pau Claris 123, 08009 Barcelona',
      PHONE: '+34 934 567 890',
      EMAIL: 'hola@osteomer.com',
      RIGHTS: 'Tots els drets reservats.'
    }
  }
};

export function getTranslation(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return typeof value === 'string' ? value : key;
}
