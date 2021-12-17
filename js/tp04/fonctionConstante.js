const containerFonctionConstante = document.querySelector('.fonctionConstante');

const unefonction = () => {
    return 33;
}

const affichageFonctionConstante = document.createElement('p');
affichageFonctionConstante.innerHTML = 'resultat de la fonction constante => ' + unefonction();
containerFonctionConstante.appendChild(affichageFonctionConstante);