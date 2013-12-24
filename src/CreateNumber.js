function creat_a_one_digit_random() {
    var one_digit_random = (Math.floor(Math.random() * 9 + 0)).toString();
    return one_digit_random;
}

function create_random_number() {
    var random_number = "";
    var i;
    for (i = 0; i < 4; i++) {
        var one_digit_random = creat_a_one_digit_random();
        while (is_or_no_have_some_number(random_number, one_digit_random) == true) {
            one_digit_random = creat_a_one_digit_random();
        }
        random_number = random_number + one_digit_random;
    }
    localStorage.setItem("random_number", random_number);
    return random_number
}

function is_or_no_have_some_number(random_number, one_digit_random) {
    return _.some(random_number, function (list) {
        return list == one_digit_random
    })
}

function number_empty() {
    localStorage.number_for_times = "0"
}
function number_of_A_and_B(){
    localStorage.number_of_A="0"
    localStorage.number_of_B="0"
}

function is_or_no_repeat(random_number) {
    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = i + 1; j < 4; j++) {
            if (random_number[i] == random_number[j]) {
                return "yes";
            }
        }
    }
    return "no";
}

function page_initialization() {
    document.getElementById("guess_button").disabled = false;
    document.getElementById("input").value = "";
    document.getElementById("label").innerHTML = "";
}

function start_game() {
    create_random_number();
    page_initialization();
    number_empty();
    number_of_A_and_B()
}