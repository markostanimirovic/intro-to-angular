import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>

    <div class="actions">
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: `
    p {
      font-size: 2rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .actions {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  `,
})
export class CounterComponent {
  readonly count = signal(0);

  increment(): void {
    this.count.update((count) => count + 1);
  }

  decrement(): void {
    this.count.update((count) => count - 1);
  }
}
