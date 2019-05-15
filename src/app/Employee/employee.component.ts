import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html' 
})
export class EmployeeDetails{
  name = "madhu";
  salary = "20000";
}