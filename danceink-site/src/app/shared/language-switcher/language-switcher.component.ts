import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  activeLang = 'el';
  private subscription?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.activeLang = this.translate.currentLang || this.translate.getDefaultLang() || 'el';
    this.subscription = this.translate.onLangChange.subscribe((event) => {
      this.activeLang = event.lang;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
