class CakeShop {
	constructor  (newId, newFirstName, newFlavour, newPlace, theMumsPalace) {
		this.id = newId
		this.firstName = newFirstName
		this.flavour = newFlavour
		this.place = newPlace
		this.myMumsPalace = theMumsPalace
		this.allMyCakes = []
	}
	
	sortCakes () {
		this.allMyCakes.sort(function (a, b) {
			if (a.cakeName !== b.cakeName) {
				return a.cakeName > b.cakeName
			}
			return b.cost - a.cost
		})
	}

	
}