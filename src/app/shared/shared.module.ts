import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CalenderFilterComponent } from './components/calender-filter/calender-filter.component';
import { FinicialStatsComponent } from './components/finicial-stats/finicial-stats.component';
import { AddRecordsComponent } from './components/add-records/add-records.component';



@NgModule({
  declarations: [
    LoaderComponent,
    CalenderFilterComponent,
    FinicialStatsComponent,
    AddRecordsComponent
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
