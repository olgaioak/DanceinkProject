import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, switchMap } from 'rxjs';

import { DanceService } from '../../services/dance.service';
import { StudioService } from '../../services/studio.service';
import { DanceDiscipline, StudioInfo } from '../../data/models';

import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { AgeRangePipe } from '../../ui/age-range/age-range.pipe';

@Component({
  selector: 'app-dance-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BreadcrumbComponent,
    BadgeComponent,
    ButtonDirective,
    ImagePlaceholderComponent,
    SectionEyebrowComponent,
    AgeRangePipe
  ],
  templateUrl: './dance-details.component.html',
  styleUrl: './dance-details.component.css'
})
export class DanceDetailsComponent {
  dance$: Observable<DanceDiscipline | undefined>;
  studio$: Observable<StudioInfo>;

  constructor(route: ActivatedRoute, danceService: DanceService, studioService: StudioService) {
    this.dance$ = route.paramMap.pipe(
      switchMap((params) => danceService.getById(params.get('id') ?? ''))
    );
    this.studio$ = studioService.get();
  }
}
