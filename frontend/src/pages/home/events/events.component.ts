import { Component } from '@angular/core';

/**
 * События на главной
 */
@Component({
  selector: 'app-home-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  /**
   * Мок-события
   */
  events = [
    { name: 'Медитация', date: '2024-06-05', place: 'Большой зал' },
    { name: 'Встреча с ламой', date: '2024-06-12', place: 'Малый зал' },
    { name: 'Благотворительный обед', date: '2024-06-20', place: 'Столовая' }
  ];
}
