function label_export(message) {
    document.getElementById("label").innerHTML = message;
}

function button_disabled(abeled) {
    document.getElementById("guess_button").disabled = abeled;
}

function get_input_value() {
    return   document.getElementById("input").value
}

function get_number_of_A(){
    return JSON.parse(localStorage.number_of_A);
}

function get_number_of_B(){
    return JSON.parse(localStorage.number_of_B);
}

function save_number_of_A(number){
     localStorage.setItem("number_of_A",number)
}

function save_number_of_B(number){
    localStorage.setItem("number_of_B",number)
}

function number_analysis(guess_number, random_number) {
    var i = "0"
    _.each(guess_number, function (list) {
        compare_number(i, guess_number, random_number);
        i=parseInt(i)
        i = (i+1).toString();
    })
    number_for_times_add();
   return get_sorting();
}

function get_sorting(){
    var number_of_A=get_number_of_A();
    var number_of_B=get_number_of_B();
    return number_of_A + "A" + number_of_B + "B";
}

function compare_number(i, guess_number, random_number) {
    var j ="0"
    _.each(random_number, function (list) {
        add_number_of_A(i, j, guess_number, random_number)
        j=parseInt(j)
        j = (j+1).toString();
    })
}

function add_number_of_A(i, j, guess_number, random_number) {
    if (guess_number[i] == random_number[j] && i == j) {
        var number_of_A=get_number_of_A()
        number_of_A = (number_of_A + 1).toString();
        save_number_of_A(number_of_A)
    }
    return  add_number_of_B(i, j, guess_number, random_number)
}

function add_number_of_B(i, j, guess_number, random_number){
    if(guess_number[i] == random_number[j] && i != j){
        var number_of_B=get_number_of_B()
        number_of_B = (number_of_B + 1).toString();
        save_number_of_B(number_of_B)
    }
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
        number_of_A_and_B();
    }
}