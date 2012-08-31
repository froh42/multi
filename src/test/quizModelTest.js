define(["quizModel"], function(mod) {
	buster.testCase("quizModel", {
		setUp: function() {
			this.quiz = new mod.Quiz(["a","b","c"]);
		},
		"exerciseCount is given number of exercises": function() {
			assertEquals(3, this.quiz.exerciseCount());
		}
//		"exerciseNumber is 0 initially": function() {
//			assert(true);
//		},
//		"done is false initally": function() {
//			assert(true);
//		},
//		"nextExercise advances exerciseNumber": function() {
//			assert(true);
//		},
//		"nextExercise does not advance beyond number of exercises": function() {
//			assert(true);
//		},
//		"current exercise returns first exercise initally": function() {
//			assert(true);
//		},
//		"current exercise returns each exercise when called after nextExercise": function() {
//			assert(true);
//		}

	});
});