import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  department: string;
  status: 'Active' | 'Inactive';
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Amit Sharma',
      department: 'IT',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya Verma',
      department: 'HR',
      status: 'Inactive'
    },
    {
      id: 3,
      name: 'Rahul Singh',
      department: 'IT',
      status: 'Active'
    }
  ];
  storedEmployees: Employee[];
  constructor() {
    this.storedEmployees = this.employees;
  }
  
  searchEmployeeByName(evt: Event) {
    let ele = evt.target as HTMLInputElement;
    let searchText = ele.value;

    if(searchText.length) {
      this.employees = this.storedEmployees.filter((emp) => emp.name.toLowerCase()
                        .includes(searchText));
      console.log(this.employees);
      
    }
    else
      this.employees = this.storedEmployees;
  }
}
