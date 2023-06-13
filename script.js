let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let button = document.querySelector('.button');
let paragraph = document.querySelector('p');

button.onclick=function(){
  let userInput1= input1.value
  let userInput2= input2.value

if (userInput1<= 5 && userInput2 == 'cats'){
  paragraph.innerHTML = "You are a monkey!"
}
  else if (userInput1<= 5 && userInput2 == 'dogs') {
    paragraph.innerHTML = "You are a rat!"
  }
else if(userInput1 >=6 && userInput1 <=10 && userInput2 == 'cats'){
  paragraph.innerHTML = "You are a duck!"
}
else if(userInput1 >=6 && userInput1 <=10 && userInput2 == 'dogs'){
  paragraph.innerHTML = "You are a snake!"
}


}
