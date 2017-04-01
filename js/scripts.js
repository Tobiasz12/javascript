var text ='Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace(theString, animalUpperCased);
theString = text.split(" ")[1];	
var partOfText = textCharsAfter.slice(0,text.length/2);
console.log(partOfText);




// kurde no nie wiem jak to zrobić uzywając jedynie String.prototype.split() w sensie wiem ale nie wiem jak zamienić 
//pierwszy wyraz bez pomocy replace

var text ='Papugi kosza trawe, unoszac sie nad ziemia 15 centymetrów, na czerwonych dywanach.'
var animal = 'Zielone slonie';
var animalUpperCased = animal.toUpperCase();
text = text.split('Papugi').join(animalUpperCased);
var partOfText = text.slice(0,text.length/2);
console.log(partOfText);


