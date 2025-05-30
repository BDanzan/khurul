import { Component } from '@angular/core';

/**
 * Новости на главной
 */
@Component({
  selector: 'app-home-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  /**
   * Мок-новости
   */
  news = [
    { title: 'Открытие нового хурула', date: '2024-06-01', text: 'В нашем городе открылся новый хурул.' },
    { title: 'Праздник Цаган Сар', date: '2024-06-10', text: 'Приглашаем всех на празднование Цаган Сара.' },
    { title: 'Лекция по буддизму', date: '2024-06-15', text: 'Ведущий лама проведёт открытую лекцию.' }
  ];
}
