import { PageNotFoundComponent } from './core/page-not-found.component';
import { DepartamentsCreateComponent } from './departments/departaments-create/departaments-create.component';
import { DepartmentUpdateComponent } from './departments/department-update/department-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartamentsCreateComponent },
  { path: 'departments/:code', component: DepartmentUpdateComponent },
  { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
