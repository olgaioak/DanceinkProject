import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter, map, Observable, startWith } from 'rxjs';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqWidgetComponent } from './shared/faq-widget/faq-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    FaqWidgetComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'danceink-site';
  isHomePage$: Observable<boolean>;

  @ViewChild('fundingDialog') private fundingDialog!: ElementRef<HTMLDialogElement>;

  constructor(
    private translate: TranslateService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.setDefaultLang('el');
    // Keep <html lang> in step with the active language, so browsers apply Greek rules
    // (e.g. dropping accents in CSS-uppercased text) and screen readers pick the right voice.
    this.translate.onLangChange.subscribe((event) => (this.document.documentElement.lang = event.lang));
    const savedLang = localStorage.getItem('lang');
    this.translate.use(savedLang || 'el');

    this.isHomePage$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects === '/'),
      startWith(this.router.url === '/')
    );
  }

  openFundingDialog(): void {
    this.fundingDialog.nativeElement.showModal();
  }

  /** Closes the dialog when the click lands on the backdrop rather than its content. */
  onFundingDialogClick(event: MouseEvent): void {
    if (event.target === this.fundingDialog.nativeElement) {
      this.fundingDialog.nativeElement.close();
    }
  }
}
