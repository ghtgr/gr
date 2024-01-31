/*移动端点击侧边栏改变按钮函数*/
function sideChange() {
  if (document.getElementById("sideArea").style.display == "flex") {
    closeSide();
  } else {
    openSide();
  }
}

/*移动端打开侧边栏函数*/
function openSide() {
  document.getElementById("sideArea").style.display = "flex";
  document.getElementById("backdrop").style.display = "flex";
  document.getElementById("sideChange").style.marginLeft = "200px";
  document.getElementById("profilePicture").style.opacity = "0.7"; //设置图片透明度
}

/*移动端关闭侧边栏函数*/
function closeSide() {
  document.getElementById("sideArea").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
  document.getElementById("sideChange").style.marginLeft = "0";
  document.getElementById("profilePicture").style.opacity = "1"; //设置图片透明度
}

/*将接收到的星期参数（0-6）转换为字符串*/
function weekday() {
  let day = new Date().getDay();
  let str = "星期";
  let dayArray = ["日", "一", "二", "三", "四", "五", "六"];
  str = str + dayArray[day];
  return str;
}

/*定时调用函数*/
setInterval(
  "document.getElementById('datetime').innerHTML=new Date().toLocaleDateString()+'\xa0\xa0\xa0'+weekday();",
  1000
); //将用Date函数得到的时间以字符串形式放到id为datetime的盒子里，数据1000毫秒刷新一次

/*随机心情函数*/
function mood() {
  let month = Number(new Date().getMonth()) + 1;
  let day = new Date().getDay() + 1;
  let hours = new Date().getHours() + 1;
  let minutes = new Date().getMinutes() + 1;
  let moodKind = [
    "好",
    "乌鱼",
    "o_o",
    "冒烟",
    "扎铁",
    "发光",
    "爆炸",
    "蓝瘦",
    "香菇",
    "飞起",
    "着火",
    "死了",
    "发疯",
  ]; //声明心情数组
  let myMood =
    moodKind[(month * day * hours * minutes * minutes * minutes) % 13]; //随机一个心情
  return myMood;
}

/*定时调用函数*/
setInterval("document.getElementById('mood').innerHTML=mood();", 1000); //将mood函数返回值添加到id为mood的盒子里，数据1000毫秒刷新一次
