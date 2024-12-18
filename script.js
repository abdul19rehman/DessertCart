const main = document.querySelector(".main-grid");
const cart = document.querySelector(".desserts-bill");
const order = document.querySelector(".confirmed-order");
const emptyCart = document.querySelector(".empty-cart");
const billCart = document.querySelector(".bill-cart");
const billCartContainer = document.querySelector(".bill-card-container");
const grandTotal = document.querySelector(".grandtotal");
const orderConfirmTotal = document.querySelector(".order-confirm-total");
const body = document.querySelector("body");
const confirmBtn = document.querySelector(".confirm-order-btn");
const orderConfirmCard = document.querySelector(".confirm-order-card");
const startOrder = document.querySelector(".new-order-btn");

console.log(billCart);

const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    id: 1,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    id: 2,
  },

  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    id: 3,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    id: 4,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    id: 5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    id: 6,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    id: 7,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    id: 8,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    id: 9,
  },
];

let row = "";
let desserts = "";
let dessertOrder = "";

data.forEach((product) => {
  row += `<div class="flex flex-col w-full">
            <div class="deskImg-${
              product.id
            } flex flex-col justify-center items-center mobileImg-${
    product.id
  }">
              <img
                src="${product.image.desktop}"
                class="rounded-lg md:block hidden hover:scroll-ms-7 border-2 transition-all ease-in-out"
              />
              <img
                src="${product.image.mobile}"
                alt=""
                class="rounded-lg hover:scroll-ms-7 border-2 transition-all ease-in-out md:hidden block"
              />
            </div>

            <div class="flex justify-center items-center">
              <button
                class="cart-button-${
                  product.id
                } rounded-full font-bold bg-white border border-red-400 px-8 p-2 w-2/3 -translate-y-1/2 left-7 flex justify-center items-center"
              >
                Add to cart
              </button>
            </div>
            <div class=" flex justify-center items-center">
            <button
            class="  qty-button-${
              product.id
            } hidden bg-red-600 flex flex-row justify-between items-center gap-2 px-2 py-3 text-white text-xs cursor-pointer rounded-full -translate-y-1/2   w-2/3"
          >
            <!-- Decrement -->
            <div
              class=" decrement-btn-${
                product.id
              } border border-white w-4 h-4 rounded-full flex justify-center items-center"
            >
              <img
                src="./assets/images/icon-decrement-quantity.svg"
                alt=""
                class="${product.id}rounded-full w-2 h-2"
              />
            </div>
            <p class="qty-number-${product.id} text-white">0</p>
            <!-- Increment -->
            <div
              class="increment-btn-${
                product.id
              } border border-white w-4 h-4 rounded-full flex justify-center items-center"
            >
              <img
                src="./assets/images/icon-increment-quantity.svg"
                alt=""
                class="${product.id} rounded-full w-2 h-2"
              />
            </div>
          </button>
          </div>
             
        
            
            <div class="flex flex-col justify-start">
              <p class="text-zinc-500 ${product.id}">${product.category}</p>
              <h2 class="font-bold ${product.id}">${product.name}</h2>
              <p class="text-red-700 ${
                product.id
              }"><span>$</span>${product.price.toFixed(2)}
</p>
            </div>
          </div>`;

  desserts += `<div class="hidden adding-to-bill-${
    product.id
  } flex flex-col gap-2">
                <p class="font-semibold prod-Name-${product.id}">${
    product.name
  }</p>
                <div class="flex gap-2 ">
                  <p class="text-red-500 numberOf-${product.id}">0x</p>
                  <p class="itemSelected-${
                    product.id
                  }">@$${product.price.toFixed(2)}</p>
                  <p class="totalPrice-${product.id}">@$0.00</p>

                  <div class=" ml-auto border  w-5 h-5  rounded-full flex justify-center items-center hover:border-Rose900 border-Rose500">
                    <img
                      src="assets/images/icon-remove-item.svg"
                      alt=""
                      class="cancel-img-${
                        product.id
                      } hover:border-Rose900 w-3 h-3  "
                    />
                  </div>
                </div>
                <hr />
              </div>`;

  dessertOrder += `<div class="hidden adding-to-confirm-${
    product.id
  } flex flex-row my-2 gap-2 bg-red-100 p-2 product-${product.id}">
  <img
    src="${product.image.thumbnail}"
    alt=""
    class="rounded-md w-14 h-14"
  />
  <div class="flex flex-col">
    <p class="product-name">${product.name}</p>
    <div class="flex flex-row gap-3">
      <p class="product-qty-${product.id}">0x</p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
    </div>
  </div>

  <div class="ml-auto font-semibold">
    <p class="product-total-${product.id}">$0.00</p>
  </div>
  <hr />
</div>
`;
});

