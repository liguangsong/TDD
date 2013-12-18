create_tt_count=function(count){
    var tt_count="", i;
    var b= (Math.floor(Math.random()*9+0)).toString();
    while(_.some(count,function(list){return list==b})){
        b=(Math.floor(Math.random()*9+0)).toString();
    }
    for(i=0;i<3;i++){
        tt_count=tt_count+count[i]
    }
    tt_count=tt_count+b;
    return tt_count

}

random_test=function(number){
    var i,j;
    var event=[];
    for(i=0;i<number;i++){
        var count=create_count();
        event.push({count:count})
    }
    var a=_.groupBy(event,function(list){return list.count})
    var event_list=[]
    _.map(a,function(value,key){event_list.push({"count":key,"number":value.length})})
    var a= _.max(event_list, function(list){ return list.number; })["number"];
    return (a<50)
}
clear=function(){
    localStorage.count=""
    localStorage.number_for_times="0";
    document.getElementById("input").value="" ;
    document.getElementById("label").innerHTML="";
    document.getElementById("button").disabled=true;
}