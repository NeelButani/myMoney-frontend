import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list/records-list.component';
import { AddRecordsComponent } from './add-records/add-records.component';



@NgModule({
  declarations: [
    RecordsListComponent,
    AddRecordsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecordsModule { }
