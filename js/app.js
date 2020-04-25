// show loader when loading...
window.addEventListener('load', () => document.querySelector('.loader').classList.add('hideLoader'));

// const data = [
//   {
//     id: 1,
//     size: 'small',
//     sizeDescription: 'Small 6"-10" tall',
//     name: 'anthurium superbum',
//     img: 'img/small-1.jpg', price: '23',
//     best: true,
//     featured: false,
//     description: 'Best selling plant from our store. Grab it before it`s gone!'
//   },
//   {id:2,
//     size:'small', sizeDescription:'Small 6"-10" tall', name:'snake plant', img'img/small-2.jpg',price:'25', false, true, 'Our staff`s pick. A wonderful addition to'}

// ]

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
    }
  };

  // create plant function
  function createPlant(size, sizeDescription, name, img, price, best, featured, description) {
    const plant = new Plant(size, sizeDescription, name, img, price, best, featured, description);
    plants.push(plant);
  };

  // make plants
  function makePlants() {
    // data.forEach((datum) => {
    //   creaePlant(datum.size, datum.size)
    // })

    // small
   // createPlant('small', 'Small 6"-10" tall', 'anthurium superbum', 'img/small-1.jpg', '23', true, false, 'Best selling plant from our store. Grab it before it`s gone!');
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
      <div class="col-sm-6 col-lg-4 single-plant ${plant.size}">
        <div class="card plant-card">
          <div class="plant-img-div">
           <a href="product.html" id="singlePlantLink">
             <img src="${plant.img}" alt="plant" class="card-img-top plant-img">
           </a>
            <button class="btn btn-outline-dark add-btn" id="open">add to cart</button>
          </div>
          <!-- card body -->
          <div class="card-body px-0">
            <div class="plant-info d-flex justify-content-between">
              <!-- first flex child -->
              <div class="plant-text justify-content-start">
                <h6 class="text-muted">${plant.sizeDescription}</h6>
                <a href="product.html" class="text-dark">
                 <h5 class="text-capitalize plant-name">${plant.name}</h5>
                </a>
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

    showCartModal();
    addToCart();

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

const showCartModal = () => {
  const close = document.getElementById('cart-close');
  const open = document.querySelectorAll('#open');
  const cartModal = document.getElementById('cart');
  const continueBtn = document.querySelector('.continue-btn');

  // show modal
  open.forEach(btn => {
    btn.addEventListener('click', () => {
      cartModal.classList.add('show-cart-modal');
    });
  });

  close.addEventListener('click', () => {
    cartModal.classList.remove('show-cart-modal');
  });
  continueBtn.addEventListener('click', () => {
    cartModal.classList.remove('show-cart-modal');
  })

  window.addEventListener('click', e => e.target === cartModal ? cartModal.classList.remove('show-cart-modal') : false);
};

const addToCart = () => {
  const open = document.querySelectorAll('#open');

  open.forEach(btn => {
    btn.addEventListener('click', e => {
      if (e.target.parentElement.classList.contains('plant-img-div')) {
        let fullPath = e.target.parentElement.children[0].children[0].src;
        let position = fullPath.indexOf('img');
        let partialPath = fullPath.slice(position);

        const item = {};
        // img
        item.img = `${partialPath}`;

        // plant name
        let name = e.target.parentElement.parentElement.children[1].children[0].children[0].children[1].children[0].textContent;
        item.name = name;

        // price
        let price = e.target.parentElement.parentElement.children[1].children[0].children[1].children[0].textContent;
        item.price = +price;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item d-flex pb-3';

        cartItem.innerHTML = `
        <img src="${item.img}" class="img-fluid mx-3" alt="plant" style="width:70px;height:70px">
        <div class="item-text ">
          <p class="text-uppercase font-weight-bold  m-0 p-0" id="cart-item-title">${item.name}</p>
          <p class="font-weight-bold m-0 p-0">$<span id="cart-item-price">${item.price}</span></p>
          <p class="m-0 p-0">qty: <span id="cart-item-qty">1</span>
          </p>
        `;


        const cartModal = document.querySelector('.cart-modal');
        const total = document.querySelector('#cart-subtotal-container');

        cartModal.insertBefore(cartItem, total);

        showTotals();
      }
    });
  });
};

const showTotals = () => {
  const total = [];

  const items = document.querySelectorAll('#cart-item-price');
  items.forEach(item => {
    total.push(+item.textContent);
  });

  const totalMoney = total.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);

  const finalMoney = totalMoney.toFixed(2);
  //update total price
  document.querySelector('#cart-item-total').textContent = finalMoney;
  //update number of items
  document.querySelectorAll('.cart-item-number').forEach(number => {
    number.textContent = total.length;
  });

  // add s depending on the # of items added
  const plural = document.querySelector('#plural');
  total.length <= 1 ? plural.style.display = 'none' : plural.style.display = 'inline-block';

  // show message depending on the total
  const message = document.querySelector('#message');
  finalMoney >= 100 ?
    message.textContent = 'Your order qualifies for FREE SHIPPING' :
    message.textContent = `You are $${100 - finalMoney} away from FREE SHIPPING`;
};

