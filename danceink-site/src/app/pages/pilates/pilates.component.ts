import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';

import { PilatesService } from '../../services/pilates.service';
import { PilatesProgram } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { StepCardComponent } from '../../ui/step-card/step-card.component';

@Component({
  selector: 'app-pilates',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SectionEyebrowComponent,
    ButtonDirective,
    ImagePlaceholderComponent,
    StepCardComponent
  ],
  templateUrl: './pilates.component.html',
  styleUrl: './pilates.component.css'
})
export class PilatesComponent {
  groupPrograms$: Observable<PilatesProgram[]>;

  constructor(pilatesService: PilatesService) {
    this.groupPrograms$ = pilatesService.getAll().pipe(map((programs) => programs.filter((p) => p.id !== 'reformer-1-1')));
  }
}
