import { Component } from '@angular/core';

/**
 * Навигационная панель
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbar: string = 'здесь навбар!';
}
