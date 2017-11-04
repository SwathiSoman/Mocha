class Controller {
  static setup () {
    var theMumsPalace, theCakeShop
    theMumsPalace = new MumsPalace()
		/*
		ID       FIRST NAME              Flavour          Place

        01      The Bagel Shop      	Chocolate         Moorhouse
        02      Hot Crossed Buns    	Vanilla           Linwood
        03      Sugar Booger     	    Red Velvet        Shirley
        04      Patty Cakes   	        Butterscotch      Hornby

		*/
    theMumsPalace.addCakeShop('01', 'The Bagel Shop', 'Chocolate', 'Moorhouse')
    theMumsPalace.addCakeShop('02', 'Hot Crossed Buns', 'Vanilla', 'Linwood')
    theMumsPalace.addCakeShop('03', 'Sugar Booger', 'Red Velvet', 'Shirley')
    theMumsPalace.addCakeShop('04', 'Patty Cakes', 'Butterscotch', 'Hornby')

		/*
			Shop  ID   CAKENAME             Origin          Cost
			01  401   Angel cake             United Kingdom      $20
			01  402   Babka                  Poland              $15
			03  389   Boston cream pie       United States       $25
			02  113   Black Forest cake      Germany             $30
			04  114   Cheesecake             Greece              $20
			04  121   Panettone              Italy		       $15

		*/
    theCakeShop = theMumsPalace.findCakeShop('01')
    theCakeShop.addCake(401, 'Angel cake', 'United Kingdom', 20)
    theCakeShop.addCake(402, 'Babka', 'Poland', 15)

    theCakeShop = theMumsPalace.findCakeShop('02')
    theCakeShop.addCake(113, 'Black Forest cake', 'Germany', 30)

    theCakeShop = theMumsPalace.findCakeShop('03')
    theCakeShop.addCake(389, 'Boston cream pie', 'United States', 25)

    theCakeShop = theMumsPalace.findCakeShop('04')
    theCakeShop.addCake(114, 'Cheesecake', 'Greece', 20)
    theCakeShop.addCake(121, 'Panettone', 'Italy', 15)
    return theMumsPalace
  }
}
