$( document ).ready(function() {
    $('#coin').bind("webkitAnimationEnd", myEndFunction);

    $('#coin').bind("animationend", myEndFunction);
});

function myEndFunction() {
    if(result===user_color){
       alert("Gewonnen");
    }else{
        alert("Verloren");
    }

}
var user_color;
var result;

function coinflip(color) {
    result = getRandomInt(2);
    $('#coin').removeClass();
    setTimeout(function(){
        if(result === 0){
            $('#coin').addClass('heads');
            console.log('it is head');
        }
        else{
            $('#coin').addClass('tails');
            console.log('it is tails');
        }
    }, 100);
    user_color = color;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
