/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Multi(json) {
    this.makeExercises = function () {
        var exercises = [];
        for (var i = 10; i > 0; --i) {
            exercises[i] = [];
        }
        return exercises;
    };

    if (json === null) {
       makeExercises();
    } else {
        this.exercises = json.exercises;
    }

    this.makeExercise = function () {
        return new ExerciseModel(this);
    };

    this.stringify = function () {
        return JSON.stringify(this);
    };
}

function MultiStorage() {
    this.get = function () {
        return new Multi(localStorage.getItem("multi"));
    };
    this.save = function (multi) {
        localStorage.setItem("multi", multi);
    };

}

function ExerciseModel(gameModel) {
    this.gameModel = gameModel;
    this.exerciseNumber = ko.observable(1);
    this.exerciseCount = ko.observable(10);
    this.factor1 = ko.observable(getRandomInt(1, 10));
    this.factor2 = ko.observable(getRandomInt(1, 10));
    this.result = ko.observable("");
    this.resultIsCorrect = ko.computed(function () {
        return parseInt(this.result(), 10) == parseInt(this.factor1(), 10) * parseInt(this.factor2(), 10);
    }, this);
}