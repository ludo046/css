const container1a10 = document.querySelector('.containerAffichage1a10');

function affichage1a10(){
    for(let i = 1; i <= 10; i++){
        const affichageNombre1a10 = document.createElement('p');
        affichageNombre1a10.innerHTML = 'affiche les nombre de 1 a 10 => ' + i;
        container1a10.appendChild(affichageNombre1a10)
    }
}
affichage1a10();