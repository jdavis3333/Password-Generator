//

let complexity = 0;
let passwordLength = 0;
let passwordCharacters = []

let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let spChar = "#,$%&()*+-./:;<=>?@[\]^_{|}~";

//User selects how many characters between 8 and 128
function char() {
    passwordLength = prompt("How many characters would you like for your password (between 8 and 128)");
    if (passwordLength > 128 || passwordLength < 8){
        char()
    }else{
        userChoice()
    };
}    

function tryAgain() {
    prompt("Invalid option. How many characters would you like for your password (between 8 and 128)");
}

function userChoice() {
    let upperCase = confirm("would you like to have upper case?")
    let lowerCase = confirm("would you like to have lower case?")
    let specialCharacters = confirm("would you like to have special characters?")
    let numbers = confirm("would you like to have numbers?")
    if (!upperCase && !lowerCase && !specialCharacters && !numbers) {
        alert("at least one must be selected");
        userChoice();
    }
    else{
        if(upperCase) {
            passwordCharacters += cap;
        }
        if(lowerCase) {
            passwordCharacters += lower;
        }
        if(specialCharacters) {
            passwordCharacters += spChar;
        }
        if(numbers) {
            passwordCharacters += num;
        }
        generate();
    }
}




function generate () {
        // let complexity = document.getElementById("char").value;
        let password = ""


            for(var i = 0; i < passwordLength; i++){
                let index = Math.floor(Math.random()*passwordCharacters.length)
            password = password + passwordCharacters [index]
            }
            console.log(password);
    document.getElementById("text").value = password  

}








