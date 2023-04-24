const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return area of a rectangle", function() {
  const area = utils.area(2,5)
  expect(area).to.be.a("number")
  expect(area).to.equal(10)
})

it("should return a perimeter of a rectangle", function(){
  const perimeter = utils.perimeter(10,15)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(50)
})

it("should return the area of a circle with radius", function(){
  const area = utils.circleArea(5)
  expect(area).to.be.a("number")
  expect(area).to.equal(78.5)
})




// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

const apple = utils.createItem("apple", 0.40)
const orange = utils.createItem("orange", 0.50)
const grapes = utils.createItem("grapes", 0.20)
shoppingCart = [apple, orange, grapes]

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function (){
  const cart = utils.getShoppingCart(shoppingCart)
  expect(cart).to.be.a("array")
  expect(cart[0][0]).to.have.property("name", "apple")
  expect(cart[0][0]).to.have.property("price", 0.40)
  expect(cart[0][1]).to.have.property("name", "orange")
  expect(cart[0][1]).to.have.property("price", 0.50)
  expect(cart[0][2]).to.have.property("name", "grapes")
  expect(cart[0][2]).to.have.property("price", 0.20)
  
})

it("Should add a new item to the shopping cart", function(){
  const newItem =  utils.createItem("kiwi", 0.60)
  const cart = utils.addItemToCart(shoppingCart, newItem)
  expect(cart).to.be.a("array")
  expect(cart[3]).to.have.property("name", "kiwi")
  expect(cart[3]).to.have.property("price", 0.60)

})

it("Should return the number of items in the cart", function() {
  const cartQuantity = utils.getNumItemsInCart(shoppingCart)
  expect(cartQuantity).to.be.a("number")
  expect(cartQuantity).to.equal(4)
})

it("Should remove items from cart", function(){
  const updatedCartQuantity = utils.removeItemFromCart(shoppingCart, "name", "apple")
  expect(updatedCartQuantity).to.be.a("number")
  expect(updatedCartQuantity).to.equal(3)

})

// ========================================================
// Stretch Challenges
// ========================================================

// it("Should update the count of items in the cart")

// it("Should validate that an empty cart has 0 items")

// it("Should return the total cost of all items in the cart")
