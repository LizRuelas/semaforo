window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	boton.addEventListener("click", function() {
		document.getElementById("color1").style.border = "3px solid red";

		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "0px solid red";
		
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "3px solid red";
		document.getElementById("color3").style.border = "0px solid red";
	
		document.getElementById("color1").style.border = "0px solid red";
		document.getElementById("color2").style.border = "0px solid red";
		document.getElementById("color3").style.border = "3px solid red";
		
	});

	var boton2 = document.getElementById("superCri");
	boton2.addEventListener("click", function() {
		
	var color = document.getElementById("input").value;
	if (color=="blue"){
		document.getElementById("color1").style.border = "3px solid yellow";
		document.getElementById("color2").style.border = "0px solid yellow";
		document.getElementById("color3").style.border = "0px solid yellow";
	} else if (color=="green"){
		document.getElementById("color1").style.border = "0px solid yellow";
		document.getElementById("color2").style.border = "3px solid yellow";
		document.getElementById("color3").style.border = "0px solid yellow";
	} else if (color=="black"){
		document.getElementById("color1").style.border = "0px solid yellow";
		document.getElementById("color2").style.border = "0px solid yellow";
		document.getElementById("color3").style.border = "3px solid yellow";
	}
		
	});
	
});