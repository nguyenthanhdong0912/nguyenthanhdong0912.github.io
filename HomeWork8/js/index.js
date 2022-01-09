//máy tính cơ bản
function calculatorIf(){

// phép tinh
const operator = prompt('Enter operator ( either +, -, * or / ): ');
let number = true;
// nhập đầu vào 2 số
let number1 = parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));
let result = 0;

// using if...else if... else or switch
    if(operator == "+"){
        result = number1 + number2;
    }else if(operator == "-"){
        result = number1 - number2;
    }else if(operator == "*"){
        result = number1 * number2;
    }else if(operator == "/"){
        result = number1 / number2;
    } else{ 
        result = "Please enter number again!!!";
        number = false;
    }
// display the result
    if (number){
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }else{    
        alert(result);
    }
}

// useing switch
function calculatorSwitch(){

    // phép tinh
    const operator = prompt('Enter operator ( either +, -, * or / ): ');
    let number = true;
    // nhập đầu vào 2 số
    let number1 = parseInt(prompt("Enter first number: "));
    let number2 = parseInt(prompt("Enter second number: "));
    let result = 0;
    
    // using switch to calculate
        switch (operator){
            case "+":
                result = number1 + number2;
            break;
            case "-":
                result = number1 - number2;
            break;
            case "*":
                result = number1 * number2;
            break;
            case "/":
                result = number1 / number2;
            break;
            default:
                result = "Please enter number again!!!";
                number = false;
}           
            // display the result
    if (number){
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }else{    
        alert(result);
    }
}

// Tìm số nguyên tố
function primeNumber(){
    // Biến cờ hiệu
    const p = parseFloat(prompt("Nhập một số "));
    let isPrime = true;
 
    // Nếu p bé hơn 2 tức là không phải số nguyên tố
    if (p < 2){
        isPrime = false;
    }
    else{
        // lặp từ 2 tới p-1
        for (let i = 2; i < p-1; i++)
        {
            if (p % i == 0){
                isPrime = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến isPrime
    if (isPrime == true){
        alert(p + " là số nguyên tố ");
    }
    else{
        alert(p + " không phải là số nguyên tố ");
    }
}