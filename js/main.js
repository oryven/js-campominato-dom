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
    for ( let i = 1; i <= livello; i++) {

        let nuoveCelle = creareCelle("div", classe);
        nuoveCelle.id = i;
        contenitoreCelle.append(nuoveCelle);
        
        console.log(nuoveCelle);

        nuoveCelle.addEventListener("click",
            function(){
                this.classList.add("cliccato");
                this.innerText = i;
                const id = this.id;
                console.log('hai clickato su id ', id);

                let id = parseInt(nuoveCelle.id);

                if(bombe.includes(id)) {
                    this.classList.add("bomba");
                    allert ("Hai perso");
                }
            }   
        )
    }
}

while (bombe.length < 16){
   // 0 e 1 => io voglio numeri compresi tra 1 e 49
   /*
    quando genera 0, io voglio che sia 1
    quando genera 1, vuoi 48
   */

    const numeroBombe = Math.floor(Math.random()*(max-min)+min);

    if(bombe.includes(numeroBombe) == false){ 
        bombe.push(numeroBombe);
    }
}




