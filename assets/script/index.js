'use strict';

import { Contact } from "./contact.js";

// Utility Function

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Variables

const userInput = select('.contact');
const addButton = select('.add');
const gridOutput = select('.grid-output');
const contactTracker = select('span');
const errorMess = select('.error');
const inputRegex = /^(.*, [a-zA-Z]{3,}.*@.+\..+)|(^.+,.+,.+)$/;
const contacts = [];
   

// Functions

function validateInput() {
    const inputValue = userInput.value.trim();
    const splitValue = inputValue.split(',');

    if (splitValue.length === 3) {
        const [name, city, email] = splitValue.map(part => part.trim());

        if (inputRegex.test(`${name}, ${city}, ${email}`)) {
            return true;
        }
    }

    displayErrorMessage();
    return false;
}


function displayErrorMessage() {
    errorMess.innerText = 'Invalid input, please follow the example: name, city, email';
    return false;
}

function listContact() {
    const inputText = userInput.value;

    if (validateInput(inputText)) {

            const [name, city, email] = inputText.split(',').map(part => part.trim());
        
            const newContact = new Contact(inputText);
            contacts.unshift(newContact);

            const outputDiv = document.createElement('div');
            outputDiv.className = 'output-box';

            const nameInput = document.createElement('p');
            nameInput.innerText = `Name: ${name}`;

            const cityInput = document.createElement('p');
            cityInput.innerText = `City: ${city}`;

            const emailInput = document.createElement('p');
            emailInput.innerText = `Email: ${email}`;

            outputDiv.appendChild(nameInput);
            outputDiv.appendChild(cityInput);
            outputDiv.appendChild(emailInput);
            gridOutput.appendChild(outputDiv);
    }
}

// Events

onEvent('click', addButton, function() {
    listContact();
});