var calc = document.getElementById("display-cal");

function toScreen(x){
  calc.value+=x;
  if(x==='C'){
    calc.value='';
  }
}

function answer(){
  x=calc.value;
  x=eval(x);
  calc.value=x;
}

function sqr(){
  x=calc.value;
  x=eval(x*x);
  calc.value=x;
}

function backSpace(){
  var num = calc.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  calc.value = newNum;
}