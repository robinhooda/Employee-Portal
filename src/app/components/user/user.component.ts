import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // Properties
    user: {
        firstName: string;
        lastName: string;
        role: string;
        age: number;
        address;
        graduate: boolean;
        marks: number[];
    };


    // Methods
    constructor() {
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

    showAge() {
        return this.user.age;
    }

}
