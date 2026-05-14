import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pni',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-osteomer-gray">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span class="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
              Psiconeuroinmunología
            </span>
            <h2 class="text-3xl font-black tracking-[-0.02em] leading-[1.15] md:text-4xl">
              La ciencia que conecta<br>
              <span class="text-black/40">mente y cuerpo</span>
            </h2>
            <p class="mt-6 text-base leading-relaxed text-black/50">
              La Psiconeuroinmunología (PNI) es el estudio de cómo tus pensamientos, emociones y sistema nervioso
              influyen directamente en tu sistema inmunológico y tu salud general. No tratamos síntomas aislados:
              entendemos tu historia para encontrar el origen.
            </p>
          </div>

          <div class="space-y-8">
            <div class="border-l-2 border-black/10 pl-6">
              <h3 class="text-lg font-extrabold tracking-[-0.02em]">Mente</h3>
              <p class="mt-2 text-sm leading-relaxed text-black/50">
                El estrés crónico y las emociones no gestionadas alteran tu fisiología. Trabajamos la regulación emocional como pilar fundamental.
              </p>
            </div>
            <div class="border-l-2 border-black/10 pl-6">
              <h3 class="text-lg font-extrabold tracking-[-0.02em]">Sistema Nervioso</h3>
              <p class="mt-2 text-sm leading-relaxed text-black/50">
                Tu sistema nervioso autónomo gobierna cada célula de tu cuerpo. Restauramos su equilibrio para optimizar tu salud.
              </p>
            </div>
            <div class="border-l-2 border-black/10 pl-6">
              <h3 class="text-lg font-extrabold tracking-[-0.02em]">Sistema Inmunológico</h3>
              <p class="mt-2 text-sm leading-relaxed text-black/50">
                Un sistema inmune regulado es tu mejor defensa. La nutrición clínica y el estilo de vida son nuestras herramientas.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 rounded border border-black/10 bg-white p-8 md:p-12">
          <div class="grid gap-8 md:grid-cols-3">
            <div class="text-center">
              <span class="block text-4xl font-black tracking-[-0.02em] text-black/15">01</span>
              <h4 class="mt-3 text-sm font-bold">Evaluación integral</h4>
              <p class="mt-2 text-xs leading-relaxed text-black/40">Historia clínica detallada y análisis de hábitos de vida</p>
            </div>
            <div class="text-center">
              <span class="block text-4xl font-black tracking-[-0.02em] text-black/15">02</span>
              <h4 class="mt-3 text-sm font-bold">Plan personalizado</h4>
              <p class="mt-2 text-xs leading-relaxed text-black/40">Protocolo adaptado a tus necesidades específicas</p>
            </div>
            <div class="text-center">
              <span class="block text-4xl font-black tracking-[-0.02em] text-black/15">03</span>
              <h4 class="mt-3 text-sm font-bold">Acompañamiento</h4>
              <p class="mt-2 text-xs leading-relaxed text-black/40">Seguimiento continuo para asegurar resultados duraderos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class PniComponent {}
