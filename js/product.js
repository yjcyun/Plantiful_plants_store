import { data } from './data.js';

// show loader when loading...
window.addEventListener('load', () => document.querySelector('.loader').classList.add('hideLoader'));


const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get('id');


const DisplayProduct = ((plantData) => {
  const singlePlant = document.querySelector('#singlePlant');
  singlePlant.innerHTML = '';

  plantData.forEach(plant => {

    if (plant.id == urlId) {
      singlePlant.innerHTML=`
      <div class="col-md-5">
      <div class="product-img">
        <img src="${plant.img}" class="img-fluid mb-3" alt="plant product">
      </div>
    </div>
    <div class="col-md-6 col-sm-9 col-11 mx-auto">
      <div class="product-content mb-5">
        <h1 class="text-capitalize mb-3">${plant.name}</h1>
        <h4>$<span>${plant.price}</span></h4>
        <h5>Get a taste of the tropical forest</h5>
      </div>
      <!-- first line -->
      <div class="product-description d-flex mb-4">
        <i class="fas fa-ruler-vertical mr-4 align-self-center fa-2x fa-fw ruler"></i>
        <div class="">
          <p class="text-muted text-uppercase p-0 m-0">pot & plant combined size</p>
          <p class="m-0">${plant.sizeDescription}</p>
        </div>
      </div>
      <!-- end of first line -->
      <!-- second line -->
      <div class="product-description d-flex mb-4">
        <i class="fas fa-sun mr-4 align-self-center fa-fw fa-2x p-1 sun"></i>
        <div class="">
          <p class="text-muted text-uppercase p-0 m-0">light</p>
          <p class="m-0">${plant.light}</p>
        </div>
      </div>
      <!-- end of second line -->
      <!-- third line -->
      <div class="product-description d-flex">
        <i class="fas fa-hand-holding-heart fa-2x mr-4 align-self-center fa-fw p-1 holding-heart"></i>
        <div class="">
          <p class="text-muted text-uppercase p-0 m-0">care</p>
          <p class="m-0">${plant.care}</p>
        </div>
      </div>
      <!-- end of third line -->
      <button class="product-btn w-100 my-5 mx-auto btn btn-lg btn-dark text-capitalize">Add to cart</button>
      <div class="shipping-guide d-flex justify-content-between" data-toggle="modal"
        data-target="#shipping-guideScrollable">
        <p class="text-capitalize mt-2 my-2 align-self-center">shipping guide</p>
        <i class="fas fa-plus align-self-center"></i>
      </div>
    </div>
      `
    }

  })


})(data);