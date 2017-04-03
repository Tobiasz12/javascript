
var text ='Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var fristWord = text.split(' ',1);
var animal = 'Zielone slonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace(fristWord, animalUpperCased);
var partOfText = textCharsAfter.slice(0,text.length/2);

console.log(partOfText);
