//onload= function(){
var data=new Date();//获取时间对象
var year=data.getFullYear();//当前年份
var moth=data.getMonth();//当前月份
var nday=data.getDate();//天

calendar(year,moth,nday);
function front(){   //下一个月
    if(moth<=0){
        moth=11;
        year=year-1;
    }else{
        moth--;
    }

    calendar(year,moth,nday);
}
function queen(){  //上一个月
    if(moth>=11){
        moth=0;
        year=year+1;
    }else{
        moth++;
    }
    calendar(year,moth,nday);
}
function is_leap(year) {  //判断是否为闰年
    return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
}
function calendar(year,moth,nday){  //显示日期函数
    var nlstr = new Date(year,moth,1);//获取每月的第一天 nlstr.getday()每月第一天是周几
    var day=new Array("周日","周一","周二","周三","周四","周五","周六");//固定每周
    var time=document.getElementById('time');
    var calendar=document.getElementById('calendar');
    time.innerHTML=' ';   //每次调用清空div内容
    calendar.innerHTML=' ';
    //月的天数数组，days[moth] 就可以调用某一年某一月的天数
    var days=new Array(31,28+is_leap(year),31,30,31,31,30,31,30,31,30,31);
    time.innerHTML="时间:"+ year+"-"+(moth+1)+"-"+nday// 显示时间
    for(var i=0;i<day.length;i++){
        var my=document.createElement("div");
        calendar.appendChild(my);  //在calendar div中添加上面创建的div
        div(my);   //设置div样式
        my.innerHTML=day[i];//value 为星期
    }
    for(var i=0;i<nlstr.getDay();i++){ //每月的第一天是星期几
        var my=document.createElement("div")
        calendar.appendChild(my);
        div(my);
        my.innerHTML=' ';   //value 为空
        my.style.background='#C0C0C0'//改变背景颜色
    }
    for(var i=0;i<days[moth];i++){   //日历天数的显示

        var my=document.createElement("div")
        calendar.appendChild(my);

        div(my);
        my.innerHTML=i+1; // value 为天数1、2、3...
        //判断当天日期改变背景颜色
        if(my.innerHTML==data.getDate()&&year==data.getFullYear()&&moth==data.getMonth())
            my.style.background='red';
    }
}
function div(my){   //每一个div样式
    my.style.margin='16px';
    my.style.fontSize='20px';
    my.style.textAlign='center'
    my.style.border='1px solid #000000';
    my.style.width='50px';
    my.style.height='40px';
    my.style.float="left"
}
//}