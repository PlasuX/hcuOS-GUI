var desktop_wallpaper = document.getElementById('wallpaper');

desktop_wallpaper.oncontextmenu = function (hcu_mouse) {
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
        window.addEventListener("mousedown", function () {
            hcu_contextmenu.classList.remove("animate_hcu_right_click");
        }, {
            once: !0
        });
    }, 10);
};
