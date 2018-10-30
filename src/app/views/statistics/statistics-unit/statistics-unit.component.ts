import { Component, Input } from '@angular/core';

import { UnitStatistics } from 'src/app/combat/combat-report/report';

@Component({
  selector: 'app-statistics-unit',
  templateUrl: './statistics-unit.component.html',
  styleUrls: ['./statistics-unit.component.scss']
})
export class StatisticsUnitComponent {
  @Input() unit: UnitStatistics;
}
