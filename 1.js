let value = ['1', '2', 'a', 'b'];
let empty = [];


function edit(value, empty) {
  // Содержимое функции
  let a = prompt('Как вас зовут');
  console.log('Привет ', a + '!!!');

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  for (let i = 0; i < value.length; i++){
    console.log(value[i])
  }

  for (let i = 0; i < value.length; i++){
    empty.push(value[i])
  }

  console.log(empty);

}

edit(value, empty);


let valueFunction = function() {
  let value = 'Приввет василий!'
  console.log(value)
};

valueFunction()

let dongArrowStuff = x => console.log(x)
dongArrowStuff('123443212344321')




