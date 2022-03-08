//conta da 0 a 100 e stampa Fizz per i multipli di 3 o Buzz per i multipli di 5
// && FizzBuzz se sono multipli di entrambi; ()

/*
for(let index = 0;index <= 100; index++){ 
    if(index % 3 === 0 && index % 5 === 0){
        console.log('FizzBuzz'); //perchè funziona solo se la metto per prima?
    }else if(index % 5 === 0){
        console.log('Buzz');
    }else if(index % 3 === 0){
        console.log('Fizz');
    }else{
        console.log(index);}
    
}
*/


//assegnazione  const a row && buzz && fizz
const row = document.querySelector('#row')
const buzz = "Buzz";
const fizz = "Fizz"

for(let index = 0;index <= 100; index++){ 
    if(index % 3 === 0 && index % 5 === 0){
        const element = `<div class="col-2 bg-warning p-5 text-center mx-1">${fizz}${buzz}</div>`;
        row.innerHTML += element;
    }else if(index % 5 === 0){
        const element = `<div class="col-2 bg-light p-5 text-center mx-1">${buzz}</div>`;
        row.innerHTML += element;
    }else if(index % 3 === 0){
        const element = `<div class="col-2 bg-danger p-5 text-center mx-1">${fizz}</div>`;
        row.innerHTML += element;
    }else{
        const element = `<div class="col-2 bg-success p-5 text-center mx-1">${index}</div>`;
        row.innerHTML += element;}
}