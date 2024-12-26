import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { routes } from './app.routes';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser'
//import { EmployeeListComponent } from "./employee-list/employee-list.component";
//import { CreateEmployeeComponent } from './create-employee/create-employee.component';
//import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    RouterModule,
    //CommonModule,
    //EmployeeListComponent,
    //CreateEmployeeComponent
    //RouterModule.forRoot(routes)
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS (Angular 19 × Spring Boot)';
}
