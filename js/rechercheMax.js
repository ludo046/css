const containerRecherMax = document.querySelector('.rechercheMax');
let array6 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let max = array6[0];

function rechercheMax(){
    for(let i = 0; i < array6.length; i++){
        if(array6[i] > max){
            max = array6[i]
        }
    }
    const affichageMax = document.createElement('p')
    affichageMax.innerHTML = 'valeur max du tableau => ' + max;
    containerRecherMax.appendChild(affichageMax)
}
rechercheMax();