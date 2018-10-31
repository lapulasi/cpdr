/**
 * Created by liuyingshi on 16/7/5.
 */
function cutstr(str,len)
{
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for(var i = 0;i<str_len;i++)
    {
        a = str.charAt(i);
        str_length++;
        if(escape(a).length > 4)//已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。
        {
            //中文字符的长度经编码之后大于4
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if(str_length>=len)
        {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if(str_length<len){
        return str;
    }
}
var temp_text;
window.onload = function(){
    temp_text = document.getElementById("text").innerText;
    shousuo();
}
function shousuo(){
    var cut_text = cutstr(temp_text,80);
    document.getElementById("text").innerHTML = cut_text;
}
function zhankai(){
    var all_str = cutstr(temp_text,800000000);
    document.getElementById("text").innerHTML = all_str+"<a class='blue' style='cursor: pointer; margin-left: 5px; text-decoration: none;' ></a>"
}
