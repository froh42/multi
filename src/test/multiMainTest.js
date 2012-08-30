define(["multi"], function(mod) {

    buster.testCase("Test the multi main model", {
        setUp: function() {
            this.multi = new mod.Multi(undefined);
        },

        "makeExercises returns a 10 by 10 array": function() {
            var ex;
            ex = this.multi.makeExercises();
            assert.equals(10, ex.length);
            for (var i = 0; i < 10; ++i) {
                assert.equals(10, ex[i].length);
            }
        },

        "multi can store exercise statistics": function() {
            this.multi.getExercise(4, 9).testdata = "woohoo";
            expect(this.multi.getExercise(4, 9).testdata).toBe("woohoo");
        },

        "get does not accept out of range parameters": function() {
            expect(function() {
                this.multi.getExercise(-1, 0);
            }).toThrow(undefined);

            expect(function() {
                this.multi.getExercise(0, -1);
            }).toThrow(undefined);

            expect(function() {
                this.multi.getExercise(20, 0);
            }).toThrow(undefined);

            expect(function() {
                this.multi.getExercise(0, 20);
            }).toThrow(undefined);

        },

        "multi state can be json'ed and restored.": function() {
            this.multi.getExercise(4, 9).testdata = "woohoo";
            var json = JSON.parse(JSON.stringify(this.multi));
            var copy = new mod.Multi(json);
            for (var i = 0; i < 10; ++i) {
                for (var j = 0; j < 10; ++j) {
                    expect(copy.getExercise(i, j).testdata).toBe(this.multi.getExercise(i, j).testdata);
                }
            }
        }
    });
});