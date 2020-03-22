import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

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

    this.loaded = true;


    // Initialize the data to be passed in addUser() method
    this.addUser({
      firstName: 'Bipul',
      lastName: 'Jha',
      role: 'UX Designer',
      address: {
        city: 'Patna',
        state: 'Bihar',
        country: 'IN'
      }
    });
  }

  // To add any data of another user in the users
  addUser(user: User) {
    this.users.push(user);
  }

}
