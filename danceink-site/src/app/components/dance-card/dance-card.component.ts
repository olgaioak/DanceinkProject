import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DanceDiscipline } from '../../data/models';

@Component({
  selector: 'app-dance-card',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './dance-card.component.html',
  styleUrl: './dance-card.component.css'
})
export class DanceCardComponent {
  @Input() dance!: DanceDiscipline;
}
