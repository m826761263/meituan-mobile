var jarr=[{
    link:"#",
    icon:"#icon-xiangxiajiantou",
    txt:"推荐"
},{
    link:"youxuan.html",
    icon:"#icon-youxuan",
    txt:"优选"
},{
    link:"#",
    icon:"#icon-shipin",
    txt:"视频"
},{
    link:"xiaoxi.html",
    icon:"#icon-xiaoxi",
    txt:"消息"
},{
    link:"wode.html",
    icon:"#icon-wode",
    txt:"我的"
}];
// dom:
var jlist=document.querySelector(".xia");

jarr.forEach((v,i)=>{
    var nli=document.createElement("li");
    nli.innerHTML=` <a href="${v.link}">
    <div>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="${v.icon}"></use>
    </svg>
    </div>
    <p>${v.txt}</p>
    </a>`;
    //反引号
    jlist.appendChild(nli);
    //增加到内部的最后
})