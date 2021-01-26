import { RouterModule } from '@angular/router';
import { DepartamentsCreateComponent } from './departaments-create/departaments-create.component';

import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { RadioButtonModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule } from 'app/shared/shared.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentUpdateComponent } from './department-update/department-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule,
    FieldsetModule,
    DataTableModule,
    TooltipModule,
    SharedModule,
    HttpModule,
    CoreModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    DepartamentsCreateComponent,
    DepartmentUpdateComponent
  ],
  exports: [
  ]
})
export class DepartmentsModule { }
