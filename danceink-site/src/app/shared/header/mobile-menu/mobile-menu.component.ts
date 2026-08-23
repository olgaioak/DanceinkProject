import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../language-switcher/language-switcher.component';
import { DANCE_NAV_ITEMS, PILATES_NAV_ITEMS } from '../dance-nav-items';
import { STUDIO } from '../../../data/studio';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
  @Output() close = new EventEmitter<void>();

  danceItems = DANCE_NAV_ITEMS;
  pilatesItems = PILATES_NAV_ITEMS;
  studio = STUDIO;

  isDanceExpanded = true;
  isPilatesExpanded = false;

  toggleDance(): void {
    this.isDanceExpanded = !this.isDanceExpanded;
  }

  togglePilates(): void {
    this.isPilatesExpanded = !this.isPilatesExpanded;
  }
}
