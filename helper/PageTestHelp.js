guess_success=function(){
    document.getElementById("input").value="1234";
    document.getElementById("button").click();
}
guess_fail=function(num){
    var i;
    for(i=0;i<num;i++){
        document.getElementById("input").value="1235";
        document.getElementById("button").click();
    }
};