class CakeShop {
  constructor (newId, newFirstName, newFlavour, newPlace, theMumsPalace) {
    this.id = newId
    this.firstName = newFirstName
    this.flavour = newFlavour
    this.place = newPlace
    this.myMumsPalace = theMumsPalace
    this.allMyCakes = []
  }

  toString () {
    return this.firstName + ', ' + this.flavour + '. ' + '<' + this.id + '>' 
  }

  addCake (newId, newCakeName, newOrigin, newCost) {
    var newCake = new Cake(this, newId, newCakeName, newOrigin, newCost)
    this.allMyCakes.push(newCake)
  }

  sortCakes () {
    this.allMyCakes.sort(function (a, b) {
      if (a.cakeName !== b.cakeName) {
        return a.cakeName > b.cakeName
      }
      return b.cost - a.cost
    })
  }

  hasTwoCakes () {
    return this.allMyCakes.length === 2
  }

  getCakes () {
    var aCake, out
    this.sortCakes()
    out = ''
    for (aCake of this.allMyCakes) {
      out += aCake + '\n'
    }
    return out
  }
}