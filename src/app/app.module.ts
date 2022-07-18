import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import zh from '@angular/common/locales/zh';
// import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppBootstrapModule } from "./app-bootstrap.module";
import { PagesModule } from "./pages/pages.module";

import { AppPipesModule } from "./pipes/app-pipes.module";
import { AlertModule } from '../app/pages/components/alert/alert.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { DirectivesModule } from './directives/directives.module';




// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    AppPipesModule,
    AlertModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
