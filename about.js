console.log("hello world");

function setNewImage(){
document.getElementById("gato1").src = alert("YOU'RE AWESOME!");
};
function setOldImage(){
document.getElementById("gato1").src ="https://i.pinimg.com/750x/48/31/1c/48311cb0e0a177f2305392828e9ef850.jpg"
};

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);