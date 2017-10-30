/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CakeShops', () => {
    var theMumsPalace
    beforeEach(() => {
      theMumsPalace = Controller.setup()
    })

    it('should have added 4 CakeShop', () => {
      expect(theMumsPalace.allMyCakeShops.length).to.be(4)
    })

    it('should have correctly set details for each CakeShop', () => {
      let aCakeShop
      aCakeShop = theMumsPalace.sortCakeShop()
      aCakeShop = theMumsPalace.allMyCakeShops[0]
      expect(aCakeShop).to.be.ok()
      expect(aCakeShop.id).to.be('01')
      expect(aCakeShop.firstName).to.be('The Bagel Shop')
      expect(aCakeShop.flavour).to.be('Chocolate')
      expect(aCakeShop.place).to.be('Moorhouse')

      aCakeShop = theMumsPalace.allMyCakeShops[1]
      expect(aCakeShop).to.be.ok()
      expect(aCakeShop.id).to.be('02')
      expect(aCakeShop.firstName).to.be('Hot Crossed Buns')
      expect(aCakeShop.flavour).to.be('Vanilla')
      expect(aCakeShop.place).to.be('Linwood')

      aCakeShop = theMumsPalace.allMyCakeShops[2]
      expect(aCakeShop).to.be.ok()
      expect(aCakeShop.id).to.be('03')
      expect(aCakeShop.firstName).to.be('Sugar Booger')
      expect(aCakeShop.flavour).to.be('Red Velvet')
      expect(aCakeShop.place).to.be('Shirley')

      aCakeShop = theMumsPalace.allMyCakeShops[3]
      expect(aCakeShop).to.be.ok()
      expect(aCakeShop.id).to.be('04')
      expect(aCakeShop.firstName).to.be('Patty Cakes')
      expect(aCakeShop.flavour).to.be('Butterscotch')
      expect(aCakeShop.place).to.be('Hornby')
    })
  })
})
