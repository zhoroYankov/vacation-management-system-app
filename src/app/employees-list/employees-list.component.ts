import { EmployeesComponent } from './../employees/employees.component';
import { Component, OnInit } from '@angular/core';
import { EmployeeViewModel } from '../employees/employees.component';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

   allEmployees: EmployeeViewModel[] = [];

  constructor(private employees: EmployeesComponent) { }

  public ngOnInit() {
    this.employees.findAll().subscribe(data => {
      this.allEmployees = data;
    });
  }

}
