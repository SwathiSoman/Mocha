/* global describe beforeEach it expect MumsPalace CakeShop */
describe('Basic Check For Original Source Code', function () {
  describe('MumsPalace', () => {
    var theMumsPalace
	//var should = require('chai').should()
    beforeEach(() => {
      theMumsPalace = new MumsPalace()
    })

    describe('the allMyCakeShops property',  () => {
      it('should have an .allMyCakeShops property', () => {
        should(theMumsPalace.hasOwnProperty('allMyCakeShops')).to.be.ok()
      })
      it('should reference an array',  () => {
        should(Array.isArray(theMumsPalace.allMyCakeShops)).to.be.ok()
      })
    })

    it('should have an .add.CakeShop function', () => {
      should(typeof theMumsPalace.addCakeShop).to.be('function')
    })

    it('should have a .findCakeShop function', () => {
      should(typeof theMumsPalace.findCakeShop).to.be('function')
    })

    it('should have a .sortCakeShop function', () => {
      should(typeof theMumsPalace.sortCakeShop).to.be('function')
    })
  })

  describe('CakeShop', () => {
    var theCakeShop
    beforeEach(function () {
      theCakeShop = new CakeShop()
    })

    it('should have an .id property', () => {
     should(theCakeShop.hasOwnProperty('id')).to.be.ok()
    })

    it('should have a .firstName property', () => {
      should(theCakeShop.hasOwnProperty('firstName')).to.be.ok()
    })

    it('should have a .lastName property', () => {
      should(theCakeShop.hasOwnProperty('flavour')).to.be.ok()
    })

    it('should have a .birthDate property', () => {
      should(theCakeShop.hasOwnProperty('place')).to.be.ok()
    })

    describe('the allMyCakes property', () => {
      it('should have an .allMyCakes reference', () => {
        should(theCakeShop.hasOwnProperty('allMyCakes')).to.be.ok()
      })

      it('should reference an array', () => {
        should(Array.isArray(theCakeShop.allMyCakes)).to.be.ok()
      })
    })

    it('should have a .sortCakes function', () => {
      should(typeof theCakeShop.sortCakes).to.be('function')
    })
  })
})