 import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loader$ = this.loadingSubject.asObservable();
  apiCount = 0;

  constructor() { }

  showLoader(){
    this.apiCount++;
    this.updateLoadingState()
    console.log("Loader started");
  }

  hideLoader(){
    if(this.apiCount > 0){
      this.apiCount--;
    }
    this.updateLoadingState()
    console.log("Loader hide");
  }

  private updateLoadingState(){
    this.loadingSubject.next(this.apiCount > 0)
  }
}
