var url = "http://rap2api.taobao.org/app/mock/316283/xiaoxi";
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
            <img src="./images/${v.img}.jpg">
            <div class="txt">
                <h3>${v.span}</h3>
                <span class="neirong">${v.txt}</span>
                <span class="time">${v.txt1}</span>
            </div>`;
    jlist.appendChild(li);
  }
}
