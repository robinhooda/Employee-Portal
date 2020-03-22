export interface User {
    firstName: string;
    lastName: string;
    role: string;
    age?: number; // Here, ? is used to make this field optional
    address;
}
