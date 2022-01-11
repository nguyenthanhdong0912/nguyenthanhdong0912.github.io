// checkAge mãu //
function checkAge() {
    let age = prompt("Please enter your age");
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

// check Age with Condition //
function checkAgeWithCondition() {
    let age = prompt("Please enter your age");
    isAdult = (age < 18) ? confirm("Did parents allow you?") : alert("You old enough to continue");
}

// check Age with  OR|| //
function checkAgeWithOR(){
    let age = prompt("Please enter your age");
    isAdult = (age < 18) || (age > 18);
    if (age > 18){
        return alert('You old enough to continue');
    } else{
        return confirm('Did parents allow you?');
    }
}

// check smallest number with Math.min //
function checkNumberWithMin() {
    let number = parseInt(prompt("Please enter number you want to check"));
    let min = Math.min(number);
    alert("The smallest number is: " + min);
}

//Arrow Function //
function arrowFunction() {
    ask = (question, yes, no) => { 
    if (confirm(question)) yes()
    else no();
  }
  
ask
  ("Do you agree?",
  yes = () => { alert("You agreed."); },
  no = () => { alert("You canceled the execution."); });
}

//  Log in with admin //
function checkusernamePassword(){
    let username = prompt("Enter your Username");
    let password ;
    if(username == "Admin"){
      alert("Please enter your password");
      password = prompt("Enter your password");
     if (password == "cafedev"){
        alert("Welcome back!");
    } else if (password == "" || password ==null){
        alert("You canceled");
    } else {
        alert("Wrong password, please try again");
    } 
    
    
    } else if (username == "" || username ==null){
        alert("You canceled process");
    } else {
        alert("I don't know you");
    
    }
}
