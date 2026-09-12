const addButton = document.getElementById("addP1");
const remButton = document.getElementById("remP1");
const p1Input = document.getElementById("p1cuantity");

addButton.addEventListener('click', function() {
    let valorActual = parseInt(p1Input.value) || 0; 
    if (valorActual >= 99){
    	p1Input.value = 99;
    } else {
    	p1Input.value = valorActual + 1;	
    }
});

remButton.addEventListener('click', function() {
    let valorActual = parseInt(p1Input.value) || 0;
   
    if (valorActual > 1) {
        p1Input.value = valorActual - 1;
    }
});
