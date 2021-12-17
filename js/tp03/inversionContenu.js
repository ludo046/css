const containerInversionContenu = document.querySelector('.inversionContenu');
let array4 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let copyArray = [...array4.reverse()];

function inversionContenu(){
for(let i = 0; i < array4.length; i++){
    const affichageArray = document.createElement('p');
    affichageArray.innerHTML = 'element du tableau de base => ' + array4[i];
    containerInversionContenu.appendChild(affichageArray);
}
for(let i = 0; i < copyArray.length; i++){
    const affichageCopyArray = document.createElement('p');
    affichageCopyArray.innerHTML = 'element du tableau inversé => ' + array4[i];
    containerInversionContenu.appendChild(affichageCopyArray)
}
}
inversionContenu();