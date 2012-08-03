multiMatchers = {
    toHaveLength:function (expected) {
        return this.actual.length === expected;
    }
};

describe("Check the multi storage", function () {
    var ms=null;
    beforeEach(function () {
        ms = new MultiStorage();
    });
    it("localStorage can save and retrieve string", function () {
        var data = "The quick brown fox is a lazy hog";
        ms.save(data);
        expect(ms.load()).toBe(data);
    });
    it("localStorage can save and retrieve complex object", function () {
        var data = { foo:{ bar:{ qux:42 }}};
        ms.save(data);
        expect(ms.load().foo.bar.qux).toBe(42);
    });
    it("data is in local storage", function () {
        localStorage.removeItem("multi");
        var data = "The quick brown fox is a lazy hog";
        ms.save(data);
        expect(localStorage.multi).toBeDefined();
    });

});

describe("Test the multi main model", function () {
    var multi=null;
    beforeEach(function () {
        multi = new Multi(undefined);
        this.addMatchers(multiMatchers);
    });

    it("makeExercises returns a 10 by 10 array", function () {
        var ex;
        ex = multi.makeExercises();
        expect(ex).toHaveLength(10);
        for (var i = 0; i < 10; ++i) {
            expect(ex[i]).toHaveLength(10);
        }
    });

    it("multi can store exercise statistics", function () {
        multi.getExercise(4, 9).testdata = "woohoo";
        expect(multi.getExercise(4, 9).testdata).toBe("woohoo");
    });

    it("get does not accept out of range parameters", function () {
        expect(function () {
            multi.getExercise(-1, 0);
        }).toThrow(undefined);

        expect(function () {
            multi.getExercise(0, -1);
        }).toThrow(undefined);

        expect(function () {
            multi.getExercise(20, 0);
        }).toThrow(undefined);

        expect(function () {
            multi.getExercise(0, 20);
        }).toThrow(undefined);

    });

    it("multi state can be json'ed and restored.", function () {
        multi.getExercise(4, 9).testdata = "woohoo";
        var json = JSON.parse(JSON.stringify(multi));
        var copy = new Multi(json);
        for (var i = 0; i < 10; ++i) {
            for (var j = 0; j < 10; ++j) {
                expect(copy.getExercise(i, j).testdata).toBe(multi.getExercise(i, j).testdata);
            }
        }
    });
});

