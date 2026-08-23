import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LanguageSwitcherComponent,
    NavDropdownComponent,
    MobileMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDanceDropdownOpen = false;
  isMobileMenuOpen = false;

  toggleDanceDropdown(): void {
    this.isDanceDropdownOpen = !this.isDanceDropdownOpen;
  }
}
