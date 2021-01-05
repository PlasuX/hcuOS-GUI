var animated_quickview = document.getElementById('quickview_panel');

function openquickviewmenu() {
    animated_quickview.classList.toggle('animated_quickview_panel');
    animated_quickview.classList.contains("animated_quickview_panel") && setTimeout(function rmqckvwmn() {
        window.addEventListener("click", function (quickview_menu) {
            quickview_menu.preventDefault();
            animated_quickview.contains(quickview_menu.target) ? rmqckvwmn() : animated_quickview.classList.remove("animated_quickview_panel");
        }, {
            once: !0
        });
    }, 10);
}