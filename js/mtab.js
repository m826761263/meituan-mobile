document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('#fixed li');
    const boxes = document.querySelectorAll('.box');
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('cur');
            });
            boxes.forEach(function (box) {
                box.style.display = 'none';
            });
            tab.classList.add('cur');
            boxes[index].style.display = 'block';
        });
    });
});