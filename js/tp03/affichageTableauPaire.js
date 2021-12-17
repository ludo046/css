const containerTableauPaire = document.querySelector('.containerTableauPaire');
let array2 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let nombre = []
function affichageTableauPaire(){
for(let i = 0; i < array2.length; i++){
    if(array2[i]%2 == 0){
        nombre.push(array2[i])
    }
}
for(let j = 0; j < nombre.length; j++){
    const affichageTableauPaire = document.createElement('p');
    affichageTableauPaire.innerHTML = 'les elements pairs du tableau => ' + nombre[j];
    containerTableauPaire.appendChild(affichageTableauPaire);
}
}
affichageTableauPaire();