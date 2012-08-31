function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Exercise - One single multiplication exercise
//
// This is one of several exercises within one quiz. Currently we support only one kind of exercise (multiplication)
// so the exercise exposes factor1, factor2, result and resultIsCorrect. 
define(["lib/knockout-2.1.0"], function(ko) {
    return {
        ExerciseModel: function(parent) {
            this.parent = ko.observable(parent);
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