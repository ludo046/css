const containerFirstLast = document.querySelector('.firstLast')
const array12 = [2,3,7,8,6];
const valid = document.createElement('p');

function firstLast(){

    if(array12.length >= 1 || array12[0] === 6 && array12.length-1 === 6){
        valid.innerHTML = 'true';
        containerFirstLast.appendChild(valid)
    } else {
        valid.innerHTML = 'false';
        containerFirstLast.appendChild(valid)
    }

}
firstLast()