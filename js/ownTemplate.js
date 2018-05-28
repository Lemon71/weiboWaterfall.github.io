// 试试背出来老师那个封装的替换模板的方法
// 其实还挺长的
//后面老师不知道从哪弄来了一个一看就是网上复制下来的封装方法,那个视频丢失了但是肯定是复制下来的
function lemon_template_pro(str,obj){
    var str =str;
    var obj = obj;
    var reg =/{{(\w+)}}/;
    var result ;
    while(result=reg.exec(str)){
        var key = result[1];
        var answer =obj[key];
        str=str.replace(result[0],answer);
    }
    return str;
}
//跌跌撞撞也算敲出来吧
// 一开始没记好reg.exec(str);而且要记住他返回的是一个数组