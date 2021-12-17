const containerAffichagePartiel = document.querySelector('.affichagePartiel');
let array5 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function entierSupA3(){
for(let i = 0; i < array5.length; i++){
    if(array5[i] > 3){
        const affichageSup3 = document.createElement('p')
        affichageSup3.innerHTML = 'element du tableau superieur à 3 => ' + array5[i];
        containerAffichagePartiel.appendChild(affichageSup3);
    }
}
}
entierSupA3();

function entierPairs(){
    for(let i = 0; i < array5.length; i++){
        if(array5[i] % 2 == 0){
            const affichagePairs = document.createElement('p')
            affichagePairs.innerHTML = 'element du tableau pairs => ' + array5[i];
            containerAffichagePartiel.appendChild(affichagePairs);
        }
    }
}
entierPairs()

function indexPairs(){
    for(let i = 0; i < array5.length; i++){
        if(i % 2 == 0){
            const affichageIndexPairs = document.createElement('p')
            affichageIndexPairs.innerHTML = 'element du tableau avec un index pairs => ' + array5[i];
            containerAffichagePartiel.appendChild(affichageIndexPairs);
        }
    }
}
indexPairs()

function entierImpairs(){
    for(let i = 0; i < array5.length; i++){
        if(array5[i] % 2 !== 0){
            const affichageImpairs = document.createElement('p')
            affichageImpairs.innerHTML = 'element du tableau impairs => ' + array5[i];
            containerAffichagePartiel.appendChild(affichageImpairs);
        }
    }
}
entierImpairs()