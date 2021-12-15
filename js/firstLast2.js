const containerFirstLast2 = document.querySelector('.firstLast2')
const array13 = [2,3,7,8,6];
const valid2 = document.createElement('p');

function firstLast2(){

    if(array13.length >= 1 && array13[0] === array13.length-1){
        valid2.innerHTML = 'true';
        containerFirstLast2.appendChild(valid2)
    } else {
        valid2.innerHTML = 'false';
        containerFirstLast2.appendChild(valid2)
    }

}
firstLast2()