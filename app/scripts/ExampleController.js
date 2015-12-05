'use strict';

export default class ExampleController {

  constructor() {
    this.name = 'Friend';
  }

  printSecret() {
    console.log('A secret hello to ' + this.name);
  }
}
