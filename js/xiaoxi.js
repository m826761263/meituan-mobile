// var jarr = [
//   {
//     img: "消息-美团乐园",
//     span:"美团乐园",
//     txt: "天天现金：入账通知",
//     txt1:"昨天"
//   },{
//     img: "消息-美团钱包",
//     span:"美团钱包",
//     txt: "您订阅的笔笔返周返利帐单已出",
//     txt1:"星期一"
//   },{
//     img: "消息-小团币",
//     span:"小团币",
//     txt: "入账通知",
//     txt1:"星期日"
//   },{
//     img: "消息-美团团队",
//     span:"美团团队",
//     txt: "参加调研，签收你的圣诞礼物~",
//     txt1:"星期六"
//   },{
//     img: "消息-订单动态",
//     span:"美团乐园",
//     txt: "订单已消费",
//     txt1:"星期五"
//   }
// ];
var url='http://rap2api.taobao.org/app/mock/316283/xiaoxi';
        fetch(url).then(data=>{
            return data.json();
        }).then(data=>{
            console.log(data);
            parse(data);
        }).catch(e=>{
            console.log(e);
        });
        function parse(data) {
        var jlist=document.querySelector(".jlist1");
       for (let v of data) {
            let li=document.createElement("li");
            li.innerHTML=`
            <img src="./images/${v.img}.jpg">
            <div class="txt">
                <h3>${v.span}</h3>
                <span class="neirong">${v.txt}</span>
                <span class="time">${v.txt1}</span>
            </div>`;
            jlist.appendChild(li);    
        }
        }