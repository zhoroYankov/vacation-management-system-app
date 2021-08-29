import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAddViewModel } from '../employees-add/employees-add.component';
import { VacationViewModel } from '../vacations/vacations.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

@Injectable()
export class EmployeesComponent implements OnInit {

  private employeeUrl: string;

  constructor(private http: HttpClient) {
    this.employeeUrl = 'http://localhost:8081/employees';
   }

  ngOnInit(): void {
  }

  findAll(): Observable<EmployeeViewModel[]>{
    return this.http.get<EmployeeViewModel[]>(this.employeeUrl);
  }

}

export interface EmployeeViewModel{
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email:string;
  role: string;
  vacation: VacationViewModel
}
