import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container implements AfterContentInit {
  @ContentChild(Employee) employeeComponent! : Employee;
  //ContentChild is not accessible in ngInit because static property is false and we can not change.
  // Content is that will render from some other component and View is its own template data.
  ngAfterContentInit(): void {
      console.log(this.employeeComponent);
      this.employeeComponent.empName = 'sparrow jack';
      console.log(this.employeeComponent)
  }
}
