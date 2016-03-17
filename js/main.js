var source;

window.onload = function (){
  source = document.getElementById("big");
  
  var fLink = document.getElementById("first");
  fLink.addEventListener("click", firstImageClicked);
  
  var sLink = document.getElementById("second");
  sLink.addEventListener("click", secondImageClicked);
  
  var tLink = document.getElementById("third");
  tLink.addEventListener("click", thirdImageClicked);
  
  var fLink = document.getElementById("fourth");
  fLink.addEventListener("click", fourthImageClicked);  
  
}

function firstImageClicked() {
  source.src = "assets/product-image-1.jpg";
}

function secondImageClicked() {
  source.src = "assets/product-image-2.jpg";
}

function thirdImageClicked() {
  source.src = "assets/product-image-3.jpg";
}

function fourthImageClicked() {
  source.src = "assets/product-image-4.jpg";
}



