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
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].price > 0) {
        if(this.products[i].sellIn > 0) {
            this.products[i].price --
        } else {
          this.products[i].price === 1 ?
          this.products[i].price -- : this.products[i].price -= 2
        }
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
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].price < 50) {
        if(this.products[i].sellIn > 0) {
            this.products[i].price ++
        } else {
          this.products[i].price === 49 ?
          this.products[i].price ++ : this.products[i].price += 2
        }
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

class SpecialFullCoverage extends CarInsurance {
  constructor(products = []){
    super(products)
  }
  updatePrice() {
      for (var i = 0; i < this.products.length; i++) {
        if(this.products[i].sellIn > 0 ){
          if(this.products[i].price < 50){
            if(this.products[i].sellIn <= 5){
              this.products[i].price === 49 ? 
              this.products[i].price ++ : this.products[i].price === 48 ? 
              this.products[i].price += 2 : this.products[i].price += 3
            } else if (this.products[i].sellIn <= 10){
              this.products[i].price === 49 ?
              this.products[i].price ++ : this.products[i].price += 2
            } else {
              this.products[i].price ++
            }
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
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].price === 1 ?
      this.products[i].price -- : this.products[i].price
      if (this.products[i].price > 0) {
        if(this.products[i].sellIn > 0) {
          this.products[i].price -= 2
        } else {
          this.products[i].price === 2 ?
          this.products[i].price -= 2 : this.products[i].price === 3 ?
          this.products[i].price -= 3 : this.products[i].price -= 4
        }
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