main.innerHTML = row;
cart.innerHTML = desserts;
order.innerHTML = dessertOrder;

let grandTotalValue = 0;
function UpdateGrandTotal() {
  grandTotal.textContent = `$${grandTotalValue.toFixed(2)}`;
  orderConfirmTotal.textContent = `$${grandTotalValue.toFixed(2)}`;

  if (grandTotalValue > 0) {
    emptyCart.classList.add("hidden");
    billCart.classList.remove("hidden");
  } else {
    emptyCart.classList.remove("hidden");
    billCart.classList.add("hidden");
  }
}

function Action(item) {
  const qtyButton = document.querySelector(`.qty-button-${item.id}`);
  const desktopImg = document.querySelector(`.deskImg-${item.id}`);
  const mobileImg = document.querySelector(`.mobileImg-${item.id}`);
  const addtoCart = document.querySelector(`.cart-button-${item.id}`);
  const plusBtn = document.querySelector(`.increment-btn-${item.id}`);
  const minusBtn = document.querySelector(`.decrement-btn-${item.id}`);
  const itemPrice = document.querySelector(`.totalPrice-${item.id}`);
  const confirmOrderPrice = document.querySelector(`.product-total-${item.id}`);
  const qtyNumberBill = document.querySelector(`.numberOf-${item.id}`);
  const orderConfirmNumber = document.querySelector(`.product-qty-${item.id}`);
  const number = document.querySelector(`.qty-number-${item.id}`);
  const closeBtn = document.querySelector(`.cancel-img-${item.id}`);

  const addingToBill = document.querySelector(`.adding-to-bill-${item.id}`);

  const addingToConfirmOrder = document.querySelector(
    `.adding-to-confirm-${item.id}`
  );

  let increment = 0;
  let itemTotal = 0;

  // console.log(addingToConfirmOrder);
  function DisplayTotal(value) {
    if (value > 0) {
      console.log(" bill items...");
      // addingToBill.classList.remove("hidden");
      addingToBill.classList.remove("hidden");

      addingToConfirmOrder.classList.remove("hidden");
      billCartContainer.classList.remove("hidden");
    } else {
      addingToBill.classList.add("hidden");
    }
    itemPrice.textContent = `$${(value * item.price).toFixed(2)}`;

    confirmOrderPrice.textContent = `$${(value * item.price).toFixed(2)}`;
    number.textContent = value;
    qtyNumberBill.textContent = `${value}x`;
    orderConfirmNumber.textContent = `${value}x`;
    UpdateTotal(value);
  }

  function UpdateTotal(value) {
    const previousTotal = itemTotal;
    itemTotal = value * item.price;
    grandTotalValue += itemTotal - previousTotal;
    UpdateGrandTotal();
  }

  // CART -------------------------
  addtoCart.addEventListener("click", function (e) {
    e.preventDefault();
    qtyButton.classList.remove("hidden");
    console.log(qtyButton);
    addtoCart.classList.add("hidden");
    desktopImg.classList.add("active");
    mobileImg.classList.add("active");
  });

  plusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    increment++;
    console.log("Increment:", increment);
    DisplayTotal(increment);
  });
  console.log("Bill:", addingToBill, "Confirm Order:", addingToConfirmOrder);

  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (increment > 0) {
      increment--;
      DisplayTotal(increment);
      if (increment === 0) {
        ResetCart();
      }
    }
  });

  function ResetCart() {
    desktopImg.classList.remove("active");
    mobileImg.classList.remove("active");
    //
    // addingToConfirmOrder.classList.add("hidden");
    // emptyCart.classList.remove("hidden");
    // billCart.classList.add("hidden");
    addtoCart.classList.remove("hidden");
    qtyButton.classList.add("hidden");
    number.textContent = 0;
  }
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // ResetCart();
    addingToBill.classList.add("hidden");
    grandTotalValue -= itemTotal;
    UpdateGrandTotal();
    increment = 0;
    itemTotal = 0;
  });
}
data.forEach((item) => Action(item));

body.classList.remove("overflow-hidden");

confirmBtn.addEventListener("click", function (e) {
  billCart.classList.add("hidden");
  orderConfirmCard.classList.remove("hidden");
});

startOrder.addEventListener("click", function (e) {
  window.location.reload();
});
