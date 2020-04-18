console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoad", function(e) {
  fetch("https://dog.ceo/api/breeds/image/random/4")then(function(response) {
  return response.json();
})
.then(function(json){
  
})
});
