
var character = document.getElementById("mario");
var block = document.getElementById("pipe");
var counter=0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
}
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue ("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue ("left"));

    if (blockLeft<35 && blockLeft > 0 && characterTop>=130) {
        block.style.animation = "none";
        alert("Mario Loses! Score: " + Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";

    } else {
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
        
    }
}, 10);

