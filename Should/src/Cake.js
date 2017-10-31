class Cake {
  constructor (theCakeShop, newId, newCakeName, newOrigin, newCost) {
    this.myCakeShop = theCakeShop
    this.id = newId
    this.cakeName = newCakeName
    this.origin = newOrigin
    this.cost = newCost
  }

  toString () {
    let result = ''
    result += '	' + this.cakeName + ' (' + this.origin + ') worth $' + this.cost.toString()
    return result
  }
}