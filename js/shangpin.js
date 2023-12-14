var url = "http://rap2api.taobao.org/app/mock/316283/xiaoxi";

var jarr=[{
    project:"商品炸鸡",
    icon:"#icon-xiangxiajiantou",
    txt:"推荐"
}];
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    parse(data);
  })
  .catch((e) => {
    console.log(e);
  });
function parse(data) {
  var jlist = document.querySelector(".jlist1");
  for (let v of data) {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="kuang">
            <img src="./images/${v.project}.jpg">
            <div class="pnei">
                <p class="sp">外卖</p>
                <p class="time">45分钟</p>
            </div>
        </div>
        <div class="nei1">
            <h3>熊家无二·韩式炸鸡（理工大学店）</h3>
            <div id="nei1">
                <p>4.8分</p>
                <p>人均￥28</p>
            </div>
            <div id="nei2">
                <p>22减14</p>
                <p>58减23</p>
                <p>90减39</p>
            </div>
        </div>`;
    jlist.appendChild(li);
  }
}
