export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Cloned = this.constructor[Symbol.species] || this.constructor;
    return new Cloned();
  }

  static get [Symbol.species]() {
    return this;
  }
}
