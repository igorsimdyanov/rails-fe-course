// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
import "src/profile.js"
import "src/post.js"
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const user = new Person('Ivan', 'Ivanov');

console.log(user.getFullName());

// console.log('js.txt');

// const printAdivce = async () => {
//   const result = await fetch('https://api.adviceslip.com/advice');
//   const json = await result.json();
//   const advice = json.slip.advice;
//   console.log(advice);
// }

// printAdivce()

const promise = new Promise((resolve, reject) => {
  const callback = () => {
    resolve();
  }
  
  setTimeout(callback, 1000);
});

promise.then(() => {
  console.log('resolved!');
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("trix")
require("@rails/actiontext")