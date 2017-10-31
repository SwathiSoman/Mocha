/* global describe beforeEach Controller it expect Cake */
describe('Question Four and Question Five', () => {
  describe('Cake', () => {
    var cake
	//var should = require('chai').should()
    beforeEach( () => {
      cake = new Cake()
    })

    it('should have a .myCakeShop reference', () => {
      should(cake.hasOwnProperty('myCakeShop')).to.be.ok()
    })

    it('should have a .id property', () => {
      should(cake.hasOwnProperty('id')).to.be.ok()
    })

    it('should have a .cakeName property', () => {
      should(cake.hasOwnProperty('cakeName')).to.be.ok()
    })

    it('should have a .origin property', ()=> {
      should(cake.hasOwnProperty('origin')).to.be.ok()
    })

    it('should have a .cost property', () => {
      should(cake.hasOwnProperty('cost')).to.be.ok()
    })
  })

  describe('write a CakeShop.addCake function to add the Cakes', () => {
    var theMumsPalace
    beforeEach( () => {
      theMumsPalace = Controller.setup()
    })

    it('CakeShop 01 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('01')
      should(theCakeShop.allMyCakes.length).to.equal(2)
    })

    it('CakeShop 02 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('02')
      should(theCakeShop.allMyCakes.length).to.equal(1)
    })

    it('CakeShop 03 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('03')
      should(theCakeShop.allMyCakes.length).to.equal(1)
    })

    it('CakeShop 04 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('04')
      should(theCakeShop.allMyCakes.length).to.equal(2)
    })

    it('should correctly set Cake details', function () {
            /*
             Shop 		 ID   	CAKENAME           Origin       	   Cost
			01 			 401   Angel cake          United Kingdom      $20
			01  		 402   Babka                  Poland           $15
			03  		 389   Boston cream pie       United States    $25
			02           113   Black Forest cake      Germany          $30
			04           114   Cheesecake             Greece           $20
			04           121   Panettone              Italy		       $15

            */
      var aCake, theCakeShop
      theCakeShop = theMumsPalace.findCakeShop('01')
      aCake = theCakeShop.sortCakes()
            //     01 			 401   Angel cake          United Kingdom      $20
      aCake = theCakeShop.allMyCakes[0]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(401)
      should(aCake.cakeName).to.equal('Angel cake')
      should(aCake.origin).to.equal('United Kingdom')
      should(aCake.cost).to.equal(20)

            //     01  		 402   Babka                  Poland           $15
      aCake = theCakeShop.allMyCakes[1]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(402)
      should(aCake.cakeName).to.equal('Babka')
      should(aCake.origin).to.equal('Poland')
      should(aCake.cost).to.equal(15)

      theCakeShop = theMumsPalace.findCakeShop('02')
      aCake = theCakeShop.sortCakes()
              //    02           113   Black Forest cake      Germany          $30
      aCake = theCakeShop.allMyCakes[0]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(113)
      should(aCake.cakeName).to.equal('Black Forest cake')
      should(aCake.origin).to.equal('Germany')
      should(aCake.cost).to.equal(30)

      theCakeShop = theMumsPalace.findCakeShop('03')
      aCake = theCakeShop.sortCakes()
             // 03  		 389   Boston cream pie       United States    $25
      aCake = theCakeShop.allMyCakes[0]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(389)
      should(aCake.cakeName).to.equal('Boston cream pie')
      should(aCake.origin).to.equal('United States')
      should(aCake.cost).to.equal(25)

      theCakeShop = theMumsPalace.findCakeShop('04')
      aCake = theCakeShop.sortCakes()
            // 04           114   Cheesecake             Greece           $20
      aCake = theCakeShop.allMyCakes[0]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(114)
      should(aCake.cakeName).to.equal('Cheesecake')
      should(aCake.origin).to.equal('Greece')
      should(aCake.cost).to.equal(20)

            // 04           121   Panettone              Italy		       $15
      aCake = theCakeShop.allMyCakes[1]
      should(aCake.myCakeShop).to.equal(theCakeShop)
      should(aCake.id).to.equal(121)
      should(aCake.cakeName).to.equal('Panettone')
      should(aCake.origin).to.equal('Italy')
      should(aCake.cost).to.equal(15)
    })
  })
})