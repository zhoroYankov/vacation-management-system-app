import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolesComponent } from './roles/roles.component';
import { EmployeesComponent } from './employees/employees.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';
import { EmployeesSearchComponent} from './employees-search/employees-search.component';
import { EmployeesDeleteComponent } from './employees-delete/employees-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EmployeesListComponent } from './employees-list/employees-list.component';


const appRoutes :Routes = [

  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: EmployeesAddComponent
  },
  {
    path: 'employees/update',
    component: EmployeesUpdateComponent
  },
  {
    path: 'employees/delete',
    component: EmployeesDeleteComponent
  },
  {
    path: 'roles',
    component :RolesComponent
  },
  {
    path: 'vacations',
    component: VacationsComponent
  },
  {
    path:  '',
    component: EmployeesListComponent,
    pathMatch: 'full'
  },
  {
    path: '#',
    component: EmployeesListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    RolesComponent,
    VacationsComponent,
    EmployeesComponent,
    EmployeesUpdateComponent,
    EmployeesAddComponent,
    EmployeesSearchComponent,
    EmployeesDeleteComponent,
    EmployeesListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
