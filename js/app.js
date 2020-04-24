// show loader when loading...
window.addEventListener('load', () => document.querySelector('.loader').classList.add('hideLoader'));

const CreatePlants = (() => {
  const plants = [];

  // template
  class Plant {
    constructor(size, sizeDescription, name, img, price, best, featured, description) {
      this.size = size;
      this.sizeDescription = sizeDescription;
      this.name = name;
      this.img = img;
      this.price = price;
      this.best = best;
      this.featured = featured;
      this.description = description;
    };
  };

  // create plant function
  function createPlant(size, sizeDescription, name, img, price, best, featured, description) {
    const plant = new Plant(size, sizeDescription, name, img, price, best, featured, description);
    plants.push(plant);
  };

  // make plants
  function makePlants() {
    // small
    createPlant('small', 'Small 6"-10" tall', 'anthurium superbum', 'img/small-1.jpg', '23', true, false, 'Best selling plant from our store. Grab it before it`s gone!');
    createPlant('small', 'Small 6"-10" tall', 'snake plant', 'img/small-2.jpg', '25', false, true, 'Our staff`s pick. A wonderful addition to');
    createPlant('small', 'Small 6"-10" tall', 'pink princess', 'img/small-3.jpg', '20', false, false, 'Pink pincess is lorem ipsum blah blooo');
    createPlant('small', 'Small 6"-10" tall', 'zanzibar gem', 'img/small-4.jpg', '15', false, false, 'You can`t go wrong with carefree plants');
    createPlant('small', 'Small 6"-10" tall', 'lorem ipsum', 'img/small-5.jpg', '20', true, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates.');
    // medium
    createPlant('medium', 'Medium 9"-15" tall', 'purple rain', 'img/medium-1.jpg', '37', false, true, 'Lorem ipsum dolor sit amet consectetur');
    createPlant('medium', 'Medium 9"-15" tall', 'mammillaria', 'img/medium-2.jpg', '45', true, false, 'Best selling plant from our store. Grab it before it`s gone!');
    createPlant('medium', 'Medium 9"-15" tall', 'coronavirus', 'img/medium-3.jpg', '40', false, false, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, volupta');
    // large
    createPlant('large', 'Large 15"-30" tall', 'cereus peruvianus', 'img/large-1.jpg', '80', false, true, 'Lorem ipsum dolor sit amet elit. Itaque');
    createPlant('large', 'Large 15"-30" tall', 'banana tree', 'img/large-2.jpg', '100', false, true, 'You can`t go wrong with carefree plants');
    createPlant('large', 'Large 15"-30" tall', 'euphorbia trigona', 'img/large-3.jpg', '85', true, false, 'ipsum dolor, sit amet consectetur adipisicing elit.');
    createPlant('large', 'Large 15"-30" tall', 'pineapple plant', 'img/large-4.jpg', '130', false, false, 'You can`t go wrong with carefree plants');
  };

  makePlants();

  // best sellers
  const bestSellers = plants.filter(plant => plant.best === true);
  const featuredPlants = plants.filter(plant => plant.featured === true);
  return {
    plants,
    bestSellers,
    featuredPlants
  };
})();

// index.html
const DiplayFeaturedPlants = ((CreatePlants) => {
  const featuredPlants = CreatePlants.featuredPlants;

  const featured = document.getElementById('featured-container');

  document.addEventListener('DOMContentLoaded', () => {
    featured.innerHTML = '';

    let data = '';
    featuredPlants.forEach(plant => {
      data += `
      <!-- single item -->
      <div class="col-lg-3 col-md-6">
        <div class="card px-2 pt-4 mb-5 featured-card curved-border">
          <div>
            <img src="${plant.img}" class="featured-img card-img-top" alt="featured plant">
            <div class="featured-icons text-center my-4">
              <button class="btn featured-btn">
                <i class="fas fa-shopping-cart fa-lg fa-fw d-flex justify-content-center align-items-center py-2"></i>
              </button>
              <button class="btn featured-btn">
                <i class="far fa-heart fa-lg fa-fw d-flex justify-content-center align-items-center py-2"></i>
              </button>
            </div>
          </div>
          <div class="featured-text px-2 text-center my-auto">
            <h5 class="text-capitalize font-weight-bold featured-title">${plant.name}</h5>
            <p class="card-text">${plant.description}</p>
            <p class="featured-price font-weight-bold">$<span>${plant.price}</span></p>
          </div>
        </div>
      </div>
      <!-- end of single item -->
      `
    });

    featured.innerHTML = data;
  });

})(CreatePlants);

// store.html
const DisplayBestSellers = ((CreatePlants) => {
  const bestSellers = CreatePlants.bestSellers;

  const favouriteInfo = document.getElementById('favourite-info');

  document.addEventListener('DOMContentLoaded', () => {
    favouriteInfo.innerHTML = '';

    let data = '';
    bestSellers.forEach(best => {
      data += `
      <!-- single item -->
      <div class="col-md-3 col-6">
        <div class="card plant-card">
          <img src="${best.img}" alt="plant" class="card-img-top plant-img">
          <!-- card body -->
          <div class="card-body px-0">
            <div class="plant-info d-flex justify-content-between">
              <!-- first flex child -->
              <div class="d-flex plant-text justify-content-start align-items-center">
                <h6 class="text-capitalize">${best.name}</h6>
              </div>
              <!-- second flex child -->
              <div class="plant-value align-self-center">
                $<span class="plant-price">${best.price}</span>
              </div>
            </div>
          </div>
          <!-- end of card body -->
        </div>
      </div>
      <!-- end of single item -->`
    });

    favouriteInfo.innerHTML = data;
  });












})(CreatePlants);

const DisplayPlants = ((CreatePlants) => {
  const plants = CreatePlants.plants;

  const store = document.getElementById('store-container');

  document.addEventListener('DOMContentLoaded', () => {

    store.innerHTML = '';
    let data = '';

    plants.forEach(plant => {
      data += `
      <!-- single item -->
      <div class="col-6 col-lg-4 single-plant ${plant.size}">
        <div class="card plant-card">
          <img src="${plant.img}" alt="plant" class="card-img-top plant-img">
          <!-- card body -->
          <div class="card-body px-0">
            <div class="plant-info d-flex justify-content-between">
              <!-- first flex child -->
              <div class="plant-text justify-content-start">
                <h6 class="text-muted">${plant.sizeDescription}</h6>
                <h5 class="text-capitalize">${plant.name}</h5>
              </div>
              <!-- second flex child -->
              <div class="plant-value align-self-center">
                $<span class="plant-price">${plant.price}</span>
              </div>
            </div>
          </div>
          <!-- end of card body -->
        </div>
      </div>
      <!-- end of single item -->`
    });

    store.innerHTML = data;

  });
})(CreatePlants);

const FilterPlants = (() => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterTitle = document.querySelector('.filtered-plants')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const value = e.target.dataset.filter;
      const singlePlant = document.querySelectorAll('.single-plant');

      singlePlant.forEach(plant => {
        if (value === 'all') {
          plant.style.display = 'block';
        } else {
          (!plant.classList.contains(value) ? plant.style.display = 'none' : plant.style.display = 'block');
        }
      });

      // change title when filtered
      filterTitle.textContent = value;

    });
  });
















})();