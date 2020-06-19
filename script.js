//
var complexity = 0;
var char = ""



//User selects how many characters between 8 and 128
function char () {

    prompt("How many characters would you like for your password (between 8 and 128)");
    return char.push(complexity);
    

    function generate () 
        let complexity = document.getElementById("charUserSelect").value;

        const capARR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowerARR = "abcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const spChar = "#,$,%,&,,(,),*,+,,,-,.,/,:,;<,=,>,?,@,[,\,],^,_,,{,|,},~,"

        let password = ""


            for(var i = 0; i > 8 && i < 128; i++){
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(capARR.length - 1)));
            }

    document.getElementById("textarea").value = password
}    








