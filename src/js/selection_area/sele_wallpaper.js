function seledesktop() {
    var sele_wall = document.getElementById('selection_wallpaper'),
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0;

function reCalc() {
    var x3 = Math.min(x1, x2);
    var x4 = Math.max(x1, x2);
    var y3 = Math.min(y1, y2);
    var y4 = Math.max(y1, y2);
    sele_wall.style.left = x3 + 'px';
    sele_wall.style.top = y3 + 'px';
    sele_wall.style.width = x4 - x3 + 'px';
    sele_wall.style.height = y4 - y3 + 'px';
}
document.getElementById('wallpaper').onmousedown = function (e) {
    sele_wall.style.display = 'block';
    x1 = e.clientX;
    y1 = e.clientY;
    x2 = x1;
    y2 = y1;
    reCalc();
};
document.onmousemove = function (e) {
    if (window.getComputedStyle(sele_wall).display !== "none") {
        x2 = e.clientX;
        y2 = e.clientY;
        reCalc();
    }
};
document.onmouseup = function () {
    sele_wall.style.display = 'none';
};
}
seledesktop();