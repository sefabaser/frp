import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DuelComponent } from './views/duel/duel.component';
import { UnitCreatorComponent } from './views/unit-creator/unit-creator.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { StatisticsUnitComponent } from './views/statistics/statistics-unit/statistics-unit.component';
import { StatisticsLogComponent } from './views/statistics/statistics-log/statistics-log.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DuelComponent,
    UnitCreatorComponent,
    StatisticsLogComponent,
    StatisticsComponent,
    StatisticsUnitComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
