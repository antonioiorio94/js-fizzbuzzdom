//conta da 0 a 100 e stampa Fizz per i multipli di 3 o Buzz per i multipli di 5
// && FizzBuzz se sono multipli di entrambi; ()


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