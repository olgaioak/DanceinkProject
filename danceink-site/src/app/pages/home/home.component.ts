import { Component } from '@angular/core';
import { DANCES } from '../../data/dances';
import { DanceCardComponent } from '../../components/dance-card/dance-card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    DanceCardComponent,
    TranslateModule      ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('el');
    this.translate.use('el');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  dances = DANCES;
}

