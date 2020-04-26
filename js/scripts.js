//Responsive Navbar

function responsiveNav() {
	var x = document.getElementById("myTopnav");
	var y =document.getElementById("myTopnavItems");
	if (x.className === "topnav" && y.className === "topnav-items") {
	  x.className += " responsive";
	  y.className += " responsive";
	} else {
	  x.className = "topnav";
	  y.className = "topnav-items";
	}
}

function openNav() {
    document.getElementById("myTopnav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("myTopnav").style.width = "0";
  }