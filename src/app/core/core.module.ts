import { ErrorHandlerService } from './error-handler.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { ConfirmationService } from 'primeng/components/common/api';
import { DepartmentService } from './../departments/department.service';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [PageNotFoundComponent],
  exports: [
    ToastyModule,
    ConfirmDialogModule,
  ],
  providers: [
    DepartmentService,
    ConfirmationService,
    ErrorHandlerService
  ]
})
export class CoreModule { }
