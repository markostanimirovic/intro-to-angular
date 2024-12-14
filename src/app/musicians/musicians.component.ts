import { Component, resource } from '@angular/core';
import { loadMusicians } from './musicians.api';
import { MusicianCardComponent } from './musician-card.component';

@Component({
  selector: 'app-musicians',
  imports: [MusicianCardComponent],
  template: `
    <h1>Musicians</h1>

    @if (musicians.isLoading()) {
      <p>Loading...</p>
    }

    <section class="card-container">
      @for (musician of musicians.value(); track musician.id) {
        <app-musician-card [musician]="musician" />
      }
    </section>
  `,
})
export class MusiciansComponent {
  readonly musicians = resource({ loader: loadMusicians });
}
