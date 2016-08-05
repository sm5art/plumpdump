import { LinearSVM } from './LinearSVM';
import {Unit} from './util'

var data = []; var labels = [];
data.push([1.2, 0.7]); labels.push(1);
data.push([-0.3, -0.5]); labels.push(-1);
data.push([3.0, 0.1]); labels.push(1);
data.push([-0.1, -100.0]); labels.push(-1);
data.push([-1.0, -1.1]); labels.push(-1);
data.push([2.1, 3.1]); labels.push(1);

const svm = new LinearSVM(0.01);

function trainAccuracy(){
  var num_correct = 0;
  console.log(svm.a, svm.b, svm.c)
  for(var i = 0; i < data.length; i++) {
    var x = new Unit(data[i][0], 0.0);
    var y = new Unit(data[i][1], 0.0);
    var true_label = labels[i];

    // see if the prediction matches the provided label
    var predicted_label = svm.predict(x, y);
    if(predicted_label === true_label) {
        num_correct++;
    }
    //console.log(`predicted: ${predicted_label}, true: ${true_label}`)
  }
  return num_correct / data.length;
}

// the learning loop
for(var iter = 0; iter < 400; iter++) {
  // pick a random data point
  var i = Math.floor(Math.random() * data.length);
  var x = new Unit(data[i][0], 0.0);
  var y = new Unit(data[i][1], 0.0);
  var label = labels[i];
  svm.train(x, y, label);

  if(iter % 25 == 0) { // every 10 iterations...
    console.log('training accuracy at iter ' + iter + ': ' + trainAccuracy());
  }
}
