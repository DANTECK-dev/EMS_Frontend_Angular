import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser'
//import { EmployeeListComponent } from "./employee-list/employee-list.component";
//import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //CommonModule,
    //EmployeeListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS (Angular × Spring Boot)';
}
