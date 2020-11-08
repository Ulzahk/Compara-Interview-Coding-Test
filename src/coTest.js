class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  decreasePrice(i, totalDecrease) {
    if(this.products[i].price > 0) {
      this.products[i].price -= totalDecrease
    }
  }

  sellInEvaluator(i){
    if(this.products[i].sellIn > 0){
      this.decreasePrice(i, 1)
    } else {
      this.products[i].price === 1 ? this.decreasePrice(i, 1) : this.decreasePrice(i, 2)
    }
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.sellInEvaluator(i)
      this.products[i].sellIn --
    }
    return this.products
  }
}


class FullCoverage extends CarInsurance {
  constructor(products = []) {
    super(products);
  }

  increasePrice(i, totalIncrease){
    if (this.products[i].price < 50) {
      this.products[i].price += totalIncrease
    }
  }

  sellInEvaluator(i){
    if(this.products[i].sellIn > 0) {
      this.increasePrice(i, 1)
    } else {
      this.products[i].price === 49 ? this.increasePrice(i, 1) : this.increasePrice(i, 2)
    }
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.sellInEvaluator(i)
      this.products[i].sellIn --
    }
    return this.products
  }
}

class MegaCoverage extends CarInsurance {
  constructor(products = []){
    super(products)
  }
  updatePrice() {
    return this.products
  }
}

class SpecialFullCoverage extends FullCoverage {
  constructor(products = []){
    super(products)
  }

  increasePrice(i, totalIncrease){
    super.increasePrice(i, totalIncrease)
  }

  sellInLessOrEqualThan5(i){
    if(this.products[i].sellIn <= 5) {
      if(this.products[i].price === 49){
        this.increasePrice(i, 1)
      } else if (this.products[i].price === 48) {
        this.increasePrice(i, 2)
      } else {
        this.increasePrice(i, 3)
      }
    }
  }

  sellInLessOrEqualThan10(i){
    if(this.products[i].sellIn <= 10 && this.products[i].sellIn > 5) {
      this.products[i].price === 49 ? this.increasePrice(i, 1) : this.increasePrice(i, 2)
    }
  }

  sellInMoreThan10(i){
    if(this.products[i].sellIn > 10){
      this.increasePrice(i, 1)
    }
  }

  sellInEvaluator(i){
    if(this.products[i].sellIn > 0 ){
      this.sellInLessOrEqualThan5(i)
      this.sellInLessOrEqualThan10(i)
      this.sellInMoreThan10(i)
    } else{
      this.products[i].price *= 0
    }
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.sellInEvaluator(i)
      this.products[i].sellIn --
    }
    return this.products
  }
}

class SuperSale extends CarInsurance {
  constructor(products = []){
    super(products)
  }

  decreasePrice(i, totalDecrease){
    super.decreasePrice(i, totalDecrease)
  }

  sellInEvaluator(i){
    if(this.products[i].sellIn > 0) {
      this.decreasePrice(i, 2)
    } else {
      this.products[i].price === 2 ?
      this.decreasePrice(i, 2) : this.products[i].price === 3 ?
      this.decreasePrice(i, 3) : this.decreasePrice(i, 4)
    }
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].price === 1 ? this.decreasePrice(i, 1) : this.products[i].price
      this.sellInEvaluator(i)
      this.products[i].sellIn --
    }
    return this.products
  }
}

module.exports = {
  Product,
  CarInsurance,
  FullCoverage,
  MegaCoverage,
  SpecialFullCoverage,
  SuperSale,
}
