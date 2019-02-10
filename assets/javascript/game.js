var wins=0
var losses=0
var guessesleft=10
var guessessofar = []


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



var hiddenletter = alphabet[Math.floor(Math.random() * alphabet.length)];


function newletter() {
    this.hiddenletter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    console.log(hiddenletter);
};

function updateguessesleft() {
    document.getElementById('guessesleft').innerHTML =" " + guessesleft
};

function updateguessessofar() {
    document.getElementById("guessessofar").innerHTML = guessessofar
};

function reset(){
    guessesleft=10;
    guessessofar=[];
    newletter();

}
function updatewins(){
    document.getElementById("wins").innerHTML =" " + wins
}
function updatelosses(){
    document.getElementById("losses").innerHTML=" "+ losses
}

reset();


document.onkeydown = function(event){

    var guess = event.key;
    console.log(guess);
    if (guess===hiddenletter) {
        alert("You win!!!");
        wins++;
        updatewins();
        reset();
    
    }
    else{
        guessesleft--;
        guessessofar.push(guess);
        console.log(guessesleft);
        updateguessesleft();
        updateguessessofar();

        if (guessesleft==0){
            alert("You lose!");
            losses++;
            updatelosses();
            reset();
        }
    }

}



