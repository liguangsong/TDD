describe("Guess the number compared with the random number", function () {
    var count;

    beforeEach(function () {
        count = create_count();
    });

    afterEach(function () {
        clear();
    });

    it("should be 4A0B when tt_count=count", function () {
        var tt_count = count;
        var sort = analysis(tt_count, count)
        expect(sort).toBe("4A0B");
    });

    it("should be 3A0B when tt_count=create_tt_count(count)", function () {

        var tt_count = create_tt_count(count);
        var sort = analysis(tt_count, count)
        expect(sort).toBe("3A0B")

    });

});