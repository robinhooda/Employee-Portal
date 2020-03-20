import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // Properties
    firstName = 'Robin';
    lastName = 'Hooda';
    age = '23';
    address = {
        city: 'Gohana',
        state: 'Haryana',
        country: 'IN'
    };
    // Methods
    constructor() {

    }

    showAge() {
        return this.age;
    }

}
