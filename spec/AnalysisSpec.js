describe(" compare guess number", function () {
    var random_number;

    beforeEach(function () {
        random_number = "1234";
    });

    afterEach(function () {
        clear();
    });

    it("should be 4A0B when guess_number=1234", function () {
        var guess_number = "1234"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("4A0B");
    });

    it("should be 3A0B when guess_number=1230", function () {
        var guess_number = "1230"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("3A0B")
    });

    it("should be 2A2B when guess_number=1243", function () {
        var guess_number = "1243"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("2A2B")
    });

    it("should be 0A4B when guess_number=4321", function () {
        var guess_number = "4321"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("0A4B")
    });

    it("should be 0A3B when guess_number=5143", function () {
        var guess_number = "5143"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("0A3B")
    });

    it("should be 2A1B when guess_number=1024", function () {
        var guess_number = "1024"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("2A1B");
    });

    it("should be 0A0B when guess_number=7895", function () {
        var guess_number = "7895"
        var sort = analysis(guess_number, random_number)
        expect(sort).toBe("0A0B")

    });

});