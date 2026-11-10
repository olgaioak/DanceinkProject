import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { STUDIO } from '../../data/studio';
import { toInstagramUrl } from '../utils/contact-links';

/** Call / email / Instagram buttons, used wherever we send visitors to contact the studio. */
@Component({
  selector: 'app-contact-actions',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-actions.component.html',
  styleUrl: './contact-actions.component.css'
})
export class ContactActionsComponent {
  @Input() compact = false;

  readonly phoneHref = 'tel:' + STUDIO.phone.replace(/\s/g, '');
  readonly emailHref = 'mailto:' + STUDIO.email;
  readonly instagramHref = toInstagramUrl(STUDIO);
}
