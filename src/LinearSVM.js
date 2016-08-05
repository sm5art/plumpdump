/*
All derivations are made with the chain rule.
*/
import {AddGate, MultiplyGate, Unit} from './util'

//The Circut class follows a linear SVM model of f(x, y) = ax + by + c
// A and B are your weights, C is your bias
// Circut combines all the gates to create a full fledged back prop circut
class Circuit {
  constructor() {
    this.mul0 = new MultiplyGate();
    this.mul1 = new MultiplyGate();
    this.add0 = new AddGate();
    this.add1 = new AddGate();
  }

  forward(x,y,a,b,c) {
    this.ax = this.mul0.forward(a, x)
    this.by = this.mul1.forward(b, y)
    this.axby = this.add0.forward(this.ax, this.by)
    this.axbyc = this.add1.forward(this.axby, c)
    return this.axbyc
  }

  //since the master gradient cant be 0, otherwise the backpropogation will return 0 for each differentiation,
  //set a master-level grad and backpropogate through all the gates to get differentials into a,b,c
  backward(upper_grad) {
    this.axbyc.grad = upper_grad;
    this.add1.backward()
    this.add0.backward()
    this.mul1.backward()
    this.mul0.backward();
  }
}

export class LinearSVM {
  constructor(learning_rate) {
    this.learning_rate = learning_rate
    this.a = new Unit(-1.0, 0.0);
    this.b = new Unit(1.0, 0.0);
    this.c = new Unit(1.0, 0.0);

    this.circuit = new Circuit();
  }

  predict(x, y) {
    return (this.a.value * x.value + this.b.value * y.value + this.c.value) > 0 ? 1 : -1;
  }

  forwardProp(x, y) {
    this.return_unit = this.circuit.forward(x, y, this.a, this.b, this.c)
    return this.return_unit
  }

  backwardProp(label) {
    //reset derivitave
    this.a.grad = 0.0;
    this.b.grad = 0.0;
    this.c.grad = 0.0;

    //which direction do we go, if the function returns to low go higher, if returns too high go lower
    var pull = 0.0;
    if(label === 1 && this.return_unit.value < 1){
      pull = 1.0;
    }
    if(label === -1 && this.return_unit.value > -1){
      pull = -1.0;
    }
    //backward propagte our pull master derivation value
    this.circuit.backward(pull);
    //normalize
    //this.a.grad += -this.a.value;
    //this.b.grad += -this.b.value;
  }

  train(x, y, label){
    this.forwardProp(x, y);
    this.backwardProp(label);
    this.parameterUpdate();
  }

  parameterUpdate(){
    this.a.value += this.learning_rate * this.a.grad;
    this.b.value += this.learning_rate * this.b.grad;
    this.c.value += this.learning_rate * this.c.grad;
  }
}
