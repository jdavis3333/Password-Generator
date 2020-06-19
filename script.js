//

var complexity = 0;


//User selects how many characters between 8 and 128
function char () {
    prompt("How many characters would you like for your password (between 8 and 128)");
    if (char > 128 || char < 8){
        tryAgain()
    }else{
        generate()
    };
}    

function tryAgain () {
    prompt("Invalid option. How many characters would you like for your password (between 8 and 128)");
}


function generate () {
        // let complexity = document.getElementById("char").value;

        var capARR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerARR = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "0123456789";
        var spChar = "#,$,%,&,,(,),*,+,,,-,.,/,:,;<,=,>,?,@,[,\,],^,_,,{,|,},~,";

        let password = ""


            for(var i = 0; i > 8 && i < 128; i++){
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(capARR.length - 1)));
            }

    document.getElementById("textarea").value = password  
}








