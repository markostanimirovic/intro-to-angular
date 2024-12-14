import { Component, input } from '@angular/core';
import { Musician } from './musician.model';

@Component({
  selector: 'app-musician-card',
  template: `
    <article class="card">
      <img [src]="musician().photo" [alt]="musician().name + ' Photo'" />
      <h3>{{ musician().name }}</h3>
    </article>
  `,
})
export class MusicianCardComponent {
  readonly musician = input.required<Musician>();
}
