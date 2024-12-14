import { Musician } from './musician.model';

export function loadMusicians(): Promise<Musician[]> {
  return fetch('/musicians.json').then((res) => res.json());
}
