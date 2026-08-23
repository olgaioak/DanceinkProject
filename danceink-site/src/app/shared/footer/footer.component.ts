import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FloatingDirectionsButtonComponent } from './floating-directions-button/floating-directions-button.component';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { STUDIO } from '../../data/studio';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactInfoComponent, FloatingDirectionsButtonComponent, ImagePlaceholderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  studio = STUDIO;

  isInternalLink(url: string): boolean {
    return url.startsWith('/');
  }
}
