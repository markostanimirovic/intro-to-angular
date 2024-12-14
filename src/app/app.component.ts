import { Component } from '@angular/core';
import { MusiciansComponent } from './musicians/musicians.component';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  imports: [MusiciansComponent, CounterComponent],
  template: `
    <header>Intro to Angular</header>

    <main>
      <app-musicians />
      <app-counter />
    </main>

    <footer>2024 | DevFest Belgrade</footer>
  `,
})
export class AppComponent {}
