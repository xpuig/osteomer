import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OsteomerData, Treatment, TeamMember } from '../models/osteomer-data.model';

@Injectable({
  providedIn: 'root'
})
export class OsteomerDataService {
  private data: OsteomerData = {
    treatments: [
      {
        id: 'osteopatia-estructural',
        title: 'Osteopatía Estructural',
        description: 'Diagnóstico y tratamiento de disfunciones del sistema musculoesquelético mediante técnicas manuales precisas que restauran la movilidad y alivian el dolor.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M8 6h8"/><path d="M6 10h12"/><path d="M7 14h10"/><path d="M8 18h8"/><circle cx="12" cy="2" r="1"/></svg>`,
        category: 'Osteopatía',
        details: [
          'Técnicas de tejidos blandos y fascia',
          'Manipulaciones articulares de alta precisión',
          'Equilibrio pélvico y vertebral',
          'Tratamiento de hernias discales y ciáticas'
        ]
      },
      {
        id: 'osteopatia-craneal',
        title: 'Osteopatía Craneal',
        description: 'Abordaje suave y profundo del sistema craneosacro para liberar tensiones acumuladas y restaurar el equilibrio del sistema nervioso central.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a8 8 0 0 0-8 8c0 2.5 1 4.5 2.5 6L5 20h14l-1.5-3c1.5-1.5 2.5-3.5 2.5-6a8 8 0 0 0-8-8z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/><path d="M10 15.5c.5.5 1.3.8 2 .8s1.5-.3 2-.8"/></svg>`,
        category: 'Osteopatía',
        details: [
          'Equilibrio del ritmo craneosacro',
          'Liberación de membranas intracraneales',
          'ATM y disfunción cervical',
          'Tratamiento de cefaleas y migrañas'
        ]
      },
      {
        id: 'osteopatia-visceral',
        title: 'Osteopatía Visceral',
        description: 'Evaluación y tratamiento de la movilidad y motilidad de los órganos internos para optimizar su función y su relación con el sistema musculoesquelético.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-4 0-7 2.5-7 6 0 2.5 1.2 4.5 3 5.8L7 20h10l-1-3.2c1.8-1.3 3-3.3 3-5.8 0-3.5-3-6-7-6z"/><path d="M9 10c1-.5 2-.5 3 0"/></svg>`,
        category: 'Osteopatía',
        details: [
          'Movilidad y motilidad visceral',
          'Relación víscera-somática',
          'Trastornos digestivos funcionales',
          'Conexión con el sistema fascial'
        ]
      },
      {
        id: 'fisioterapia-avanzada',
        title: 'Fisioterapia Avanzada',
        description: 'Terapia manual de alta precisión combinada con tecnología punta para acelerar la recuperación y prevenir recaídas.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M5 21c1-4 3-7 7-7s6 3 7 7"/><path d="M7 12a5 5 0 0 1 10 0"/></svg>`,
        category: 'Fisioterapia',
        details: [
          'Punción seca y electrólisis percutánea',
          'Electroterapia y ultrasonido',
          'Vendaje neuromuscular y kinesiotape',
          'Ejercicio terapéutico personalizado'
        ]
      },
      {
        id: 'posturologia-dinamica',
        title: 'Posturología Dinámica',
        description: 'Estudio integral de la postura desde un enfoque dinámico para identificar y corregir desequilibrios del sistema tónico-postural.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-9 2 18 2-14 2 13 2-8 4 4"/><path d="M3 20h18"/></svg>`,
        category: 'Posturología',
        details: [
          'Análisis postural computarizado',
          'Corrección de patrones disfuncionales',
          'Reeducación del movimiento consciente',
          'Plantillas posturales y estabilometría'
        ]
      },
      {
        id: 'psiconeuroinmunologia',
        title: 'Psiconeuroinmunología Clínica',
        description: 'Enfoque integrador que conecta la mente, el sistema nervioso y el sistema inmunológico para abordar la salud desde una perspectiva verdaderamente integral.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a4 4 0 0 1 4 4c0 2-1.5 3-4 5-2.5-2-4-3-4-5a4 4 0 0 1 4-4z"/><path d="M19 17c0-3-3-5-7-5s-7 2-7 5"/><circle cx="12" cy="16" r="1"/><circle cx="8" cy="19" r="1"/><circle cx="16" cy="19" r="1"/><path d="M12 14v2"/></svg>`,
        category: 'PNI',
        details: [
          'Eje mente-cuerpo y regulación emocional',
          'Nutrición clínica y suplementación',
          'Gestión del estrés y sueño reparador',
          'Protocolos personalizados de salud integral'
        ]
      }
    ],
    team: [
      {
        id: 'marc-osteomer',
        name: 'Marc Osteomer',
        title: 'Osteópata D.O. & Fundador',
        bio: 'Más de 15 años de experiencia en osteopatía integrativa. Formado en osteopatía estructural, craneal y visceral por la Escuela de Osteopatía de Madrid y el College of Osteopaths de Londres. Especializado en PNI por la Universidad de Barcelona.',
        specialties: ['Osteopatía Estructural', 'Osteopatía Craneal', 'PNI Clínica']
      },
      {
        id: 'anna-rovira',
        name: 'Anna Rovira',
        title: 'Fisioterapeuta Avanzada',
        bio: 'Fisioterapeuta colegiada con especialización en terapia manual ortopédica y punción seca. Experta en rehabilitación de lesiones deportivas y en el abordaje del suelo pélvico.',
        specialties: ['Fisioterapia Avanzada', 'Punción Seca', 'Suelo Pélvico']
      },
      {
        id: 'carles-vidal',
        name: 'Carles Vidal',
        title: 'Osteópata & Posturólogo',
        bio: 'Osteópata especializado en posturología clínica y análisis del movimiento. Combina la osteopatía estructural con la valoración postural computarizada para ofrecer tratamientos integrales y personalizados.',
        specialties: ['Posturología Dinámica', 'Osteopatía Estructural', 'Análisis del Movimiento']
      }
    ]
  };

  getData(): Observable<OsteomerData> {
    return of(this.data);
  }

  getTreatments(): Observable<Treatment[]> {
    return of(this.data.treatments);
  }

  getTeam(): Observable<TeamMember[]> {
    return of(this.data.team);
  }

  getTreatmentById(id: string): Observable<Treatment | undefined> {
    return of(this.data.treatments.find(t => t.id === id));
  }

  getTeamMemberById(id: string): Observable<TeamMember | undefined> {
    return of(this.data.team.find(m => m.id === id));
  }
}
