'use strict';

export class Contact {
    #name;
    #city;
    #email;

    contructor(name, city, email) {
        this.#name = name;
        this.#city = city;
        this.email = email;
    }

    get name() { return this.#name; }
    get city() { return this.#city; }
    get email() { return this.#email; }

    toString() {
        return `${this.name} ${this.city} ${this.email}`;
    }
};