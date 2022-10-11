/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function lbCalculator(kg){
    return kg * 2.2046
};
function gCalculator(kg){
    return kg / 0.0010000
};
function ozCalculator(kg){
    return kg * 35.274
};
const weightInfo = document.querySelector("form");
weightInfo.addEventListener("submit", info);

function info(e){
    e.preventDefault();
    const weightInfo = document.getElementById("search").value;
    document.querySelector("li:nth-of-type(1)").innerHTML = "Svarai(lb) " + lbCalculator(weightInfo);
    document.querySelector("li:nth-of-type(2)").innerHTML = "Gramai(g) " + gCalculator(weightInfo);
    document.querySelector("li:nth-of-type(3)").innerHTML = "Uncijos(oz) " + ozCalculator(weightInfo);
}
