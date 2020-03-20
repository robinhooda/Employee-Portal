import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;
    graduate: any;
    marks: number[];

    // Methods
    constructor() {
        this.firstName = 'Robin';
        this.lastName = 'Hooda';
        this.age = 23;

        this.address = {
            city: 'Gohana',
            state: 'Haryana',
            country: 'IN'
        };

        this.graduate = true;
        this.marks = [80, 83, 94];
    }

    showAge() {
        return this.age;
    }

}
