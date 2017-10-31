/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CakeShops', () => {
    var theMumsPalace
	//var should = require('chai').should()
    beforeEach(() => {
      theMumsPalace = Controller.setup()
    })

    it('should have added 4 CakeShop', () => {
      should(theMumsPalace.allMyCakeShops.length).to.be(4)
    })

    it('should have correctly set details for each CakeShop', () => {
      let aCakeShop
      aCakeShop = theMumsPalace.sortCakeShop()
      aCakeShop = theMumsPalace.allMyCakeShops[0]
      should(aCakeShop).to.be.ok()
      should(aCakeShop.id).to.be('01')
      should(aCakeShop.firstName).to.be('The Bagel Shop')
      should(aCakeShop.flavour).to.be('Chocolate')
      should(aCakeShop.place).to.be('Moorhouse')

      aCakeShop = theMumsPalace.allMyCakeShops[1]
      should(aCakeShop).to.be.ok()
      should(aCakeShop.id).to.be('02')
      should(aCakeShop.firstName).to.be('Hot Crossed Buns')
      should(aCakeShop.flavour).to.be('Vanilla')
      should(aCakeShop.place).to.be('Linwood')

      aCakeShop = theMumsPalace.allMyCakeShops[2]
      should(aCakeShop).to.be.ok()
      should(aCakeShop.id).to.be('03')
      should(aCakeShop.firstName).to.be('Sugar Booger')
      should(aCakeShop.flavour).to.be('Red Velvet')
      should(aCakeShop.place).to.be('Shirley')

      aCakeShop = theMumsPalace.allMyCakeShops[3]
      should(aCakeShop).to.be.ok()
      should(aCakeShop.id).to.be('04')
      should(aCakeShop.firstName).to.be('Patty Cakes')
      should(aCakeShop.flavour).to.be('Butterscotch')
      should(aCakeShop.place).to.be('Hornby')
    })
  })
})
