var taskbar_calendar = document.getElementById('taskbar_calendar');

function opendatetb() {
    taskbar_calendar.classList.toggle('animated_taskbar_calendar');
    taskbar_calendar.classList.contains("animated_taskbar_calendar") && setTimeout(function rmtskclndr() {
        window.addEventListener("click", function (taskbar_calendar_menu) {
            taskbar_calendar.contains(taskbar_calendar_menu.target) ? rmtskclndr() : taskbar_calendar.classList.remove("animated_taskbar_calendar");
        }, {
            once: !0
        });
    }, 10);
}
