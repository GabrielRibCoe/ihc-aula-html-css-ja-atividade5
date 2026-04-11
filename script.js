function onclickbutton() {

    const texto = document.getElementById("texto")
    var emo = document.getElementById("emo")
    var rock = document.getElementById("rock")

    texto.innerHTML = "Modo trevoso ativado"

    document.body.style.backgroundColor = "black";

    emo.style.display = "block";
    rock.style.display = "block";
    texto.style.color = "white";




}