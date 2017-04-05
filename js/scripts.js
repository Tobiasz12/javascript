var list = document.getElementById("list");
var add = document.getElementById('addElem')

add.addEventListener('click', function() {
	list.innerHTML += '<li>item</li>'

     var itemsByTagName = document.getElementsByTagName("li");
    list.innerHTML += itemsByTagName.length - 5; 
  
});

console.log(list)

