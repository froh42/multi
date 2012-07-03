TestCase("viewmodelTest", {
    "test resultCorrect is true when result = factor1*factor2":function () {
        var model = new GameViewModel();
        model.factor1(3);
        model.factor2(9);
        model.result(3 * 9);
        assertTrue(model.resultIsCorrect());
    },
    "test resultCorrect is false when result != factor1*factor2":function () {
        var model = new GameViewModel();
        model.factor1(3);
        model.factor2(7);
        model.result(3 * 9);
        assertFalse(model.resultIsCorrect());
    },
    "test GameViewModel demands 10 exercises":function () {
        var model = new GameViewModel();
        assertEquals(10, model.exerciseCount());
    },
    "test GameViewModel starts at exercise 1":function () {
        var model = new GameViewModel();
        assertEquals(1, model.exerciseNumber());
    }
});
