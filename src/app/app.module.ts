import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DuelComponent } from './views/duel/duel.component';
import { UnitCreatorComponent } from './views/unit-creator/unit-creator.component';
import { StatisticsLogComponent } from './views/statistics-log/statistics-log.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DuelComponent,
    UnitCreatorComponent,
    StatisticsLogComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
