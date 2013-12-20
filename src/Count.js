create_count = function () {
    var count = "";
    var i;
    for (i = 0; i < 4; i++) {
        var b = creat_a_one_digit_random();
        while (is_or_no_have_some_number(count, b)==true) {
            b = creat_a_one_digit_random();
        }
        count = count + b;
    }
    localStorage.setItem("count", count);
    return count
}

is_or_no_have_some_number = function (count, num) {
    return _.some(count, function (list) {
        return list == num
    })
}

creat_a_one_digit_random = function () {
    var b = (Math.floor(Math.random() * 9 + 0)).toString();
    return b;
}

number_empty = function () {
    localStorage.number_for_times = "0"
}

is_or_no_repeat = function (count) {
    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = i + 1; j < 4; j++) {
            if (count[i] == count[j]) {
                return "yes";
            }
        }
    }
    return "no";
}

page_initialization = function () {
    document.getElementById("button").disabled = false;
    document.getElementById("input").value = "";
    document.getElementById("label").innerHTML = "";
}
