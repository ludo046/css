const containerAffichageInverse = document.querySelector('.affichageInverse');
let arrayAffichageInverse = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function affichageInverse(){
    for( let i = 0; i < arrayAffichageInverse.length; i++){
        const tableau = document.createElement('p');
        tableau.innerHTML = "elements du tableau => " + arrayAffichageInverse[i];
        containerAffichageInverse.appendChild(tableau)
    }
    const reverse = arrayAffichageInverse.reverse();
    for(let j = 0; j < reverse.length; j++){
        const tableauReverse = document.createElement('p');
        tableauReverse.innerHTML = "elements du tableau inversé => " + reverse[j];
        containerAffichageInverse.appendChild(tableauReverse)
    }
    const arrayCopy = [...arrayAffichageInverse];
}
affichageInverse();