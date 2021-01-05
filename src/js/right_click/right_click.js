// https://gist.github.com/FelipeBudinich/1dbe3c1e58901d24d7e3

document.addEventListener ? document.addEventListener("contextmenu", function (rmcontextmenu) {
    rmcontextmenu.preventDefault();
}, !1) : document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = !1;
});

var desktop_wallpaper = document.getElementById('wallpaper')

desktop_wallpaper.oncontextmenu = function (hcu_mouse) {
    /*
    var hcu_contextmenu = document.getElementById('hcu_right_click');
    hcu_contextmenu.scrollTop = 0;
    hcu_contextmenu.style.top = hcu_mouse.clientY + "px";
    hcu_contextmenu.style.left = hcu_mouse.clientX + "px";
    if (hcu_mouse.clientY >= window.innerHeight - 350 - 35) {
        hcu_contextmenu.style.top = window.innerHeight - 350 - 35 + "px"
    };
    if (hcu_mouse.clientY <= 5) {
        hcu_contextmenu.style.top = 5 + "px"
    };
    if (hcu_mouse.clientX >= window.innerWidth - 250 - 5 ) {
        hcu_contextmenu.style.left = window.innerWidth - 250 - 5 + "px"
    };
    if (hcu_mouse.clientX <= 5 ) {
        hcu_contextmenu.style.left = 5 + "px"
    };
    hcu_contextmenu.classList.add('animate_hcu_right_click')
    setTimeout(function () {
        window.addEventListener("click", function () {
            hcu_contextmenu.classList.remove('animate_hcu_right_click')
        }, {
            once: !0
        });
    }, 10);
    */

    var hcu_contextmenu = document.getElementById("hcu_right_click");
    animated_startmenu.classList.remove("animated_startmenu");
    animated_quickview.classList.remove('animated_quickview_panel');
    taskbar_calendar.classList.remove("animated_taskbar_calendar");
    hcu_contextmenu.scrollTop = 0;
    hcu_contextmenu.style.top = hcu_mouse.clientY + "px";
    hcu_contextmenu.style.left = hcu_mouse.clientX + "px";
    hcu_mouse.clientY >= window.innerHeight - 350 - 35 && (hcu_contextmenu.style.top = window.innerHeight - 350 - 35 + "px");
    5 >= hcu_mouse.clientY && (hcu_contextmenu.style.top = "5px");
    hcu_mouse.clientX >= window.innerWidth - 250 - 5 && (hcu_contextmenu.style.left = window.innerWidth - 250 - 5 + "px");
    5 >= hcu_mouse.clientX && (hcu_contextmenu.style.left = "5px");
    hcu_contextmenu.classList.add("animate_hcu_right_click");
    setTimeout(function () {
        window.addEventListener("click", function (hcucontxt) {
            hcucontxt.preventDefault();
            hcu_contextmenu.classList.remove("animate_hcu_right_click");
        }, {
            once: !0
        });
    }, 10);
}

// To do:
// không ấn chuột phải trong context menu
// Khi ấn chuột trái thì tắt menu đi