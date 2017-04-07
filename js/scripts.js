var list = document.getElementById("list");
var add = document.getElementById('addElem')

add.addEventListener('click', function() {
	 var itemsByTagName = document.getElementsByTagName("li").length -4;
	list.innerHTML += '<li>item '+ itemsByTagName + '</li>'  

  
});

console.log(list)











