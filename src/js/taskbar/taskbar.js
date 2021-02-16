window.addEventListener('load', function () {
    setTimeout(function () {
        var i = 0;
        var a = document.getElementsByClassName('windows-app');
        var preview_desktop_btn = document.getElementById('preview_desktop_btn');
        var taskbar_app_space = document.getElementById('taskbar_app_space');
        var taskbar_app_quan = taskbar_app_space.children.length;
        console.log(taskbar_app_quan);
        preview_desktop_btn.addEventListener("mouseover", peakdesktop);
        preview_desktop_btn.addEventListener("mouseout", out_peakdesktop);
        preview_desktop_btn.addEventListener("click", hide_app_dsk);
        function peakdesktop() {
            for (i = 0; i < a.length; i++) {
                a[i].classList.add('preview_desktop');
            }
        }
        function out_peakdesktop() {
            for (i = 0; i < a.length; i++) {
                a[i].classList.remove('preview_desktop');
            }
        }
        function hide_app_dsk() {
            for (i = 0; i < a.length; i++) {
                a[i].classList.remove('preview_desktop');
                a[i].classList.add('hide_app_dsk');
            }
        }
    }, 750);
});

function cur_runapp(a) {
    var b = a.children[0].children[0];
    b.classList.toggle('unhide_cur_run_app_dot')
}