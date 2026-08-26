import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, Observable, startWith } from 'rxjs';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'danceink-site';
  isHomePage$: Observable<boolean>;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('el');
    const savedLang = localStorage.getItem('lang');
    this.translate.use(savedLang || 'el');

    this.isHomePage$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects === '/'),
      startWith(this.router.url === '/')
    );
  }
}
