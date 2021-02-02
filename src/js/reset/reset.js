document.addEventListener ? document.addEventListener("contextmenu", function (rmcontextmenu) {
    rmcontextmenu.preventDefault();
}, !1) : document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = !1;
}); //contextmenu

var alps = 0;
window.alert = function (b) {
    var c = document.getElementById("root");
    alps += 1;
    var d = '<p class="alert_content">' + b + "</p>";
    c.insertAdjacentHTML("beforeend", '<div class="windows-app" id="alert' + alps + '" getfile="src/components/windows-app/windows-app.html" onmousedown="zindex(this, event)" ondblclick="dbfullscr(this, event)" onmousemove="xydetect(this, event)" onmouseout="endxydetect(this)"></div>');
    getthehtml();
    var a = document.getElementById("alert" + alps);
    a.classList.add("alertbox");
    setTimeout(function () {
        a.children[0].insertAdjacentHTML("beforeend", d);
        a.insertAdjacentHTML("afterbegin", '<p class="alert_header"><img src="src/image/svg/warning.svg">&nbspAlert</p>');
    }, 50);
}; //alertcontext