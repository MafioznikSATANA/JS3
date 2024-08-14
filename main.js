
//#1
let num = +prompt('введите число')
for(let i=0; i <= num; i++){
    if(i==1){
        console.log(i+'banana')
    }else if(i>1){
        console.log(i+'bananas')
    }   

}
//#1

//#2
let final = 0;
let sum = +prompt('введите число')
for(let a=0;a<sum;a++){
    if(a%2==0){
        
        
        final += a
        


    }else{

    }
}
console.log(final)

//#2

//#3
let number = +(prompt('Введите число')); 
let exponent = +(prompt('Введите степень')); 


if (isNaN(number) || number === 0) {
    alert("Число не может быть NaN или равно 0.");
} else {
    if (isNaN(exponent) || exponent === 0) {
        exponent = 2; 
    }

    let result = 1; 

    
    for (let i = 0; i < exponent; i++) {
        result *= number;
    }

    
    alert('Ответ '+result);
}
//#3




