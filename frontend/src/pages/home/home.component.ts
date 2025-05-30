import { Component } from '@angular/core';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

/**
 * Главная страница приложения
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * Текст приветствия
   */
  greeting: string = 'Добро пожаловать на главную страницу!';
}
