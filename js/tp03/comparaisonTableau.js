const containerComparaisonTableau = document.querySelector('.comparaisonTableau');
let array9 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let array10 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;

function comparaison() {
    array9.forEach(function(element){
     if(array10.includes(element)){
        return true;
     }
    })

  let trouve = array9.find(function(nombre) {
    return array10.includes(nombre);
  })
   
  const  compare = document.createElement('p');
  compare.innerHTML = 'les element en commun des deux tableaux => ' + trouve;
  containerComparaisonTableau.appendChild(compare);


}
comparaison();