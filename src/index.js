const { Product, CarInsurance, FullCoverage, MegaCoverage, SpecialFullCoverage, SuperSale }  = require('./coTest')

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Low Coverage', 5, 7),
];

const productsAtDayZeroFullCoverage = [
  new Product('Full Coverage', 2, 0),
]

const productsAtDayZeroMegaCoverage = [
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
]

const productsAtDayZeroSpecialFullCoverage = [
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
]

const productsAtDayZeroSuperSalce = [
  new Product('Super Sale', 3, 6),
]

const carInsurance = new CarInsurance(productsAtDayZero)
const fullCoverage = new FullCoverage(productsAtDayZeroFullCoverage)
const megaCoverage = new MegaCoverage(productsAtDayZeroMegaCoverage)
const specialFullCoverage = new SpecialFullCoverage(productsAtDayZeroSpecialFullCoverage)
const superSale = new SuperSale(productsAtDayZeroSuperSalce)

const productPrinter = (product) => {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
};

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