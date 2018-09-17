/**
 * Created by sstienface on 17/09/2018.
 */

alert("Bonjour cher visiteur");

document.getElementById('monElementHTML').innerText = "Mon nouveau texte";

function maFonction(prenom,nom)
{
    var nomComplet = prenom+" "+nom;
    alert("Bonjour "+nomComplet);
    return nomComplet;
}

var maVariable = 35;

if(maVariable>=35)
{
    alert("Ce code sera executé");
}
if(maVariable<35)
{
    alert("Ce code ne sera pas executé");
}


document.getElementById('monElementHTML').addEventListener('click', function (event) {
    console.log(event);
    alert('Mon élément a été cliqué');
},false);


var div = document.createElement("div");
document.body.appendChild(div);

var divSupprime = document.getElementById('monElementHTML');
document.body.removeChild(divSupprime);

var monImage = document.getElementById('monImage');
monImage.width = 450+"px";

monImage.style.width = "100px";