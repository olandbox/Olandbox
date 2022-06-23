import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppPipesModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
