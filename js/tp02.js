const container = document.querySelector('.container');

let num1 = 5;
let num2 = 7;

let b1 = true;
let b2 = false;

function calcul(){
    const add = num1 + num2;

    const addition = document.createElement("p");
    addition.innerHTML = num1 + ' + ' + num2 + ' = ' +add;
    container.appendChild(addition);

    const sous = num1 - num2;
    const soustraction  = document.createElement('p');
    soustraction.innerHTML = num1 + ' - ' + num2 + ' = ' + sous;
    container.appendChild(soustraction);

    const mult = num1 * num2;
    const multiplication = document.createElement('p');
    multiplication.innerHTML = num1 + ' x ' + num2 + ' = ' + mult;
    container.appendChild(multiplication);

    const div = num1 /  num2;
    const division = document.createElement('p');
    division.innerHTML = num1 + ' / ' + num2 + ' = ' + div;
    container.appendChild(division);

    const modu = num1 % num2;
    const modulo = document.createElement('p');
    modulo.innerHTML = num1 + ' % ' + num2 + ' = ' + modu;
    container.appendChild(modulo);
    
    const supp = num1 > num2;
    const supperieur = document.createElement('p');
    supperieur.innerHTML = num1 + ' > ' + num2 + ' = ' + supp;
    container.appendChild(supperieur)

    const inf = num1 < num2;
    const inferieur = document.createElement('p');
    inferieur.innerHTML = num1 + ' < ' + num2 + ' = ' + inf;
    container.appendChild(inferieur);

    const egal = num1 == num2;
    const egale = document.createElement('p');
    egale.innerHTML = num1 + ' = ' + num2 + ' = ' + egal;
    container.appendChild(egale);

    const dif = num1 != num2;
    const different = document.createElement('p');
    different.innerHTML = num1 + ' different ' + num2 + ' = ' + dif;
    container.appendChild(different)
}
calcul();

function booleen(){
    const ope1 = b1 && b2;
    const operation1 = document.createElement('p');
    operation1.innerHTML = b1 + ' && ' + b2 + ' = ' + ope1;
    container.appendChild(operation1)

    const ope2 = b1 || b2;
    const operation2 = document.createElement('p');
    operation2.innerHTML = b1 + ' || ' + b2 + ' = ' + ope2;
    container.appendChild(operation2);

    const ope3 = !b1;
    const operation3 = document.createElement('p');
    operation3.innerHTML = '!' + b1 + ' = ' + ope3;
    container.appendChild(operation3);

    const ope4 = !b2;
    const operation4 = document.createElement('p');
    operation4.innerHTML = '!' + b2 + ' = ' + ope4;
    container.appendChild(operation4);
}
booleen();