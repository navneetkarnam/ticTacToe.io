var p1 = prompt("Enter player1's Name");
var p2 = prompt("Enter player2's Name");
var n1 = document.querySelector(".p1");
var n2 = document.querySelector(".p2");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
var b5 = document.querySelector("#b5");
var b6 = document.querySelector("#b6");
var b7 = document.querySelector("#b7");
var b8 = document.querySelector("#b8");
var b9 = document.querySelector("#b9");

var x = false;

n1.textContent = p1;
n1.classList.add("turn");
n2.textContent = p2;




b1.addEventListener("click",function(){
	
		if(!x){
			b1.textContent = "X";
			b1.style.fontSize = "50px";
			b1.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b1.textContent = "O";
			b1.style.fontSize = "50px";
			b1.style.textAlign = "center";
			x = false;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b2.addEventListener("click",function(){
		if(!x){
			b2.textContent = "X";
			b2.style.fontSize = "50px";
			b2.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b2.textContent = "O";
			b2.style.fontSize = "50px";
			b2.style.textAlign = "center";
			x = false;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b3.addEventListener("click",function(){

		if(!x){
			b3.textContent = "X";
			b3.style.fontSize = "50px";
			b3.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b3.textContent = "O";
			b3.style.fontSize = "50px";
			b3.style.textAlign = "center";
			x = false;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
	
});


b4.addEventListener("click",function(){
	
		if(!x){
			b4.textContent = "X";
			b4.style.fontSize = "50px";
			b4.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b4.textContent = "O";
			b4.style.fontSize = "50px";
			b4.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b5.addEventListener("click",function(){
	
		if(!x){
			b5.textContent = "X";
			b5.style.fontSize = "50px";
			b5.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b5.textContent = "O";
			b5.style.fontSize = "50px";
			b5.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b6.addEventListener("click",function(){
	
		if(!x){
			b6.textContent = "X";
			b6.style.fontSize = "50px";
			b6.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b6.textContent = "O";
			b6.style.fontSize = "50px";
			b6.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b7.addEventListener("click",function(){
	
		if(!x){
			b7.textContent = "X";
			b7.style.fontSize = "50px";
			b7.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b7.textContent = "O";
			b7.style.fontSize = "50px";
			b7.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
	
});

b8.addEventListener("click",function(){
	
		if(!x){
			b8.textContent = "X";
			b8.style.fontSize = "50px";
			b8.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b8.textContent = "O";
			b8.style.fontSize = "50px";
			b8.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});

b9.addEventListener("click",function(){
	
		if(!x){
			b9.textContent = "X";
			b9.style.fontSize = "50px";
			b9.style.textAlign = "center";
			x = true;
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n2.classList.add("turn");
		}
		else{
			b9.textContent = "O";
			b9.style.fontSize = "50px";
			b9.style.textAlign = "center";
			x = false; 
			n2.classList.remove("turn");
			n1.classList.remove("turn");
			n1.classList.add("turn");
		}
});



