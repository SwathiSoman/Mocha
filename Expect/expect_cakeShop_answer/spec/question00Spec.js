/* global describe beforeEach it expect MumsPalace CakeShop */
describe('Basic Check For Original Source Code', function () {
  describe('MumsPalace', () => {
    var theMumsPalace
    beforeEach(() => {
      theMumsPalace = new MumsPalace()
    })

    describe('the allMyCakeShops property',  () => {
      it('should have an .allMyCakeShops property', () => {
        expect(theMumsPalace.hasOwnProperty('allMyCakeShops')).to.be.ok()
      })
      it('should reference an array',  () => {
        expect(Array.isArray(theMumsPalace.allMyCakeShops)).to.be.ok()
      })
    })

    it('should have an .add.CakeShop function', () => {
      expect(typeof theMumsPalace.addCakeShop).to.be('function')
    })

    it('should have a .findCakeShop function', () => {
      expect(typeof theMumsPalace.findCakeShop).to.be('function')
    })

    it('should have a .sortCakeShop function', () => {
      expect(typeof theMumsPalace.sortCakeShop).to.be('function')
    })
  })

  describe('CakeShop', () => {
    var theCakeShop
    beforeEach(function () {
      theCakeShop = new CakeShop()
    })

    it('should have an .id property', () => {
      expect(theCakeShop.hasOwnProperty('id')).to.be.ok()
    })

    it('should have a .firstName property', () => {
      expect(theCakeShop.hasOwnProperty('firstName')).to.be.ok()
    })

    it('should have a .lastName property', () => {
      expect(theCakeShop.hasOwnProperty('flavour')).to.be.ok()
    })

    it('should have a .birthDate property', () => {
      expect(theCakeShop.hasOwnProperty('place')).to.be.ok()
    })

    describe('the allMyCakes property', () => {
      it('should have an .allMyCakes reference', () => {
        expect(theCakeShop.hasOwnProperty('allMyCakes')).to.be.ok()
      })

      it('should reference an array', () => {
        expect(Array.isArray(theCakeShop.allMyCakes)).to.be.ok()
      })
    })

    it('should have a .sortCakes function', () => {
      expect(typeof theCakeShop.sortCakes).to.be('function')
    })
  })
})