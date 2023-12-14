var url = "http://rap2api.taobao.org/app/mock/316283/project";
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
  var jlist = document.querySelector(".jlist2");
  for (let v of data) {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="kuang">
            <img src="./images/${v.project}.jpg">
            <div class="pnei">
                <p class="sp">${v.project1}</p>
                <p class="time">${v.project2}</p>
            </div>
        </div>
        <div class="nei1">
            <h3>${v.title}</h3>
            <div id="nei1">
                <p>${v.score}</p>
                <p>${v.avg}</p>
            </div>
            <div id="nei2">
                <p>${v.mj1}</p>
                <p>${v.mj2}</p>
                <p>${v.mj3}</p>
            </div>
        </div>`;
    jlist.appendChild(li);
  }
}
