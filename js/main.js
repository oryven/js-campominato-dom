/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
(come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
La partita termina quando il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi se ci pensate dovrete tenere traccia del punteggio).
*/

/* 
1. chiedere all'utente il livello di difficoltà del gioco tra: facile (1), medio(2), diffile(3). => promnt
2. crerae in base alla scelta della difficoltà una griglia con 100, 81 o 49 celle => ciclo for, if e function
3. inserire all'interno di ogni singola cella il numero relativo
4. generare 16 numeri casuali e tutti diversi
  4.1 salvare questi numeri => array
  4.2 associare i numeri generati (casuali) con quelli della griglia  
5. se l'utente clicca su uno di questi numeri vuol dire che avrà trovato una bomba
  5.1 la cella in questione si colorerà di rosso
  5.2 la partita termina
6. se l'utente non trova una bomba la cella si colora di azzurro
  6.1 terminare la partita se l'utente ha selezionate tutte le celle senza bombe
7. al termine della partita ( punti 5.1 / 6.1) mostrare le eventuli bombe non trovate e il punteggio
*/

let contenitoreCelle = document.getElementById("container-griglia");

let difficolta = parseInt(prompt("scegli la difficoltà del gioco tra 1, 2, 3"));

const bombe = [];
console.log (bombe)

let max;
let min = 1;

if (difficolta == 1){
    inizio(100, "facile");
    max = 100;
} else if (difficolta == 2){
    inizio(81, "media");
    max = 81
} else if (difficolta == 3){
    inizio(49, "difficile");
    max = 49;
}

function creareCelle ( elementoGenerato , classeInserita ){
    let cella = document.createElement (elementoGenerato);
    cella.classList.add (classeInserita);
    return cella
}

function inizio(livello, classe) {
    for ( let i = 0; i <= livello; i++) {

        let nuoveCelle = creareCelle("div", classe);
        nuoveCelle.id = i;
        contenitoreCelle.append(nuoveCelle);

        nuoveCelle.addEventListener("click",
            function(){
                nuoveCelle.classList.add("cliccato");
                nuoveCelle.innerText = i;
                const id = parseInt(nuoveCelle.id);
                console.log('hai clickato su id ', id);

                if(bombe.includes(id)) {
                    nuoveCelle.classList.add("bomba");
                    alert ("Hai perso");
                }
            }   
        )
    }
}

// while (bombe.length < 16){
//    // 0 e 1 => io voglio numeri compresi tra 1 e 49
//    /*
//     quando genera 0, io voglio che sia 1
//     quando genera 1, vuoi 48
//    */

//     const numeroBombe = Math.floor(Math.random()*(max)+min);

//     if(bombe.includes(numeroBombe) == false){ 
//         bombe.push(numeroBombe);
//     }
// }




// const gridCont = document.getElementById("grid");
// const levl = parseInt(prompt("livello?"));
// var points = 0;

// // const generaElemento = (elementGen, classPlus) => {
// //     let node = document.createElement(elementGen);
// //     node.classList.add(classPlus);
// //     return node
// // }

// // genero l'array bombe
// const bombList = bombGen(16, 1, levl);
// // console.log(bombList);

// for(let i = 1; i <= 64; i++){

//     let newElem = generaElemento("div", "square", i);    

//     newElem.addEventListener("click",
//         function(){
//             // newElem.classList.add("clicked-true");
//             console.log(this);
//             this.classList.add("clicked-true");

//             let numInt = parseInt(this.innerText);

//             // se è una bomba agiungo altra classe
//             if(bombList.includes(numInt)){
//                 this.classList.add("boom");
//                 console.log("BOOOM! FINE GIOCO!!, hai totalizzato punti: ", points);
//             } else {
//                 ++points;
//                 console.log("BRAVO/A!!! punteggio momentaneo a:", points);
//             }
//             // console.log(this.innerText);
//             // sennò aggiungo punto
//         }


//         // () => {
//         //     // newElem.classList.add("clicked-true");
//         //     console.log(this);
//         //     this.classList.add("clicked-true");
//         // }
//     );

//     gridCont.appendChild(newElem);
// }




// // funzioni utili

// //  crea elemento del DOM
// function generaElemento(elementGen, classPlus, tex) {
//     let node = document.createElement(elementGen);
//     node.append(tex);
//     node.classList.add(classPlus);
//     return node
// }

// // crea array di numeri bomba
// function bombGen (bombnum, min, max){
//     let arrBombs = [];
//     while(arrBombs.length < bombnum){
//         let num = getRandomInt(min, max);
//         if(!arrBombs.includes(num)){
//             arrBombs.push(num);
//         }
//     }
//     return arrBombs

// }

// // crea numeri random tra min e max
// function getRandomInt(min, max) {
//     min = Math.ceil(min) || 0;
//     max = Math.floor(max) || Number.MAX_SAFE_INTEGER;
//     let result = Math.floor(Math.random() * (max - min + 1)) + min;
//     return result;
//   }
