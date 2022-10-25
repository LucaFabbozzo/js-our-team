// **MILESTONE 0:**
// Creare l’array di oggetti con le informazioni fornite.
// **MILESTONE 1:**
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// **MILESTONE 3:**
// Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
// **BONUS:**
// Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card


const output = document.querySelector('.row');


const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "img/barbara-ramos-graphic-designer.jpg"
  }
];


//aggettivi
team[0].adjectives = "Great Team Leader always Untiring";
team[1].adjectives = "Unconventional Girl";
team[2].adjectives = "With clear Ideas";
team[3].adjectives = "Little Angie";
team[4].adjectives = "Problem Solver";
team[5].adjectives = "Always Smiling";


for(let infos of team) {

  
  let card = `
  <div class="col py-4">
    <div class="card" style="width: 18rem;">
      <img src="${infos.photo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">${infos.name}</h5>
        <p class="card-text text-center">${infos.role}</p>
        <p class="card-adjectives text-center" style="font-size: 0.9rem">${infos.adjectives}</p>
      </div>
    </div>
  </div>
 `;

  output.innerHTML += card;

}

