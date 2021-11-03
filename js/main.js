/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
*/

/* 
1. chiedere all'utente il livello di difficoltà del gioco tra: facile (1), medio(2), diffile(3). => promnt
2. crerae in base alla scelta della difficoltà una griglia con 100, 81 o 49 celle => ciclo for con if
3. inserire all'interno di ogni singola cella il numero relativo
4. ogni qualvolta l'utente clicca su di una cella questa si colora mostrando il numero => clik
*/


let contenitoreCelle = document.getElementById("container-griglia");

let difficoltà = parseInt(prompt("scegli la difficoltà del gioco tra 1, 2, 3"));

let livello;
if (difficoltà == 1){
    livello = 100;
} else if (difficoltà == 2){
    livello = 81;
} else if (difficoltà == 3){
    livello = 49;
}

function creareCelle ( elementoGenerato , classeInserita ){
    let cella = document.createElement (elementoGenerato);
    cella.classList.add (classeInserita);
    return cella
}

for ( let i = 1; i <= livello; i++) {

    let nuoveCelle = creareCelle("div", "facile");
    contenitoreCelle.append(nuoveCelle);
    
    console.log(nuoveCelle);

        nuoveCelle.addEventListener("click",
            function(){
                nuoveCelle.classList.add("cliccato");
                nuoveCelle.innerText = i;
            }
        );
}






