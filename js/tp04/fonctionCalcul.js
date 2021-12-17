const containerFonctionCalcul = document.querySelector('.fonctionCalcul');
const num1 = 12
const num2 = 13

const calcul = (a, b) => {
   return a * b + a + b
}

const affichageFonctionCalcul = document.createElement('p')
affichageFonctionCalcul.innerHTML = "resultat de l'operation a * b + a + b avec des nombre fournis en parametre de la fonction => " + calcul(num1, num2);
const resultat = document.createElement('p');
resultat.innerHTML = 'si on passait en parametres des chaines de caracteres la fonction retournerais NaN (not a number)'
containerFonctionCalcul.appendChild(affichageFonctionCalcul);
containerFonctionCalcul.appendChild(resultat);