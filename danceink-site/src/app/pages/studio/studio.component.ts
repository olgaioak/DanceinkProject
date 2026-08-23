import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { StudioService } from '../../services/studio.service';
import { StudioInfo } from '../../data/models';
import { toWhatsAppUrl } from '../../shared/utils/contact-links';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionEyebrowComponent, ButtonDirective, ImagePlaceholderComponent],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.css'
})
export class StudioComponent {
  studio$: Observable<StudioInfo>;

  constructor(studioService: StudioService) {
    this.studio$ = studioService.get();
  }

  whatsAppUrl(phone: string): string {
    return toWhatsAppUrl(phone);
  }
}
