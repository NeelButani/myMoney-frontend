import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';
import { RecordsModule } from './records/records.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RecordsModule
  ],
  providers: [
     provideHttpClient(withInterceptors([loaderInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
