import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {
    // Properties
    user: User;

    // Methods
    constructor() {

    }

    ngOnInit() {
        this.user = {
            firstName: 'Robin',
            lastName: 'Hooda',
            role: 'Full Stack Developer',
            age: 23,

            address: {
                city: 'Gohana',
                state: 'Haryana',
                country: 'IN'
            },

            graduate: true,
            marks: [80, 83, 94]
        };
    }

}
