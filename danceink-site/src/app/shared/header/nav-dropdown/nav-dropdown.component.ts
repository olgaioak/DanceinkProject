import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DANCE_NAV_ITEMS } from '../dance-nav-items';

@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './nav-dropdown.component.html',
  styleUrl: './nav-dropdown.component.css'
})
export class NavDropdownComponent {
  @Output() closed = new EventEmitter<void>();
  items = DANCE_NAV_ITEMS;
}
