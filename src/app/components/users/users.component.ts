import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Robin',
        lastName: 'Hooda',
        role: 'Full Stack Developer',
        age: 23,

        address: {
          city: 'Gohana',
          state: 'Haryana',
          country: 'IN'
        }

      },
      {
        firstName: 'Mohan',
        lastName: 'Malik',
        role: 'Front end Developer',
        age: 21,

        address: {
          city: 'Rohtak',
          state: 'Haryana',
          country: 'IN'
        }

      },
      {
        firstName: 'Arjun',
        lastName: 'Reddy',
        role: 'DevOps',
        age: 28,

        address: {
          city: 'Hyderabad',
          state: 'Telangana',
          country: 'IN'
        }

      }
    ];
  }

}
