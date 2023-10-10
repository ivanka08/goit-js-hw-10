import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import Notiflix from "notiflix";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');


breedSelect.addEventListener('change', () => {
  const selectedBreed = breedSelect.value;
  if (selectedBreed) {
    loader.style.display = 'block';
    error.style.display = 'none';
    catInfo.style.display = 'none';
    
      
 fetchCatByBreed(selectedBreed)
      .then((data) => {
        const cat = data[0];
        catInfo.innerHTML = `
          <img src="${cat.url}" alt="${cat.breeds[0].name}" />
          <h2>${cat.breeds[0].name}</h2>
          <p>${cat.breeds[0].description}</p>
          <p>Temperament: ${cat.breeds[0].temperament}</p>
        `;
        catInfo.style.display = 'block';
        loader.style.display = 'none';
      })
      .catch((err) => {
        loader.style.display = 'none';
        error.style.display = 'block';
        console.error(err);
      });
  } else {
    catInfo.style.display = 'none';
  }
});

const init = () => {
  loader.style.display = 'block';
  error.style.display = 'none';
  catInfo.style.display = 'none';
    
fetchBreeds()
    .then((data) => {
      breedSelect.innerHTML = '<option value="">Select a breed</option>';
      data.forEach((breed) => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
      loader.style.display = 'none';
    })
    .catch((err) => {
      loader.style.display = 'none';
      error.style.display = 'block';
      console.error(err);
    });
};

init();