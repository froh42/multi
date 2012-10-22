require(["lib/knockout-2.1.0", "exerciseModel", "quizModel"], function(ko, em, qm) {
	var exercises = [new em.ExerciseModel(), new em.ExerciseModel(), new em.ExerciseModel()];
	var quiz = new qm.Quiz(exercises);
    ko.applyBindings(quiz);
    window.dbgQuiz = quiz;
});

