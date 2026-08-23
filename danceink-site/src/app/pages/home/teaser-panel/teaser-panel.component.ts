import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePlaceholderComponent, PlaceholderRatio } from '../../../ui/image-placeholder/image-placeholder.component';

@Component({
  selector: 'app-teaser-panel',
  standalone: true,
  imports: [CommonModule, ImagePlaceholderComponent],
  templateUrl: './teaser-panel.component.html',
  styleUrl: './teaser-panel.component.css'
})
export class TeaserPanelComponent {
  @Input() eyebrowNumber = '01';
  @Input() eyebrowLabel = '';
  @Input() heading = '';
  @Input() imageLabel = 'Photo';
  @Input() imageRatio: PlaceholderRatio = '3:2';
  @Input() tone: 'blush' | 'sage' = 'blush';
}
