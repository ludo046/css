const containerTableau = document.querySelector('.containerTableau');
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function affichageTableau(){
for(let i = 0; i < array.length; i++){
    const affichageTableau = document.createElement('p');
    affichageTableau.innerHTML = 'element du tableau => ' + array[i];
    containerTableau.appendChild(affichageTableau)
}
}
affichageTableau();