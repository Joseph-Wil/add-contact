'use strict';

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