describe(" compare guess number", function() {
    var count;


    beforeEach(function() {
        count ="1234";
    });
    afterEach(function(){
       clear();
    });

    it("should be 4A0B when tt_count=1234", function() {
        var tt_count="1234"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("4A0B");
    });
    it("should be 3A0B when tt_count=1230", function() {
        var tt_count="1230"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("3A0B")
    });
    it("should be 2A2B when tt_count=1243", function() {
        var tt_count="1243"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("2A2B")
    });
    it("should be 0A4B when tt_count=4321", function() {

        var tt_count="4321"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("0A4B")
    });
    it("should be 0A3B when tt_count=5143", function() {
        var tt_count="5143"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("0A3B")
    });
    it("should be 2A1B when tt_count=1024", function() {
        var tt_count="1024"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("2A1B");
    });
    it("should be 0A0B when tt_count=7895", function() {
        var tt_count="7895"
        var sort=analysis(tt_count,count)
        expect(sort).toBe("0A0B")

    });

});