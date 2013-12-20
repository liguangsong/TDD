analysis = function (tt_count, count) {
    var i, j, A = 0, B = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (tt_count[i] == count[j] && i == j) {
                A = A + 1
            }
            if (tt_count[i] == count[j] && i != j) {
                B = B + 1;
            }
        }
    }
    number_for_times_add();
    return A + "A" + B + "B";
}

number_for_times_add = function () {
    var number = JSON.parse(localStorage.getItem("number_for_times"));
    number = number + 1;
    localStorage.setItem("number_for_times", JSON.stringify(number))
}

label_export=function(message){
    document.getElementById("label").innerHTML = message;
}

button_disabled=function(abeled){
    document.getElementById("button").disabled =abeled ;
}

get_input_value=function(){
    return   document.getElementById("input").value
}

sort = function () {
    var count = localStorage.getItem("count")
    if (count == "") {
        button_disabled(true)
        label_export("未开始");
        return;
    }
    return sort_start(count);
}

sort_start = function (count) {
    var tt_count = get_input_value() ;
    if (tt_count.length != 4 || is_or_no_repeat(tt_count) == "yes") {
        label_export("格式不对");
        return;
    }
    return sort_analysis(tt_count, count);
}

sort_analysis = function (tt_count, count) {
    var sorting = analysis(tt_count, count)
    var number = localStorage.getItem("number_for_times");
    if (sorting == "4A0B" && number <= 6) {
        console.log("1")
        label_export("恭喜成功猜对");
        button_disabled(true);
        return;
    }
    return guess_failure(sorting,number,count);
}

guess_failure=function(sorting,number,count){
    if (sorting != "4A0B" && number == 6) {
        label_export("失败，答案是" + count)
        button_disabled(true);
        return;
    }
    return guess_continue(sorting,number);
}

guess_continue=function(sorting,number){
    if (sorting != "4A0B" && number <= 6) {
        label_export(sorting);
    }
}