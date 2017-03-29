 getTriangleArea = function getTriangleArea(a, h) {

 	if ( (a <= 0) || (h <= 0) ) {
	console.log('Nieprawidłowe dane')
	
	} else {
		return a * h / 2;
	}
}

// zmienne pola trójkąta

console.log( getTriangleArea(10,6) )
console.log( getTriangleArea(5,6) )
console.log( getTriangleArea(2,6) )

