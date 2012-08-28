define(["lib/knockout-2.1.0"], function(ko) {
	return {
		ExerciseModel: function(gameModel) {
			this.gameModel = gameModel;
			this.exerciseNumber = ko.observable(1);
			this.exerciseCount = ko.observable(10);
			this.factor1 = ko.observable(getRandomInt(2, 10));
			this.factor2 = ko.observable(getRandomInt(2, 10));
			this.result = ko.observable("");
			this.resultIsCorrect = ko.computed(function() {
				return parseInt(this.result(), 10) == parseInt(this.factor1(), 10) * parseInt(this.factor2(), 10);
			}, this);
		}
	};
});
