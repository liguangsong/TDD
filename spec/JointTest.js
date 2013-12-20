describe("Guess the number compared with the random number", function () {
    var random_number;

    beforeEach(function () {

    });

    afterEach(function () {
        clear();
    });

    it("should be 4A0B when guess_number=random_number", function () {
        random_number = create_random_number();
        var guess_number = random_number;
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("4A0B");
    });

    it("should be 3A0B when guess_number=create_guess_number(random_number)", function () {
        random_number = create_random_number();
        var guess_number = create_guess_number(random_number);
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("3A0B")
    });

});