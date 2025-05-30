import { Component } from '@angular/core';

/**
 * Материалы на главной
 */
@Component({
  selector: 'app-home-material',
  standalone: true,
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  /**
   * Мок-материалы
   */
  materials = [
    { title: 'Учение Будды', type: 'статья', link: '#' },
    { title: 'Медитация для начинающих', type: 'видео', link: '#' },
    { title: 'История хурула', type: 'аудио', link: '#' }
  ];
}
