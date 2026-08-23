import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PlaceholderTone = 'blush' | 'sage' | 'neutral' | 'dark';
export type PlaceholderRatio = '1:1' | '3:2' | '4:5' | '16:10' | '4:3' | '16:9';

@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-placeholder.component.html',
  styleUrl: './image-placeholder.component.css'
})
export class ImagePlaceholderComponent {
  @Input() label = 'PHOTO';
  @Input() ratio: PlaceholderRatio = '3:2';
  @Input() tone: PlaceholderTone = 'neutral';
  @Input() fill = false;

  @HostBinding('class.image-placeholder-host--fill')
  get fillHostClass(): boolean {
    return this.fill;
  }

  get aspectRatio(): string | null {
    return this.fill ? null : this.ratio.replace(':', ' / ');
  }
}
