import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser'
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import {HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        CommonModule,
        //BrowserModule, 
        EmployeeListComponent,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS (Angular × Spring Boot)';
}
