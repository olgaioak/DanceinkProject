import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DanceService } from '../../services/dance.service';
import { AgeGroup, DanceDiscipline } from '../../data/models';

import { SectionEyebrowComponent } from '../../ui/section-eyebrow/section-eyebrow.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ImagePlaceholderComponent } from '../../ui/image-placeholder/image-placeholder.component';
import { FilterTabsComponent } from '../../ui/filter-tabs/filter-tabs.component';
import { AgeRangePipe } from '../../ui/age-range/age-range.pipe';
import { SplitCtaPanelComponent } from '../../ui/split-cta/split-cta-panel.component';

@Component({
  selector: 'app-dance-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SectionEyebrowComponent,
    ButtonDirective,
    BadgeComponent,
    ImagePlaceholderComponent,
    FilterTabsComponent,
    AgeRangePipe,
    SplitCtaPanelComponent
  ],
  templateUrl: './dance-list.component.html',
  styleUrl: './dance-list.component.css'
})
export class DanceListComponent implements OnInit {
  private allDances: DanceDiscipline[] = [];

  selectedAgeFilter: AgeGroup | '' = '';

  constructor(private danceService: DanceService) {}

  ngOnInit(): void {
    this.danceService.getAll().subscribe((dances) => {
      this.allDances = [...dances].sort((a, b) => a.order - b.order);
    });
  }

  get filteredDances(): DanceDiscipline[] {
    if (!this.selectedAgeFilter) {
      return this.allDances;
    }
    return this.allDances.filter((dance) => dance.ageGroups.includes(this.selectedAgeFilter as AgeGroup));
  }

  onAgeFilterChange(value: string): void {
    this.selectedAgeFilter = value as AgeGroup | '';
  }
}
