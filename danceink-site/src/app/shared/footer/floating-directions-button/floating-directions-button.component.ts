import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-floating-directions-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './floating-directions-button.component.html',
  styleUrl: './floating-directions-button.component.css'
})
export class FloatingDirectionsButtonComponent {
  @Input() href = '#';
}
