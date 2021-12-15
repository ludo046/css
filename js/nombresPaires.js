const containerNombrePaire= document.querySelector('.containerNombrePaire');

function affichagePaire(){
    for(let i = 0; i <= 10; i=i+2){
        const affichageNombrePaire = document.createElement('p');
        affichageNombrePaire.innerHTML = 'affiche les nombres paires => ' + i;
        containerNombrePaire.appendChild(affichageNombrePaire)
    }
}
affichagePaire();