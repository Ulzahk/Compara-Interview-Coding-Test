const assert = require('chai').assert;

const coTest = require('../src/coTest')
const Product = coTest.Product
const CarInsurance = coTest.CarInsurance
const FullCoverage = coTest.FullCoverage
const MegaCoverage = coTest.MegaCoverage
const SpecialFullCoverage = coTest.SpecialFullCoverage
const SuperSale = coTest.SuperSale

describe('Co Tests', () => {
  describe('CarInsurance Class', () => {
    it('Should return a price decreased by 1', () => {
      const coTest = new CarInsurance([ new Product('Low Coverage', 5, 7) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 6)
    })

    it('Should return a price decreased by 2', () => {
      const coTest = new CarInsurance([ new Product('Mid Coverage', 0, 7) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 5)
    })

    it('Should return a price equal to 0', () => {
      const coTest = new CarInsurance([ new Product('Mid Coverage', -5, 1) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 0)
    })
  })
  describe('FullCoverage Subclass', () => {
    it('Should return a price increased by 1', () => {
      const coTest = new FullCoverage([ new Product('Full Coverage', 2, 10) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 11)
    })
    it('Should return a price increased by 2', () => {
      const coTest = new FullCoverage([ new Product('Full Coverage', 0, 10) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 12)
    })
    it('Should return a price equal to 50', () => {
      const coTest = new FullCoverage([ new Product('Full Coverage', 0, 49) ])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 50)
    })
  })

  describe('MegaCoverage Subclass', () => {
    it('Should return price attribute without changes', () => {
      const coTest = new MegaCoverage([new Product('Mega Coverage', 4, 80)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 80)
    })
  })

  describe('SpecialFullCoverage Subclass', () => {
    it('Should return a price increased by 1', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 17, 35)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 36)
    })

    it('Should return a price increased by 2', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 10, 23)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 25)
    })

    it('Should return a price increased by 3', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 5, 46)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 49)
    })

    it('Should return a price equal to 50 when price is 49 and sellIn is <= 5', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 3, 49)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 50)
    })

    it('Should return a price equal to 50 when price is 48 and sellIn is <= 5', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 2, 48)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 50)
    })

    it('Should return a price equal to 50 when price is 49 and sellIn is <= 10', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 8, 49)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 50)
    })

    it('Should return a price equal to 0', () => {
      const coTest = new SpecialFullCoverage([new Product('Special Full Coverage', 0, 35)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 0)
    })
  })

  describe('SuperSale Subclass', () => {
    it('Should return a price decreased by 2', () => {
      const coTest = new SuperSale([new Product('Super Sale', 16, 27)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 25)
    })
    it('Should return a price decreased by 4', () => {
      const coTest = new SuperSale([new Product('Super Sale', -4, 30)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 26)
    })
    it('Should return a price equal to 0 when price is 1', () => {
      const coTest = new SuperSale([new Product('Super Sale', -5, 1)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 0)
    })
    it('Should return a price equal to 0 when price is 2', () => {
      const coTest = new SuperSale([new Product('Super Sale', -5, 2)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 0)
    })
    it('Should return a price equal to 0 when price is 3', () => {
      const coTest = new SuperSale([new Product('Super Sale', -4, 3)])
      const products = coTest.updatePrice()
      assert.equal(products[0].price, 0)
    })
  })
})

