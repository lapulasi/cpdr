/**
 * Created by liuyingshi on 16/7/4.
 */

function $$(id){
    return document.getElementById(id);
}
function autoHeight(){
    if (window.innerHeight){
        nowHeight = window.innerHeight-329;
    }else{
        nowHeight = document.documentElement.clientHeight;
    }
    var jianHeight = 0;
    if(nowHeight > jianHeight){
        $$('chart_cont').style.height = $('communicate').style.height = $('only_reply').style.height = nowHeight - jianHeight + 'px';
        $$('zxzb_cont').style.height = nowHeight-44 - jianHeight + 'px';
    }else{
        $$('chart_cont').style.height =  $('communicate').style.height =  $('only_reply').style.height = jianHeight + 'px';
        $$('zxzb_cont').style.height =jianHeight - 44 + 'px';
    }
}
autoHeight();
window.onresize = autoHeight;