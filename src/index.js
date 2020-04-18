
document.addEventListener("DOMContentLoaded", function(e) {
  fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response) {
  return response.json();
})
.then(function(json){
  json.message.forEach(image => renderImage(image);
})
});
function renderImage(url) {
  const div = document.getElementById('dog-image-container');
  const image = document.createElement("img");
  image.src = url;
  div.appendChild(image);
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(results => {
    let breeds = Object.keys(results.message);
    breeds.forEach(breed => renderBreed(breed))
    changeTextColor();
  });
}

function renderBreed(breed) {
  const breedList = document.getElementById('#dog-breeds')
  const dogBreed = document.createElement("li")
  const dropdown = document.getElementById('breed-dropdown')
  dogBreed.innerText = breed
  if (dogBreed.innerText.startsWith(dropdown.value)) {
    breedList.appendChild(dogBreed)
  }
}

function changeTextColor() {
  const listItems = document.querySelectorAll('#dog-breeds li');
  listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function () {
      this.style.color = 'red';
    });
  });
};