const continueShopping = () => {

}


















// product.html
// const DisplaySinglePlant = ((CreatePlants) => {
//   const plants = CreatePlants.plants;

//   const singlePlant = document.querySelector('#singlePlant');
//   const singlePlantLink = document.querySelectorAll('#singlePlantLink');


//   document.addEventListener('DOMContentLoaded', () => {

//     singlePlant.innerHTML = '';
//     let data = '';

//     singlePlantLink.forEach(single => {
//       const fullPath = single.src;
//       const position = fullPath.indexOf('img');
//       const partialPath = fullPath.slice(position);

//       plants.forEach(plant => {
//         if (plant.img === partialPath) {
//           data += `
//           <div class="col-md-5">
//             <div class="product-img">
//               <img src="${plant.img}" class="img-fluid mb-3" alt="plant product">
//               <img src="img/large-1-2.jpg" class="img-fluid mb-3" alt="plant product">
//             </div>
//           </div>
//           <div class="col-md-6 col-sm-9 col-11 mx-auto">
//             <div class="product-content mb-5">
//               <h1 class="text-capitalize mb-3">banana plant</h1>
//               <h4>$<span>125</span></h4>
//               <h5>Get a taste of the tropical forest</h5>
//             </div>
//             <!-- first line -->
//             <div class="product-description d-flex mb-4">
//               <i class="fas fa-ruler-vertical mr-4 align-self-center fa-2x fa-fw ruler"></i>
//               <div class="">
//                 <p class="text-muted text-uppercase p-0 m-0">pot & plant combined size</p>
//                 <p class="m-0">Large - 20"-30"H x 11"W</p>
//               </div>
//             </div>
//             <!-- end of first line -->
//             <!-- second line -->
//             <div class="product-description d-flex mb-4">
//               <i class="fas fa-sun mr-4 align-self-center fa-fw fa-2x p-1 sun"></i>
//               <div class="">
//                 <p class="text-muted text-uppercase p-0 m-0">light</p>
//                 <p class="m-0">This plant can manage in a bright locations as well as a few metres away from a window.</p>
//               </div>
//             </div>
//             <!-- end of second line -->
//             <!-- third line -->
//             <div class="product-description d-flex">
//               <i class="fas fa-hand-holding-heart fa-2x mr-4 align-self-center fa-fw p-1 holding-heart"></i>
//               <div class="">
//                 <p class="text-muted text-uppercase p-0 m-0">care</p>
//                 <p class="m-0">Carefree-Water sparingly, only a few times a month.</p>
//               </div>
//             </div>
//             <!-- end of third line -->
//             <button class="product-btn w-100 my-5 mx-auto btn btn-lg btn-dark text-capitalize">Add to cart</button>
//             <div class="shipping-guide d-flex justify-content-between" data-toggle="modal"
//             data-target="#shipping-guideScrollable">
//               <p class="text-capitalize mt-2 my-2 align-self-center">shipping guide</p>
//               <i class="fas fa-plus align-self-center"></i>
//           </div>
//         </div>
//           `
//         }
//         return;
//       });
//     });


//     singlePlant.innerHTML = data;
//   });
// })(CreatePlants);




