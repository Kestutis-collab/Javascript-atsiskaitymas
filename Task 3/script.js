/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';



function createTable(){
    const thead = document.createElement('thead');
    const login = document.createElement('th');
  thead.append(tr);
    const picture = document.createElement('th');
    const tr = document.createElement('tr');
  tr.append(login, picture);
    const table = document.createElement('table');
  table.append(thead, document.createElement('tbody'));
  let divOutput = document.getElementById("output");
  divOutput.appendChild(table);
}
function data(people){
	try{
	const body = document.getElementById("output");
	people.forEach(people => {
		const div = document.createElement('div');
		const login = document.createElement('div');
		login.innerText = people.login;
		const picture = document.createElement('img');
		picture.src = people.avatar_url;
		const picturediv = document.createElement('div');
		picturediv.append(picture);
        
		div.append(login);
		div.append(picturediv);
		body.append(div);
	});
	}catch(error){
		console.error(error);
	}
}
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
		list = output;      
}).catch(error => console.error(error));
const element = document.getElementById("btn");
element.addEventListener("click",show);

let list = {};

function show(){
	data(list);
    document.getElementById("message").style.visibility="hidden";
}