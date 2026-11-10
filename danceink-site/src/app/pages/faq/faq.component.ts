import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FAQ_CATEGORIES } from '../../data/faq';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ContactActionsComponent } from '../../shared/contact-actions/contact-actions.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, SectionEyebrowComponent, ContactActionsComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  readonly categories = FAQ_CATEGORIES;
}
