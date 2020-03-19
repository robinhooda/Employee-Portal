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

    // Methods
    constructor() {
        this.showName();
        this.showBirthday();
    }

    showName() {
        console.log(`Name : ${this.firstName} ${this.lastName}`);
    }

    showBirthday() {
        console.log(`Age : ${this.age}`);
    }
}
