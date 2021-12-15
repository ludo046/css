
const containerSuivant = document.querySelector('.containerSuivant');

let num = 5;


function affichageSuivant(){
    for(let i = num; i <= 10; i++){
        const affichageSuivant = document.createElement('p');
        affichageSuivant.innerHTML = 'affichage suivant : ' + i;
        containerSuivant.appendChild(affichageSuivant)
    }
}
affichageSuivant();