/* global describe beforeEach Controller it expect Cake */
describe('Question Four and Question Five', () => {
  describe('Cake', () => {
    var cake
    beforeEach( () => {
      cake = new Cake()
    })

    it('should have a .myCakeShop reference', () => {
      expect(cake.hasOwnProperty('myCakeShop')).to.be.ok()
    })

    it('should have a .id property', () => {
      expect(cake.hasOwnProperty('id')).to.be.ok()
    })

    it('should have a .cakeName property', () => {
      expect(cake.hasOwnProperty('cakeName')).to.be.ok()
    })

    it('should have a .origin property', ()=> {
      expect(cake.hasOwnProperty('origin')).to.be.ok()
    })

    it('should have a .cost property', () => {
      expect(cake.hasOwnProperty('cost')).to.be.ok()
    })
  })

  describe('write a CakeShop.addCake function to add the Cakes', () => {
    var theMumsPalace
    beforeEach( () => {
      theMumsPalace = Controller.setup()
    })

    it('CakeShop 01 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('01')
      expect(theCakeShop.allMyCakes.length).to.equal(2)
    })

    it('CakeShop 02 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('02')
      expect(theCakeShop.allMyCakes.length).to.equal(1)
    })

    it('CakeShop 03 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('03')
      expect(theCakeShop.allMyCakes.length).to.equal(1)
    })

    it('CakeShop 04 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('04')
      expect(theCakeShop.allMyCakes.length).to.equal(2)
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
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(401)
      expect(aCake.cakeName).to.equal('Angel cake')
      expect(aCake.origin).to.equal('United Kingdom')
      expect(aCake.cost).to.equal(20)

            //     01  		 402   Babka                  Poland           $15
      aCake = theCakeShop.allMyCakes[1]
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(402)
      expect(aCake.cakeName).to.equal('Babka')
      expect(aCake.origin).to.equal('Poland')
      expect(aCake.cost).to.equal(15)

      theCakeShop = theMumsPalace.findCakeShop('02')
      aCake = theCakeShop.sortCakes()
              //    02           113   Black Forest cake      Germany          $30
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(113)
      expect(aCake.cakeName).to.equal('Black Forest cake')
      expect(aCake.origin).to.equal('Germany')
      expect(aCake.cost).to.equal(30)

      theCakeShop = theMumsPalace.findCakeShop('03')
      aCake = theCakeShop.sortCakes()
             // 03  		 389   Boston cream pie       United States    $25
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(389)
      expect(aCake.cakeName).to.equal('Boston cream pie')
      expect(aCake.origin).to.equal('United States')
      expect(aCake.cost).to.equal(25)

      theCakeShop = theMumsPalace.findCakeShop('04')
      aCake = theCakeShop.sortCakes()
            // 04           114   Cheesecake             Greece           $20
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(114)
      expect(aCake.cakeName).to.equal('Cheesecake')
      expect(aCake.origin).to.equal('Greece')
      expect(aCake.cost).to.equal(20)

            // 04           121   Panettone              Italy		       $15
      aCake = theCakeShop.allMyCakes[1]
      expect(aCake.myCakeShop).to.equal(theCakeShop)
      expect(aCake.id).to.equal(121)
      expect(aCake.cakeName).to.equal('Panettone')
      expect(aCake.origin).to.equal('Italy')
      expect(aCake.cost).to.equal(15)
    })
  })
})