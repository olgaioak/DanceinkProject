import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StudioInfo } from '../../../data/models';
import { STUDIO } from '../../../data/studio';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  @Input() studio: StudioInfo = STUDIO;
  @Input() tone: 'light' | 'dark' = 'dark';
}
