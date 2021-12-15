const containerCalculMoyenne = document.querySelector('.calculMoyenne');
let array8 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function calculMoyenne(){
    let somme = 0;
    for(let i = 0; i < array8.length; i++){
        somme += array8[i]
    }
    const affichageMoyenne = document.createElement('p');
    affichageMoyenne.innerHTML = 'moyenne du tableau => ' + somme / array8.length;
    containerCalculMoyenne.appendChild(affichageMoyenne)
}
calculMoyenne();