import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  
  employees!: Employee[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "Ranmesh",
      "lastName": "Fadatare",
      "emailId": "ramesh@gamil.com"
    },{
      "id": 1,
      "firstName": "John",
      "lastName": "Cena",
      "emailId": "cena@gamil.com"
    }]
  }
}
