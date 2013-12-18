describe("guess the results within six", function() {

        beforeEach(function() {
           localStorage.count="1234"
           localStorage.number_for_times="0";
            document.getElementById("button").disabled=false;
    });
    afterEach(function(){
        clear();
    });


    it("should be 恭喜成功猜对 when the first time is 1234", function() {
        guess_success();
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对");
    });
    it("should be 恭喜成功猜对 when the three time is 1234 ",function(){
        guess_fail(2)
        guess_success();
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对");
    });
    it ("should be 恭喜成功猜对 when the last time is 1234",function(){
        guess_fail(5);;
        guess_success();
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对");
    })
    it ("should be 失败，答案是1234 when the last time is  not 1234 ",function(){
        var count=localStorage.getItem("count")
        guess_fail(6);
        expect(document.getElementById("label").innerHTML).toBe("失败，答案是"+count);
    });

});