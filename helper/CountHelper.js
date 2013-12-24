function create_guess_number(random_number) {
    var guess_number = "", i;
    var one_digit_random = create_different_random_number(random_number);
    for (i = 0; i < 3; i++) {
        guess_number = guess_number + random_number[i]
    }
    guess_number = guess_number + one_digit_random;
    return guess_number
}

function create_different_random_number(random_number) {
    var one_digit_random = (Math.floor(Math.random() * 9 + 0)).toString();
    while (number_is_or_not_expect(one_digit_random, random_number) == true) {
        one_digit_random = (Math.floor(Math.random() * 9 + 0)).toString();
    }
    return one_digit_random;
}

function number_is_or_not_expect(one_digit_random, random_number) {
    return _.some(random_number, function (list) {
        return list == one_digit_random
    })
}

function random_test(number) {
    var i, j;
    var event = [];
    for (i = 0; i < number; i++) {
        var random_number = create_random_number();
        event.push({random_number: random_number})
    }
    return grouping(event)
}

function grouping(event) {
    var random_number_list = _.groupBy(event, function (list) {
        return list.random_number
    })
    var event_list = []
    _.map(random_number_list, function (value, key) {
        event_list.push({"random_number": key, "number": value.length})
    })
    return get_most_number(event_list)
}

function get_most_number(event_list) {
    var a = _.max(event_list, function (list) {
        return list.number;
    })["number"];
    return (a < 50)
}

function clear() {
    localStorage.random_number = ""
    localStorage.number_for_times = "0";
    localStorage.setItem("number_of_B",JSON.stringify(0));
    localStorage.setItem("number_of_A",JSON.stringify(0))
    document.getElementById("input").value = "";
    document.getElementById("label").innerHTML = "";
    document.getElementById("guess_button").disabled = true;
}