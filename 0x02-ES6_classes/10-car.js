/* eslint-disable no-underscore-dangle */
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneSymbol]() {
    const { _brand, _motor, _color } = this;
    const newCar = new this.constructor(_brand, _motor, _color);
    return newCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
