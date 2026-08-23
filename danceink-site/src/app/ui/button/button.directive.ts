import { Directive, HostBinding, Input } from '@angular/core';

export type ButtonVariant = 'solid-dark' | 'solid-tint' | 'outline' | 'tab';
export type ButtonTone = 'blush' | 'sage';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {
  @Input('appButton') variant: ButtonVariant = 'solid-dark';
  @Input() tone: ButtonTone = 'blush';
  @Input() active = false;

  @HostBinding('class')
  get hostClasses(): string {
    const variantClass = this.variant === 'solid-tint' ? `solid-tint-${this.tone}` : this.variant;
    const classes = ['btn', `btn--${variantClass}`];
    if (this.variant === 'tab' && this.active) {
      classes.push('is-active');
    }
    return classes.join(' ');
  }
}
