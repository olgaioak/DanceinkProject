import { Component } from '@angular/core';

@Component({
  selector: 'app-section-eyebrow',
  standalone: true,
  template: `<p class="eyebrow-text"><ng-content></ng-content></p>`,
  styles: [
    `:host {
      display: block;
    }`
  ]
})
export class SectionEyebrowComponent {}
