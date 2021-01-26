import { DepartmentsEntity } from './../../core/model';
import { FormControl } from '@angular/forms';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { DepartmentFilter } from './../../departments/department.service';
import { DepartmentService } from './../../departments/department.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-departaments-create',
  templateUrl: './departaments-create.component.html',
  styleUrls: ['./departaments-create.component.css']
})
export class DepartamentsCreateComponent implements OnInit {

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


  totalRegister = 0;
  filter = new DepartmentFilter();
  departs = [];
  @ViewChild('table') grid;

  constructor(
    private departmentService: DepartmentService,
    private errorHandlerService: ErrorHandlerService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  save(form: FormControl) {

    if (!isNumeric(this.departmentsEntity.code)){
        this.toastyService.error('Código deve ser numérico');
    } else {

      this.departmentService.create(this.departmentsEntity)
        .then(() => {
          this.toastyService.success('Departamento cadastrado com sucesso');
          form.reset();
          this.departmentsEntity = new DepartmentsEntity();
          this.list();
        })
      .catch(error => this.errorHandlerService.handle('Departamento já cadastrado'));
    }
  }

  list(page = 0) {
    this.filter.page = page;
    this.departmentService.list(this.filter)
      .then(result => {
        this.totalRegister = result.total;
        this.departs = result.departments;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.list(page);
  }

  confirmDelete(department: any) {
    this.confirmationService.confirm({
      message: 'Deseja confirmar exclusão ?',
      accept: () => {
        this.delete(department);
      }
    });
  }

  delete(department: any) {
    this.departmentService.delete(department.code)
    .then(() => {
      if (this.grid.first === 0) {
        this.list();
      } else {
        this.grid.first = 0;
      }

      this.toastyService.success('Departamento excluído com sucesso');
    })
    .catch(error => this.errorHandlerService.handle(error));
  }
}
