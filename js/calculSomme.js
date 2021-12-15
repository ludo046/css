const containerSomme = document.querySelector('.containerSomme');
let entier = 5;

function calculSomme(){
    const table = [];
    let somme = 0;
    for(let i = 0; i < entier; i++){
        table.push(i)
    }
    for(let j = 0; j < table.length; j++){
        somme += table[j];
    }
    const total = document.createElement('p');
    total.innerHTML = 'la somme de 5 => ' + somme;
    containerSomme.appendChild(total)
}
calculSomme();