import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {

  model: EmployeeAddViewModel = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  addEmployee(): void{
    let url = "http://localhost:8081/employees/add";
    this.http.post(url, this.model).subscribe(
      res => {
        location.reload()
      },
      err => {
        alert("An error occured while sendind!")
        location.reload()
    })
  }

}

export interface EmployeeAddViewModel{
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
