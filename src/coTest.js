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

  decreasePrice(index, totalDecrease) {
    if(this.products[index].price > 0) {
        this.products[index].price -= totalDecrease
    }
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i].sellIn > 0){
      this.decreasePrice(i, 1)
      } else {
        this.products[i].price === 1 ?
        this.decreasePrice(i, 1) : this.decreasePrice(i, 2)
      }
      this.products[i].sellIn --
    }
    return this.products
  }
}


class FullCoverage extends CarInsurance {
  constructor(products = []) {
    super(products);
  }

  increasePrice(index, totalIncrease){
    if (this.products[index].price < 50) {
      this.products[index].price += totalIncrease
    }
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i].sellIn > 0) {
        this.increasePrice(i, 1)
      } else {
        this.products[i].price === 49 ?
        this.increasePrice(i, 1) : this.increasePrice(i, 2)
      }
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

  increasePrice(index, totalIncrease){
    super.increasePrice(index, totalIncrease)
  }
  updatePrice() {
      for (var i = 0; i < this.products.length; i++) {
        if(this.products[i].sellIn > 0 ){
          if(this.products[i].sellIn <= 5){
            this.products[i].price === 49 ? 
            this.increasePrice(i, 1) : this.products[i].price === 48 ? 
            this.increasePrice(i, 2) : this.increasePrice(i, 3)
          } else if (this.products[i].sellIn <= 10){
            this.products[i].price === 49 ?
            this.increasePrice(i, 1) : this.increasePrice(i, 2)
          } else {
            this.increasePrice(i, 1)
          }
        } else{
          this.products[i].price *= 0
        }
      this.products[i].sellIn --
    }
    return this.products
  }
}

class SuperSale extends CarInsurance {
  constructor(products = []){
    super(products)
  }

  decreasePrice(index, totalDecrease){
    super.decreasePrice(index, totalDecrease)
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].price === 1 ?
      this.decreasePrice(i, 1) : this.products[i].price
      if(this.products[i].sellIn > 0) {
        this.decreasePrice(i, 2)
      } else {
        this.products[i].price === 2 ?
        this.decreasePrice(i, 2) : this.products[i].price === 3 ?
        this.decreasePrice(i, 3) : this.decreasePrice(i, 4)
      }
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
