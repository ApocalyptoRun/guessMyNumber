const nombreTrouver = document.getElementById('nombre');
const nombreEntrer = document.getElementById('guess');
const msg = document.getElementById('message');
const score = document.getElementById('score');
const highScore = document.getElementById('highscore');

var nombreAleatoire = Math.floor(Math.random()*20)+1;
//const listeScore = [];


function calculer(){
    var nombreEntrerVal = +nombreEntrer.value;
    
    if(nombreEntrerVal == nombreAleatoire){
        document.body.style.backgroundColor = '#60b347';
        nombreTrouver.innerHTML = nombreAleatoire;
        message.innerHTML = "You guessed it !";
        //listeScore.push(+score.innerHTML);
    }
    else{
        message.innerHTML = nombreEntrerVal < nombreAleatoire ? "To low !" : "To high !";

        if(+score.innerHTML > 0){
            score.innerHTML = +score.innerHTML - 1;
        }
    }

}

function again(){
    nombreAleatoire = Math.floor(Math.random()*20)+1;
    document.body.style.backgroundColor = '#222';
    nombreTrouver.textContent = '?';
    msg.textContent = "Start guessing !";
    //highScore.innerHTML = +highScore.innerHTML == 0 ? score.textContent : Math.max(...listeScore);
    highScore.innerHTML = +score.innerHTML > +highScore.innerHTML ? score.textContent : highScore.textContent;
    score.innerHTML = 20;
}