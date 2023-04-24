// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  const width = 2*w
  const height = 2*h
  return width + height
}

const circleArea = r => {
  const radius = r*r
  return 3.14 * radius
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = (...params) => {
  // should return the current state of shopping cart
 let cart = []
 cart = params
 return cart
}

const addItemToCart = (cart, newItem) => {
  cart.push(newItem)
  return cart
}

const getNumItemsInCart = (array) => {
  // should return the total quantity of items in cart
  console.log(array)
  let quantity = 0;
  for (let i = 0; i < array.length; i++) {
   if (array[i] instanceof Object) {
      quantity++;
   }
}
  return quantity
}

const removeItemFromCart = (arr, attr, value) => {
  // should remove item from shopping cart
  let i = arr.length;
    while(i--){
       if(arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 
           arr.splice(i,1);

       }
    }
    let quantity = 0;
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] instanceof Object) {
        quantity++;
     }
  }
    return quantity
    
}


module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
