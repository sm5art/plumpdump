import {Unit, AddGate, MultiplyGate} from './util'

class Score {
  constructor(){
    
  }
}

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


export default class Neuron {
  constructor(learning_rate){
    //computation structure graph Max(0, ax+by+c)
    this.learning_rate = learning_rate
    this.a = new Unit(-1.0, 0.0);
    this.b = new Unit(1.0, 0.0);
    this.c = new Unit(1.0, 0.0);
  }

  forward() {

  }
}
