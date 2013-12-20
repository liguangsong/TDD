function label_export(message) {
    document.getElementById("label").innerHTML = message;
}

function button_disabled(abeled) {
    document.getElementById("button").disabled = abeled;
}

function get_input_value() {
    return   document.getElementById("input").value
}

function number_analysis(guess_number, random_number) {
    var i, j, number_of_A = 0, number_of_B = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (guess_number[i] == random_number[j] && i == j) {
                number_of_A = number_of_A + 1
            }
            if (guess_number[i] == random_number[j] && i != j) {
                number_of_B = number_of_B + 1;
            }
        }
    }
    number_for_times_add();
    return number_of_A + "A" + number_of_B + "B";
}

function number_for_times_add() {
    var number = JSON.parse(localStorage.getItem("number_for_times"));
    number = number + 1;
    localStorage.setItem("number_for_times", JSON.stringify(number))
}

function game_is_or_not_start() {
    var random_number = localStorage.getItem("random_number")
    if (random_number == "") {
        button_disabled(true)
        label_export("未开始");
        return;
    }
    return is_or_not_a_guess_number(random_number);
}

function is_or_not_a_guess_number(random_number) {
    var guess_number = get_input_value();
    if (guess_number.length != 4 || is_or_no_repeat(guess_number) == "yes") {
        label_export("格式不对");
        return;
    }
    return guess_analysis(guess_number, random_number);
}

function guess_analysis(guess_number, random_number) {
    var sorting = number_analysis(guess_number, random_number)
    var number_for_times = localStorage.getItem("number_for_times");
    if (sorting == "4A0B" && number_for_times <= 6) {
        label_export("恭喜成功猜对");
        button_disabled(true);
        return;
    }
    return guess_failure(sorting, number_for_times, random_number);
}

function guess_failure(sorting, number_for_times, random_number) {
    if (sorting != "4A0B" && number_for_times == 6) {
        label_export("失败，答案是" + random_number)
        button_disabled(true);
        return;
    }
    return guess_continue(sorting, number_for_times);
}

function guess_continue(sorting, number_for_times) {
    if (sorting != "4A0B" && number_for_times <= 6) {
        label_export(sorting);
    }
}