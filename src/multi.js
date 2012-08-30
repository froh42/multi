define(["lib/knockout-2.1.0"], function(ko) {
    return {
        Multi: function(json) {
            this.makeExercises = function() {
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

            this.getExercise = function(f1, f2) {
                if (f1 < 0 || f1 >= this.exercises.length) {
                    throw new Error("factor 1 out of range: " + f1);
                }
                var second = this.exercises[f1];
                if (f2 < 0 || f2 >= second.length) {
                    throw new Error("factor 2 out of range: " + f2);
                }
                return second[f2];
            };
        }
    }
});