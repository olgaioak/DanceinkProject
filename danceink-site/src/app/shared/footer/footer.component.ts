import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FloatingDirectionsButtonComponent } from './floating-directions-button/floating-directions-button.component';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactInfoComponent, FloatingDirectionsButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  studio = STUDIO;
  mapEmbedUrl: SafeResourceUrl | null = null;

  constructor(sanitizer: DomSanitizer) {
    if (this.studio.mapEmbedUrl) {
      this.mapEmbedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.studio.mapEmbedUrl);
    }
  }

  isInternalLink(url: string): boolean {
    return url.startsWith('/');
  }
}
