import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  toggleIcon = false;
  isMenuOpen = false;

  ngAfterViewInit(): void {
    const menu = document.querySelector('#menu-icon');
    const menubar = document.querySelector('.menubar');

    if (menu instanceof HTMLElement && menubar instanceof HTMLElement) {
      menu.onclick = () => {
        menu?.classList.toggle('bx-x'); // Adicione o '?' para verificar nulo
        menubar?.classList.toggle('open'); // Adicione o '?' para verificar nulo
      };
    }
  }
}
