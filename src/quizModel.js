function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// quizModel
//
// This is a quiz that handles a run of several exercises.
define(["lib/knockout-2.1.0"], function(ko) {
    return {
        Quiz: function(exercises) {
            this.exerciseNumber = ko.observable(0);
            this.exerciseCount = ko.observable(10);
            this.exerciseCount = ko.observable(exercises.length);
            this.currentExercise= ko.computed(function() {
                return 0;
                //return exercises[this.exerciseNumber()];
            });
            this.nextExercise = function() {
                //if (!this.done()) this.exerciseNumber(this.exerciseNumber() + 1);

            };
            this.done= ko.computed(function() {
                return false;
                //return this.exerciseNumber() >= this.exerciseCount();
            });
        }
    };
});