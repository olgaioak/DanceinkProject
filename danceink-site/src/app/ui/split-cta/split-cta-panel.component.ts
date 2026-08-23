import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEyebrowComponent } from '../section-eyebrow/section-eyebrow.component';

@Component({
  selector: 'app-split-cta-panel',
  standalone: true,
  imports: [CommonModule, SectionEyebrowComponent],
  templateUrl: './split-cta-panel.component.html',
  styleUrl: './split-cta-panel.component.css'
})
export class SplitCtaPanelComponent {
  @Input() eyebrow = '';
  @Input() heading = '';
  @Input() tone: 'blush' | 'sage' | 'neutral' = 'neutral';
}
