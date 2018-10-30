import { Component, Input } from '@angular/core';
import { CombatStatistics } from 'src/app/combat/combat-report/report';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() statistics: CombatStatistics;
}
