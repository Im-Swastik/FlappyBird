var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
window.addEventListener('keydown', jump);
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*400)+200);
    hole.style.top = random + "px";
    counter ++;
});
function gravity(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(600 - characterTop);
    if (jumping === 0){
    characterTop = characterTop + 3;
    }
    character.style.top = characterTop + "px";
    if ((characterTop >= 575) || (blockLeft < 25) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop+175)) ){
        alert("Game Over, Score:- " + counter);
        block.style.left = 600 + "px";
        character.style.top = 100 + "px";
        counter = 0;
    }
}
setInterval(gravity, 10);
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        characterTop = characterTop - 4;
        character.style.top = characterTop + "px";
        if(jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}
