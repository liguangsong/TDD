analysis=function(tt_count,count){
    var i, j, A=0,B=0;
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(tt_count[i]==count[j]&&i==j){
                A=A+1
            }
            if(tt_count[i]==count[j]&&i!=j){
                B=B+1;
            }
        }
    }
    var number=JSON.parse(localStorage.getItem("number_for_times"));
    number=number+1;
    localStorage.setItem("number_for_times",JSON.stringify(number))
    return A+"A"+B+"B";
}
sort=function(){
    var count=localStorage.getItem("count")
    if(count==""){
        document.getElementById("button").disabled=true;
        document.getElementById("label").innerHTML="未开始";
        return;
    }
    return sort_start(count);
}
sort_start=function(count){
    var tt_count=document.getElementById("input").value;
    if(tt_count.length!=4||is_or_no_repeat(tt_count)=="yes"){
        document.getElementById("label").innerHTML="格式不对";
        return;
    }
    return sort_analysis(tt_count,count);
}
sort_analysis=function(tt_count,count){
    var sorting= analysis(tt_count,count)
    var number=localStorage.getItem("number_for_times");
    if(sorting=="4A0B"&&number<=6){
        document.getElementById("label").innerHTML="恭喜成功猜对";
        document.getElementById("button").disabled=true;
    }
    else if(sorting!="4A0B"&&number==6){
        document.getElementById("label").innerHTML="失败，答案是"+count;
        document.getElementById("button").disabled=true;
    }
    else if(sorting!="4A0B"&&number<=6){document.getElementById("label").innerHTML=sorting;}
}