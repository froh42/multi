define(["lib/knockout-2.1.0"], function(ko) {
    return {
        MultiStorage: function() {
            this.load = function() {
                return JSON.parse(localStorage.getItem("multi"));
            };
            this.save = function(multi) {
                localStorage.setItem("multi", JSON.stringify(multi));
            };
        }
    };
});
