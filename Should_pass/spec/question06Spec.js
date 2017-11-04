/* globals describe beforeEach it expect CakeShop  */
describe('Question Six', () => {
  describe('CakeShop.hasTwoCakes function', () => {
    let aCakeShop, aCake
    beforeEach(() => {
      aCakeShop = new CakeShop()
      aCake = new Cake()
    })

    it('should exist', () => {
     /* should(aCakeShop.hasTwoCakes).to.be.ok()*/
    })

    it('should return a boolean', () => {
      /*should(typeof aCakeShop.hasTwoCakes()).to.be('boolean')*/
    })

    it('should return true if the number of Cakes that CakeShop has is equal two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
     /* should(aCakeShop.hasTwoCakes()).to.be(true)*/
    })

    it('should return false if the number of Cakes that CakeShop has is less than two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
     /* should(aCakeShop.hasTwoCakes()).to.be(false)*/
    })

    it('should return false if the number of Cakes that CakeShop owns is more than two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
     /* should(aCakeShop.hasTwoCakes()).to.be(false)*/
    })
  })
})