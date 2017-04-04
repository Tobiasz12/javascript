var list = document.getElementById("list");
var add = document.getElementById('addElem')

add.addEventListener('click', function() {
	list.innerHTML += '<li>item</li>'

     var x = document.getElementsByTagName("li");
    list.innerHTML += x.length;
  
});

console.log(list)

