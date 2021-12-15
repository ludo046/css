
const container10fois = document.querySelector('.container10fois');

function affichage10fois(){
    for(let i = 0; i < 10; i++){
        const affichage10fois = document.createElement('p');
        affichage10fois.innerHTML = 'affiche 10 fois => ludo';
        container10fois.appendChild(affichage10fois)
    }
}
affichage10fois();