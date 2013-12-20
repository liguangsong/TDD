function guess_success() {
    document.getElementById("input").value = "1234";
    document.getElementById("button").click();
}

function guess_fail(number) {
    var i;
    for (i = 0; i < number; i++) {
        document.getElementById("input").value = "1235";
        document.getElementById("button").click();
    }
};