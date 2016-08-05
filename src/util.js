export class Unit {
  constructor(value, grad) {
    this.value = value;
    this.grad = grad;
  }
}

export class MultiplyGate{
  constructor(){
  }

  forward(unit0, unit1) {
    this.u0 = unit0;
    this.u1 = unit1;
    this.utop = new Unit(unit0.value * unit1.value, 0.0)
    return this.utop
  }

  backward() {
    //f(x, y) = xy
    // dx/df = y df
    // dy/df = x df
    // gradients are additive on each itteration thats why we +=
    this.u0.grad += this.u1.value * this.utop.grad;
    this.u1.grad += this.u0.value * this.utop.grad;
  }
}

export class AddGate{
  constructor(){
  }

  forward(unit0, unit1){
    this.u0 = unit0;
    this.u1 = unit1;
    this.utop = new Unit(unit0.value + unit1.value, 0.0)
    return this.utop;
  }
  backward(){
    //f(x, y) = x + y
    //dx/df = df
    //dy/df = df
    this.u0.grad += this.utop.grad;
    this.u1.grad += this.utop.grad;
  }
}
