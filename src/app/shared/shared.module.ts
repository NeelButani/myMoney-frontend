import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CalenderFilterComponent } from './components/calender-filter/calender-filter.component';
import { FinicialStatsComponent } from './components/finicial-stats/finicial-stats.component';
import { ShellComponent } from '../shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LoaderComponent,
    CalenderFilterComponent,
    FinicialStatsComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LoaderComponent,
    CalenderFilterComponent,
    FinicialStatsComponent,
  ]
})
export class SharedModule { }
