var animated_startmenu = document.getElementById("startmenu");

function openstartmenu() {
    animated_startmenu.classList.toggle("animated_startmenu");
    animated_startmenu.classList.contains("animated_startmenu") && setTimeout(function rmstrtmn() {
        window.addEventListener("click", function (startmenu) {
            animated_startmenu.contains(startmenu.target) ? rmstrtmn() : animated_startmenu.classList.remove("animated_startmenu");
        }, {
            once: !0
        });
    }, 10);
}

