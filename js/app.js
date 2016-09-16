window.addEventListener("load", function() {
	var boton1 = document.getElementById("cri");
	var cont = 1;
	boton1.addEventListener("click", function() {
		if (cont == 1){
            document.getElementById("input").value = "blue";
            document.getElementById("blue").classList.add("border-red");
            document.getElementById("black").classList.remove("border-red");
        }
        if (cont == 2){
            document.getElementById("input").value = "green";
            document.getElementById("green").classList.add("border-red");
            document.getElementById("blue").classList.remove("border-red");
        }
        if (cont == 3){
            document.getElementById("input").value = "black";
            document.getElementById("black").classList.add("border-red");
            document.getElementById("green").classList.remove("border-red");
            cont = 0;
        }
        cont ++;
	});

	var boton2 = document.getElementById("superCri");
	boton2.addEventListener("click", function() {
		
	var color = document.getElementById("input").value;
	if (color=="blue"){
		document.getElementById("blue").style.border = "5px solid red";
		document.getElementById("green").style.border = "0px solid red";
		document.getElementById("black").style.border = "0px solid red";
	} else if (color=="green"){
		document.getElementById("blue").style.border = "0px solid red";
		document.getElementById("green").style.border = "5px solid red";
		document.getElementById("black").style.border = "0px solid red";
	} else if (color=="black"){
		document.getElementById("blue").style.border = "0px solid red";
		document.getElementById("green").style.border = "0px solid red";
		document.getElementById("black").style.border = "5px solid red";
	}
		
	});
	
});