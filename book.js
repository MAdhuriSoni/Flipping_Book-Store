bookdata();

function bookdata() {
	fetch('https://api.myjson.com/bins/1h3vb3')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
			//console.log(arr)  
			var arr = data.books;
			findImages(arr)
		})
		.catch(function (error) {
			console.log('Request failed', error)
		});
}



function findImages(arr) {

var flip = document.getElementById("flip");
	for (var i in arr) {
		
		var flipContainer = document.createElement("div")
		var flipper = document.createElement("div")
		flipper.setAttribute("ontouchstart", "this.classList.toggle('hover')")
		flipper.setAttribute("class", "flipper")
		flipContainer.classList.add( "flipContainer")
		
		
		
		var front = document.createElement("div")
		var cover = arr[i].portada;
		var cover = arr[i].detalle;
		front.classList.add("front")
		var image = document.createElement("img");
		image.setAttribute("src", cover);
		
		front.appendChild(image)
		flipContainer.appendChild(front)
		

		
		var back = document.createElement("div")
		back.classList.add("back")
		var title = document.createElement("h1")
		title.innerHTML = arr[i].titulo
		back.appendChild(title)
		var p = document.createElement("p")
		p.innerHTML = arr[i].descripcion
		back.appendChild(p)
		flipContainer.appendChild(back)

		
		flipper.appendChild(flipContainer)
		flip.appendChild(flipper)
		
		
	}
}


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toUpperCase();
    $(".flipper .flipContainer").filter(function() {
      $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
    });
  });
});


