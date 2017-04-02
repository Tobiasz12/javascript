
var text ='Papugi kosza trawe, unoszac sie nad ziemia 15 centymetrów, na czerwonych dywanach.'
var animal = 'Zielone slonie';
var animalUpperCased = animal.toUpperCase();
text = text.split('Papugi').join(animalUpperCased);
var partOfText = text.slice(0,text.length/2);
console.log(partOfText);


// tutaj raz działa i raz nie działa raczej jest to zle. Ogólne to problem polega na zamianie pierwszego słowa bez podania go w split, bo tak to działa

var text ='Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace(theString, animalUpperCased);
theString = text.split(" ");	
var partOfText = textCharsAfter.slice(0,text.length/2);
console.log(partOfText);
