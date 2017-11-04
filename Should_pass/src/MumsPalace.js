class MumsPalace {
  constructor () {
    this.allMyCakeShops = []
  }

  addCakeShop (newId, newFirstName, newFlavour, newPlace) {
    var newCakeShop = new CakeShop(newId, newFirstName, newFlavour, newPlace, this)
    this.allMyCakeShops.push(newCakeShop)
  }

  findCakeShop (targetShopId) {
    let foundShop = null
    for (let aShop of this.allMyCakeShops) {
      if (aShop.id === targetShopId) {
        foundShop = aShop
        break
      }
    }
    return foundShop
  }

  sortCakeShop () {
    this.allMyCakeShops.sort(function (a, b) {
      return a.id - b.id
    })
  }

  getCakeShops () {
    this.sortCakeShop()
    let out = ''
    for (let aCakeShop of this.allMyCakeShops) {
      out += aCakeShop + '\n'
    }
    return out
  }

  getCakeShopsWithTwoCakes () {
    this.sortCakeShop()
    let out = ''
    for (let aCakeShop of this.allMyCakeShops) {
      if (aCakeShop.hasTwoCakes()) {
        out += aCakeShop + '\n'
        out += aCakeShop.getCakes()
      }
    }
    return out
  }
}
