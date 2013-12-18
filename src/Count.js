create_count=function(){
    var count="";
    var i,j=4;
    for(i=0;i<j;i++){
    var b=(Math.floor(Math.random()*9+0)).toString();
    while(_.some(count,function(list){return list==b})) {
         b=(Math.floor(Math.random()*9+0)).toString();
     }
        count=count+b;
    }
    localStorage.setItem("count",count);
    document.getElementById("button").disabled=false;
    document.getElementById("input").value="" ;
    document.getElementById("label").innerHTML="";
    localStorage.number_for_times="0"
    return count
}
is_or_no_repeat=function(count){
    var i,j;
    for(i=0;i<3;i++){
        for(j=i+1;j<4;j++){
            if( count[i]==count[j]){
                return "yes";
            }
        }
    }
    return "no";
}