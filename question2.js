//Question 2


function xorEvenOdd(){
    let num1 = parseInt( prompt('Enter the First Number') );
    let num2 = parseInt( prompt('Enter the Second Number') );
    
    let oddcount = Math.floor( (num2-num1)/2 );
    
    if(num2%2 == 1 || num1%2 == 1){
        oddcount++;
    }
    
    
    if( oddcount%2 == 0 ){
        return "Even";
    }
    else{
        return "Odd";
    }
}

xorEvenOdd();