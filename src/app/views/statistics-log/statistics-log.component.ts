import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-log',
  templateUrl: './statistics-log.component.html',
  styleUrls: ['./statistics-log.component.scss']
})
export class StatisticsLogComponent {
  @Input() log: string[];
}
