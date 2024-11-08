const rangeInput = document.querySelector('#Range'); 
const Price1 = document.querySelector('#price1');
const Price2 = document.querySelector('#price2'); 
const Price3 = document.querySelector('#price3'); 

rangeInput.addEventListener('input', function() {
    if (rangeInput.value == 10) {
      Price1.innerText = '$19.99';
      Price2.innerText = '$24.99';
      Price3.innerText = '$39.99';
    } else {
      Price1.innerText = '$199.99';
      Price2.innerText = '$249.99';
      Price3.innerText = '$399.99';
    }
  });
rangeInput.addEventListener('click',input);