/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CakeShops', () => {
    var theMumsPalace
    beforeEach(() => {
      theMumsPalace = Controller.setup()
    })

    it('should have added 4 CakeShop', () => {
     /* should(theMumsPalace.allMyCakeShops.length).to.be(4)*/
    })

    it('should have correctly set details for each CakeShop', () => {
      let aCakeShop
      aCakeShop = theMumsPalace.sortCakeShop()
      aCakeShop = theMumsPalace.allMyCakeShops[0]
      /*(aCakeShop).should.be.ok()
      (aCakeShop.id).should.be('01')
      (aCakeShop.firstName).should.be('The Bagel Shop')
      (aCakeShop.flavour).should.be('Chocolate')
      (aCakeShop.place).should.be('Moorhouse')*/

      aCakeShop = theMumsPalace.allMyCakeShops[1]
     /* (aCakeShop).should.be.ok()
      (aCakeShop.id).should.be('02')
      (aCakeShop.firstName).should.be('Hot Crossed Buns')
      (aCakeShop.flavour).should.be('Vanilla')
      (aCakeShop.place).should.be('Linwood')*/

      aCakeShop = theMumsPalace.allMyCakeShops[2]
     /* (aCakeShop).should.be.ok()
      (aCakeShop.id).should.be('03')
      (aCakeShop.firstName).should.be('Sugar Booger')
      (aCakeShop.flavour).should.be('Red Velvet')
      (aCakeShop.place).should.be('Shirley')*/

      aCakeShop = theMumsPalace.allMyCakeShops[3]
     /* (aCakeShop).should.be.ok()
      (aCakeShop.id).should.be('04')
      (aCakeShop.firstName).should.be('Patty Cakes')
      (aCakeShop.flavour).should.be('Butterscotch')
      (aCakeShop.place).should.be('Hornby')*/
    })
  })
})
