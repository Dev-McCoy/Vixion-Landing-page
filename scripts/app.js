var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var body = document.querySelector("body");

	
	menuBtn.addEventListener('click', function(){
		if (sideNav.style.right == "-250px") {
			sideNav.style.right = "0";
		}
		else{
			sideNav.style.right = "-250px";
		}
	})
	
