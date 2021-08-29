import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface VacationViewModel {
  stratDate: string,
  endDate: string
}
