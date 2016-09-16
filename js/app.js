window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	boton.addEventListener("click", function() {
		
	});

	var boton2 = document.getElementById("superCri");
	boton2.addEventListener("click", function() {
		
	var color = document.getElementById("input").value;
	if (color=="blue"){
		document.getElementById("color1").style.border = "5px solid red";
		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "0px solid red";
	} else if (color=="green"){
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "5px solid red";
		document.getElementById("color3").style.border = "0px solid red";
	} else if (color=="black"){
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "5px solid red";
	}
		
	});
	
});