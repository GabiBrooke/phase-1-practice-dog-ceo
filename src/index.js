console.log('%c HI', 'color: firebrick')
const breedsArray = [];
document.addEventListener("DOMContentLoaded", () => {
    const dogImageContainer = document.getElementById("dog-image-container");
    //const breedsArray = [];
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          dogImageContainer.appendChild(imageElement);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  //
  document.addEventListener("DOMContentLoaded", () => {
    const breedList = document.getElementById("dog-breeds");
  console.log(breedList)
    // Fetch the dog breeds
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
         const breeds = data.message;
  
        // Add the breeds to the list
        for (const breed in breeds) {
        breedsArray.push(breed)
        const breedItem = document.createElement("li");
        breedItem.textContent = breed;
        breedList.appendChild(breedItem);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
   // Change font color on click
   breedList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const li = event.target;
      li.style.color = "#800080"; 
    }
    
    const breedDropdown = document.getElementById('breed-dropdown');

    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
      });
      
      function filterBreeds(letter) {
         //dogBreeds = document.getElementById('dog-breeds').getElementsByTagName('option');
        breedList.innerHTML = ''
        for (const breed of breedsArray) {
          if (breed.startsWith(letter.toLowerCase())) {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;
          breedList.appendChild(breedItem);
          } 
        }
      }
    })
})

  





