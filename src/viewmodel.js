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
        for (var i = 0; i < 10; ++i) {
            var ary = [];
            for (var j = 0; j < 10; ++j) {
                ary[j] = {};
            }
            exercises[i] = ary;
        }
        return exercises;
    };

    if (json === null || json === undefined) {
        this.exercises = this.makeExercises();
    } else {
        console.log("Using existing object");
        this.exercises = json.exercises;
    }

    this.getExercise = function(f1,f2) {
        if (f1<0 || f1>=this.exercises.length) {
            throw new Error("factor 1 out of range: "+f1);
        }
        var second = this.exercises[f1];
        if (f2<0 || f2>=second.length) {
            throw new Error("factor 2 out of range: "+f2);
        }
        return second[f2];
    };
}

function MultiStorage() {
    this.load = function () {
        return JSON.parse(localStorage.getItem("multi"));
    };
    this.save = function (multi) {
        localStorage.setItem("multi", JSON.stringify(multi));
    };
}

function ExerciseModel(gameModel) {
    this.gameModel = gameModel;
    this.exerciseNumber = ko.observable(1);
    this.exerciseCount = ko.observable(10);
    this.factor1 = ko.observable(getRandomInt(2, 10));
    this.factor2 = ko.observable(getRandomInt(2, 10));
    this.result = ko.observable("");
    this.resultIsCorrect = ko.computed(function () {
        return parseInt(this.result(), 10) == parseInt(this.factor1(), 10) * parseInt(this.factor2(), 10);
    }, this);
}