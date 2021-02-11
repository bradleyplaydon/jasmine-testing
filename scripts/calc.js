Calculator = function() {
  this.value = 0;
}

Calculator.prototype.add = function(number){
  if(typeof(number) == "number"){
    this.value += number;
  } else {
    alert("Error!");
  }
}

Calculator.prototype.subtract = function(n1, n2){
  if(typeof(n1) == "number" && typeof(n2) == "number"){
    this.value = n1 - n2;
  } else {
    alert("Error!");
  }
}
