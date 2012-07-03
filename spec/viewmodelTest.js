TestCase("viewmodelTest", {
    "setup":function() {
        console.log("setup!");
    },
    "test resultCorrect is true when result = factor1*factor2":function () {
        var model = new ExerciseModel();
        model.factor1(3);
        model.factor2(9);
        model.result(3 * 9);
        assertTrue(model.resultIsCorrect());
    },
    "test resultCorrect is false when result != factor1*factor2":function () {
        var model = new ExerciseModel();
        model.factor1(3);
        model.factor2(7);
        model.result(3 * 9);
        assertFalse(model.resultIsCorrect());
    },
    "test ExerciseModel demands 10 exercises":function () {
        var model = new ExerciseModel();
        assertEquals(10, model.exerciseCount());
    },
    "test ExerciseModel starts at exercise 1":function () {
        var model = new ExerciseModel();
        assertEquals(1, model.exerciseNumber());
    }
});
