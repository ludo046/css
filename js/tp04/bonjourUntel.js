const containerBonjourUntel = document.querySelector('.bonjourUntel');
const nom = 'Germain';

const bonjour = (name) => {
    return 'Bonjour ' + name;
}

const affichageBonjourUntel = document.createElement('p');
affichageBonjourUntel.innerHTML ='affichage bonjour + nom passer en parametre de la fonction => ' + bonjour(nom);
containerBonjourUntel.appendChild(affichageBonjourUntel);