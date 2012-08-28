define(["exerciseModel"], function(mod) {
	buster.testCase("viewmodelTest", {
		"test resultCorrect is true when result = factor1*factor2": function() {
			var model = new mod.ExerciseModel();
			model.factor1(3);
			model.factor2(9);
			model.result(3 * 9);
			assert(model.resultIsCorrect());
		},
		"test resultCorrect is false when result != factor1*factor2": function() {
			var model = new mod.ExerciseModel();
			model.factor1(3);
			model.factor2(7);
			model.result(3 * 9);
			refute(model.resultIsCorrect());
		},
		"test ExerciseModel demands 10 exercises": function() {
			var model = new mod.ExerciseModel();
			assert(10, model.exerciseCount());
		},
		"test ExerciseModel starts at exercise 1": function() {
			var model = new mod.ExerciseModel();
			assert.equals(1, model.exerciseNumber());
		}
	});
});