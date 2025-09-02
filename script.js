const ranglar = document.querySelectorAll(".rang_card");
const cards = document.querySelectorAll(".card");
const colors = ["blue","red","green","yellow"]
let rangla = 'white'
ranglar.forEach((rang, i) => {
  rang.addEventListener("click", () => {
    cards.forEach(card=>{
      rangla = colors[i]
      card.style =`background-color : ${colors[i]}`}
    );
  });
});
const shakllar = document.querySelectorAll(".shakl_box div");


const clipaths = [
  "polygon(50% 0%, 0% 100%, 100% 100%)", 
  "circle(50% at 50% 50%)",              
  "inset(0)",                            
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" // s4
];

shakllar.forEach((shakl, i) => {
  shakl.addEventListener("click", () => {
    cards.forEach(card => {
        card.style = `background-color : ${rangla};clip-path : ${clipaths[i]}`
    });
  });
});