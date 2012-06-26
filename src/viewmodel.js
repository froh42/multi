function GameViewModel() {
    this.exerciseNumber = ko.observable(3);
    this.exerciseCount = ko.observable(10);
    this.factor1 = ko.observable(7);
    this.factor2 = ko.observable(9);
    this.result = ko.observable(42);
    this.resultIsCorrect = ko.observable(false);
}

ko.applyBindings(new GameViewModel());