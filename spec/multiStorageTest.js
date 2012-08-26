buster.testCase("multi storage tests", {
    setUp: function() {
        this.ms = new MultiStorage();
    },

    "localStorage can save and retrieve string": function() {
        var data = "The quick brown fox is a lazy hog";
        this.ms.save(data);
        expect(this.ms.load()).toBe(data);
    },

    "localStorage can save and retrieve complex object": function() {
        var data = {
            foo: {
                bar: {
                    qux: 42
                }
            }
        };
        this.ms.save(data);
        expect(this.ms.load().foo.bar.qux).toBe(42);
    },
    "data is in local storage": function() {
        localStorage.removeItem("multi");
        var data = "The quick brown fox is a lazy hog";
        this.ms.save(data);
        expect(localStorage.multi).toBeDefined();
    }

});