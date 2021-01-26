import { PageNotFoundComponent } from './core/page-not-found.component';
import { DepartamentsCreateComponent } from './departments/departaments-create/departaments-create.component';
import { DepartmentUpdateComponent } from './departments/department-update/department-update.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { DepartmentsModule } from './departments/departments.module'
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CoreModule,
    DepartmentsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
