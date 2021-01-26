import { DepartmentsEntity } from './../../core/model';
import { FormControl } from '@angular/forms';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { DepartmentFilter } from './../../departments/department.service';
import { DepartmentService } from './../../departments/department.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  estados = [
    {label: 'AC', value: 'AC'},
    {label: 'AL', value: 'AL'},
    {label: 'AP', value: 'AP'},
    {label: 'AM', value: 'AM'},
    {label: 'BA', value: 'BA'},
    {label: 'CE', value: 'CE'},
    {label: 'DF', value: 'DF'},
    {label: 'ES', value: 'ES'},
    {label: 'GO', value: 'GO'},
    {label: 'MA', value: 'MA'},
    {label: 'MT', value: 'MT'},
    {label: 'MS', value: 'MS'},
    {label: 'MG', value: 'MG'},
    {label: 'PA', value: 'PA'},
    {label: 'PB', value: 'PB'},
    {label: 'PR', value: 'PR'},
    {label: 'PE', value: 'PE'},
    {label: 'PI', value: 'PI'},
    {label: 'RJ', value: 'RJ'},
    {label: 'RN', value: 'RN'},
    {label: 'RS', value: 'RS'},
    {label: 'RO', value: 'RO'},
    {label: 'RR', value: 'RR'},
    {label: 'SC', value: 'SC'},
    {label: 'SP', value: 'SP'},
    {label: 'SE', value: 'SE'},
    {label: 'TO', value: 'TO'}
  ];

  departmentsEntity = new DepartmentsEntity();

  constructor(
    private departmentService: DepartmentService,
    private errorHandlerService: ErrorHandlerService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const codeDepartment = this.route.snapshot.params['code'];

    console.log(codeDepartment);

    if (codeDepartment) {
      this.loadDepartment(codeDepartment);
    }
  }

  loadDepartment(code: number) {
    this.departmentService.searchForCode(code)
      .then(departmentsEntity => {
        this.departmentsEntity = departmentsEntity;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  update(form: FormControl) {
    this.departmentService.update(this.departmentsEntity)
      .then(departmentsEntity => {
        this.departmentsEntity = departmentsEntity;
        this.toastyService.success('Departamento alterado com sucesso');
        this.router.navigate(['/departments']);

      })
     .catch(error => this.errorHandlerService.handle(error));
  }

}
