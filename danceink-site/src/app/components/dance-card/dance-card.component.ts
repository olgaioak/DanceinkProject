import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dance-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dance-card.component.html',
  styleUrl: './dance-card.component.css'
})
export class DanceCardComponent {
  @Input() dance: any;
}
