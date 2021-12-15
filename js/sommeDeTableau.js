const containerSommeDeTableau = document.querySelector('.sommeDeTableau');

let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tableau2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

let somme1 = 0;
let somme2 = 0;


function calculSommeTableau(){
    for(let i = 0; i < tableau1.length; i++){
        somme1 += tableau1[i];
    }
    for(let j = 0; j < tableau2.length; j++){
        somme2 += tableau2[j];
    }

    let tableau3 = [];

    tableau3.push(somme1, somme2);

    for(let k = 0; k < tableau3.length; k++){
        const affichageTableau3 = document.createElement('p');
        affichageTableau3.innerHTML = 'somme des tableaux present dans un nouveau tableau => ' + tableau3[k];
        containerSommeDeTableau.appendChild(affichageTableau3)
        console.log(tableau3[k]);
    }
}
calculSommeTableau();
