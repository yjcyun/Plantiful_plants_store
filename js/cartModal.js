export const showCartModal = () => {
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

export const showTotals = () => {
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
