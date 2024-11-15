import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CalenderFilterComponent } from './components/calender-filter/calender-filter.component';
import { FinicialStatsComponent } from './components/finicial-stats/finicial-stats.component';
import { AddRecordsComponent } from './components/add-records/add-records.component';
import { ShellComponent } from './components/shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LoaderComponent,
    CalenderFilterComponent,
    FinicialStatsComponent,
    AddRecordsComponent,
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
    AddRecordsComponent
  ]
})
export class SharedModule { }
