import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DANCES } from '../../data/dances';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dance-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dance-details.component.html',
  styleUrl: './dance-details.component.css'
})
export class DanceDetailsComponent {
  dance: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.dance = DANCES.find(d => d.id === id);
  }
}
