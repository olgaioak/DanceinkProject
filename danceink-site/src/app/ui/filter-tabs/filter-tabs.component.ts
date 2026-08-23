import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../button/button.directive';

export interface FilterTabOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-filter-tabs',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.css'
})
export class FilterTabsComponent {
  @Input() options: FilterTabOption[] = [];
  @Input() active = '';
  @Output() activeChange = new EventEmitter<string>();

  select(value: string): void {
    this.active = value;
    this.activeChange.emit(value);
  }
}
