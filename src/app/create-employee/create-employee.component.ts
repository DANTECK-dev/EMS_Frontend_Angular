import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms'; 
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [
    FormsModule,
  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  //employee: Employee = new Employee(23,"asd","asd","aasdsd");
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router ) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
 
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
