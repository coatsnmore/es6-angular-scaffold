'use strict';

export default class ExampleController {

  constructor() {
    this.name = 'Friend';
  }

  printSecret() {
    console.log('A secret message sto ' + this.name);
  }
}
