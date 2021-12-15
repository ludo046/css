const containerRecherMin = document.querySelector('.rechercheMin');
let array7 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let min = array7[0];

function rechercheMin(){
    for(let i = 0; i < array7.length; i++){
        if(array7[i] < min){
            min = array7[i]
        }
    }
    const affichageMin = document.createElement('p')
    affichageMin.innerHTML = 'valeur max du tableau => ' + min;
    containerRecherMin.appendChild(affichageMin)
}
rechercheMin();