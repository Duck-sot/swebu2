function roll() {
    dice = document.getElementsByClassName("dice");
    let dmg = 0;
    for (let i = 0; i < 8; i++) {
        number = Math.floor(Math.random() * 6) + 1;
        dice[i].src = "dice" + number + ".png";
        dmg += number;
    }
    document.getElementById("dmg").innerHTML = dmg;
    document.getElementById("savedmg").innerHTML = dmg / 2;
}

function sro(id) {

    number = Math.floor(Math.random() * 6) + 1;
    document.getElementById(id).src = "dice" + number + ".png";

}