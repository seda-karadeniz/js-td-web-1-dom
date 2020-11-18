// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 8 : « Couleurs » :
1. Demandez à l'utilisateur de choisir la couleur de texte et la couleur de fond qu'il souhaite appliquer aux titres
   (indiquez-lui qu'il doit vous fournir la couleur souhaitée sous son nom anglais ou bien en utilisant le format hexadécimal ou RGB).
   Le message pourrait être celui-ci : 'Entrez la couleur de texte que vous souhaitez appliquer aux titres
   (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :' ;
2. Utilisez ces couleurs pour satisfaire les préférences de votre utilisateur
*/
/* const colorTitle = prompt("Entrez la couleur de texte que vous souhaitez appliquer aux titres (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB)");
const lesTitres = document.querySelectorAll("h1");
lesTitres.style.color = colorTitle;
console.log(lesTitres.style.color);
 */

/* impossible de mettre une couleur a plusieur element (tableau)
 document.querySelectorAll("h1") ne fonctionnera pas sans une boucle car renvoi plusieur element
 document.querySelectorAll("h1")[0] fonctionne car dans le tableau selectionne un seul element*/

var colorTitle = prompt("Entrez la couleur de texte que vous souhaitez appliquer aux titres (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB)");

var titles = document.querySelectorAll("h1");
for (var i = 0; i < titles.length; i++) {
    titles[i].style.color = colorTitle;
} 
