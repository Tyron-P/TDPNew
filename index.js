'use strict';

// fetch("https://pokeapi.co/api/v2/pokemon/sneasel")
//     .then(res => res.json()).then(json => console.log(json))
//     .catch(err => console.error(err));

// axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
//    .then(response => {
//     const heroes = response.data;
  
//     const squadName = document.createElement("h1");
//     squadName.innerText = heroes.squadName;
//     output.appendChild(squadName);

//     const secretBase = document.createElement("p");
//     secretBase.innerText = "Secret base: " + heroes.secretBase;
//     output.appendChild(secretBase);

//     const homeTown = document.createElement("p");
//     homeTown.innerText = "Hometown: " + heroes.homeTown;
//     output.appendChild(homeTown);

//     const formed = document.createElement("p");
//     formed.innerText = "Formed: " + heroes.formed;
//     output.appendChild(formed);


//     for (let member of heroes.members) {
//         console.log("MEMBER: ", member);
//         const memberSection = document.createElement("section");

//         const memberName = document.createElement("h2");
//         memberName.innerText = member.name;
//         memberSection.appendChild(memberName);

//         // const powers = document.createElement("ul");
    
//         // for (let power of member.powers) {
//         //     const p = document.createElement("li");
//         //     p.innerText = power;
//         //     powers.appendChild(p);
//         // }

//         // memberSection.appendChild(powers);

//         output.appendChild(memberSection);
//     }

// }).catch(err => console.error(err));



//     fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
// .then(function (response){
//         return response.json();
// })
// .then(function(data){
//     document.getElementById("members").innerHTML +=
//     data[i].id + "=>" + data[i].name

//     .catch(err => console.error(err));
// })
// --------------

// axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
// .then (response => { console.log(response.data)
// const kings = response.data;

// let kingN = kings[0].nm;
// console.log(kingN);

// {
//     const memberSection = document.createElement("section");

//     const kingName = document.createElement("h2");
//     kingName.innerText = kingN;
//     kingSection.appendChild(kingName);

//     output.appendChild(kingSection);

// }
// }).catch(err => console.error(err));

// -----

// document.getElementById(`searchInput`).addEventListener("input", function (event) { const search = event.target.value;
//     renderKings(search);
// });

// fucntion renderKings(search){

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
.then (response => { console.log(response.data)
const kings = response.data;

let kingN = kings[0];
console.log(kingN);

{
    const kingSection = document.createElement("div");

    const kingName = document.createElement("h2");
    kingName.innerText = kings.nm;
    kingSection.appendChild(kingName);

    const kingHouse= document.createElement("P");
    kingHouse.innerHTML = "City:" + kings.hse;
    kingSection.appendChild(kingHouse);


    output.appendChild(kingSection);

}
}).catch(err => console.error(err));
