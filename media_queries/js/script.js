var w=0;

//cada vez que carge la pagina guardar en una variable w el width

window.onload=function(){
	w = window.innerWidth;
}

//cada vez que cambio el width de la pantalla compruebo si pasa del limite, si es asi realizo un reload de la pagina
window.onresize = function(){ 
	if(window.innerWidth > 1080 && w <= 1080){
		location.reload();
	}
	else if(window.innerWidth <= 1080 && w > 1080){
		location.reload();
	}
}
	
//cargo las caracteristicas de javascript solo si el width es menor que 1080px

if(window.innerWidth < 1080){
	var opacidad2 = 0.25;
	function opacidad(){
		if(opacidad2 == 0.25){
			document.getElementById("x").style.opacity = 1; 
			opacidad2 = 1;
		}
		else if(opacidad2 == 1){
			document.getElementById("x").style.opacity = 0.25; 
			opacidad2 = 0.25;
		}
	}
	var coll = document.getElementsByClassName("opennav");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active1");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} 
			else {
				content.style.display = "block";
			}
		});
	}


	var coll2 = document.getElementsByClassName("opennav");
	var j;

	for (j = 0; j < coll2.length; j++) {
		coll2[j].addEventListener("click", function() {
			this.classList.toggle("active");
			var content2 = this.nextElementSibling;
			if (content2.style.maxHeight){
				content2.style.maxHeight = null;
			} else {
				content2.style.maxHeight = content2.scrollHeight + "px";
			}
		});
	}
}
	