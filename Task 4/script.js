/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


function info(a){
	const body = document.getElementById("output");
	for(let i = 0; i < a.length; i++){
		const div = document.createElement('div');
		const bla = document.createElement('div');
        div.append(bla);
        bla.classList.add("bla");
		bla.innerText = a[i].brand;
		const brand = document.createElement('div');
        div.append(brand);
        brand.classList.add("brand");
		brand.innerText = a[i].models;
		body.append(div);
	}	
}
let cars = {};
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
		cars = output;
		info(cars);
        
});
