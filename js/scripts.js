var text ='Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi', animalUpperCased);
var partOfText = textCharsAfter.slice(0,text.length/2);

console.log(partOfText);





