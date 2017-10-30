/* global describe beforeEach Controller it expect MumsPalace */
describe('Question Seven', () => {
  describe('MumsPalace.getCakeShopsWithTwoCakes function', () => {
      let theMumsPalace = Controller.setup()
      beforeEach(() => {
              theMumsPalace = Controller.setup()
            }
        )
    describe('theMumsPalace.getCakeShopsWithTwoCakes function', () => {
       it('should return a string', () => {
		expect(typeof theMumsPalace.getCakeShopsWithTwoCakes()).to.be('string')
	   })

       it('should NOT be hard coded', () => {
		theMumsPalace = new MumsPalace()
		expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.be('')
	   })
    
	 //The Bagel Shop, Chocolate. <01>\n    Angel cake (United Kingdom) worth $20.\n    Babka (Poland) worth $15.\nPatty Cakes, Butterscotch. <04>\n    Cheesecake (Greece) worth $20.\n    Panettone (Italy) worth $15.\n//
	    describe('Should return correctly formatted data', () => {
			describe( 'The First Name', () => {
				it('should be The Bagel Shop', () => {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(output).to.match(/The\sBagel\sShop/)
				})
			})
	
	
			describe('The punctuation after the first name', () => { 
				it(' should be a comma and then a space', () => {
			    let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[,\s]/)
				})
			})
			
			describe('The Flavour', () => {
			    it('should be Chocolate', () => {
				  let aCakeShop
				   aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				   aCakeShop = theMumsPalace.allMyCakeShops[0]
				   expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Chocolate/)
				})
		    })
				
			 describe('The punctuation after the second name', () => {
			   it('should be a dot followed by a space', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\s]/)
				})
			})
				
			describe('The IDs', () => {
				it('should have numbers enclosed in angle brackets <> ie <01>', () => {
				   expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/(<01>|<02>|<03>|<04>)/)
				})
			})
			
		    describe('After the flavour\'s name', () => {
				it('should be a newline', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/>\n/)
				})
			})
				
			describe('Each CakeName\'s details', () => {
				it('should start with a tab \t character', () => {
				 expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\t/)
				})
		    })
			
			describe('The Bagel Shop\'s first cakeName', () => {
				 let theBagelShop = theMumsPalace.findCakeShop('01')
				 let theCake = theBagelShop.allMyCakes[0]
				 let output = theCake.toString()
				it('should be Angel cake', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/(Angel\scake)/)
				})
				
				it('Originates from United Kingdom', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[(]United\sKingdom[)]/)
				})
				
				it('with the value of $20', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\sworth\s[$]20/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\n]/)
				})
			})
			
			describe('The Bagel Shop\'s second cakeName', () => {
				let theBagelShop = theMumsPalace.findCakeShop('01')
				let theCake = theBagelShop.allMyCakes[1]
				console.log(theCake)
				let output = theCake.toString() 
				
				it('should start with a tab', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\t/)
				})
				
				it('should be Babka', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Babka/)
				})
				it('Originates from Poland', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Poland/)
				})
				
				
				it('with the value of $15', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\sworth\s[$]15/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\n]/)
				})
			})
			
		describe('Should return correctly formatted data', () => {
			describe('The First Name', () => {
				it('should be Patty Cakes ', () => {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(output).to.match(/Patty\sCakes/)
			    })
			})
			
			describe('The punctuation after the first name', () => {
				it(' should be a comma and then a space', () => {
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[,\s)]/)
				})
		     })
			 
			describe( 'The Flavour', () => {
				 it('should be Butterscotch', () => {
				  let aCakeShop
				  aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				  aCakeShop = theMumsPalace.allMyCakeShops[04]
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Butterscotch/)
				 })
		    })
			
			describe('The punctuation after the second name', () => {
             it('should be a dot followed by a space', () => {
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\s]/)
	         })
		    })
	
     	    describe('The IDs', () => {
		      it('should have numbers enclosed in angle brackets <> ie <04>', () => {
			   expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\s\S]+/)
			   })
		    })
		
		    describe('After the flavour\'s name', () => {
              it('should be a newline', () => {
               expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\n/)
              })
            })
			
			describe('Each CakeName\'s details', () => {
              it('should start with a tab  \\t character', () => {
              expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\t/)
              })
		    })
			
			describe('Patty Cakes\'s first cakeName', () => {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[0]
				let output = theCake.toString()
				it('should be Cheesecake', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/(Cheesecake)/)
				})
				it('Originates from Greece', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[(]Greece[)]/)
				})
				
				
				it('with the value of $20', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\sworth\s[$]20/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\n]/)
				})
			})
			
			describe('Patty Cakes\'s second cakeName', () => {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[1]
				let output = theCake.toString()
				it('should start with a tab', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\t/)
				})
				
				it('should be Panettone', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Panettone/)
				})
				

				it('Originates from Italy', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/Italy/)
				})
				
				
				it('with the value of $15', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/\sworth\s[$]15/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).to.match(/[\.\n]/)
				})
		    })

		  })
        })
	  })
	})	
  })