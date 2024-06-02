let widthbotao = 6;
let fontbotao = 10;

document.getElementById("botaosim").style.width = widthbotao + "vh"
document.getElementById("botaosim").style.height = widthbotao + "vh"
document.getElementById("botaosim").style.fontSize = fontbotao + "pt"

function nao(){
    if(widthbotao < 48){
        widthbotao *= 2
        fontbotao *= 2
    }else{
        widthbotao = 48
    }
    document.getElementById("botaosim").style.width = widthbotao + "vh"
    document.getElementById("botaosim").style.height = widthbotao + "vh"
    document.getElementById("botaosim").style.fontSize = fontbotao + "pt"
}