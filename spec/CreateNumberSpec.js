describe("create  a four-digit random number", function () {
    var random_number;

    beforeEach(function () {

    });

    afterEach(function () {
        clear();
    });

    it("should a four-digit ", function () {
        random_number = create_random_number();
        expect(random_number.length).toBe(4);
    });

    it("should a number ", function () {
        random_number = create_random_number();
        expect(isNaN(random_number)).toBe(false);
    });

    it("should not have repeat number ", function () {
        var status = is_or_no_repeat(random_number);
        expect(status).toBe("no")
    });

    it("should be random", function () {
        var status = random_test(1000);
        expect(status).toBe(true);
    })

});