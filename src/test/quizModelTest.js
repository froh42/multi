define(["quizModel"], function(mod) {
	buster.testCase("quizModel", {
		setUp: function() {
			this.quiz = new mod.Quiz(["a","b","c"]);
		},
		"exerciseCount is given number of exercises": function() {
			expect(this.quiz.exerciseCount()).toBe(3);
		},
		"exerciseNumber is 0 initially": function() {
			expect(this.quiz.exerciseNumber()).toBe(0);
		},
		"done is false initally": function() {
			expect(this.quiz.done()).toBe(false);
		},
		"done is true after consuming all exercises": function() {
			this.quiz.exerciseNumber(this.quiz.exerciseCount());
			expect(this.quiz.done()).toBe(true);
		},
		"nextExercise advances exerciseNumber": function() {
			this.quiz.nextExercise();
			expect(this.quiz.exerciseNumber()).toBe(1);
		},
		"nextExercise nextExercise not advance beyond the last exercise": function() {
			this.quiz.nextExercise();
			this.quiz.nextExercise();
			this.quiz.nextExercise();
			expect(this.quiz.exerciseNumber()).toBe(2);
		},
		"current exercise returns each exercise when called after nextExercise": function() {
			expect(this.quiz.currentExercise()).toBe("a");
			this.quiz.nextExercise();
			expect(this.quiz.currentExercise()).toBe("b");
			this.quiz.nextExercise();
			expect(this.quiz.currentExercise()).toBe("c");
		}

	});
});