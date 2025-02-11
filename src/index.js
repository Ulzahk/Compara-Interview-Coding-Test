const { Product, CarInsurance, FullCoverage, MegaCoverage, SpecialFullCoverage, SuperSale }  = require('./coTest')

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6)
]

let productsAtDayZeroCarInsurance = []
let productsAtDayZeroFullCoverage = []
let productsAtDayZeroMegaCoverage = []
let productsAtDayZeroSpecialFullCoverage = []
let productsAtDayZeroSuperSale = []

const productSorter = (productsList) => {
  productsList.forEach((product) => {
    switch(product.name) {
      case ('Full Coverage'):
        productsAtDayZeroFullCoverage.push(product)
        break
      case ('Mega Coverage'):
        productsAtDayZeroMegaCoverage.push(product)
        break
      case ('Special Full Coverage'):
        productsAtDayZeroSpecialFullCoverage.push(product)
        break
      case ('Super Sale'):
        productsAtDayZeroSuperSale.push(product)
        break
      default:
        productsAtDayZeroCarInsurance.push(product)
        break
    }
  })
}

productSorter(productsAtDayZero)

const carInsurance = new CarInsurance(productsAtDayZeroCarInsurance)
const fullCoverage = new FullCoverage(productsAtDayZeroFullCoverage)
const megaCoverage = new MegaCoverage(productsAtDayZeroMegaCoverage)
const specialFullCoverage = new SpecialFullCoverage(productsAtDayZeroSpecialFullCoverage)
const superSale = new SuperSale(productsAtDayZeroSuperSale)

const productPrinter = (product) => {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
}

for (let i = 1; i <= 30; i ++) {
  console.log(`-------- day ${i} --------`)
  console.log('name, sellIn, price')
  carInsurance.updatePrice().forEach(productPrinter)
  fullCoverage.updatePrice().forEach(productPrinter)
  megaCoverage.updatePrice().forEach(productPrinter)
  specialFullCoverage.updatePrice().forEach(productPrinter)
  superSale.updatePrice().forEach(productPrinter)
  console.log('')
}