function roll(){
    dice = document.getElementsByClassName("dice");
    let dmg = 0;
    for(let i = 0; i <= 8; i++){
        Number=Math.floor(Math.random()*6)+1;
        dice[i].src = "dice" + Number + ".png" ;
        dmg+=Number;
    }
    document.getElementById
}