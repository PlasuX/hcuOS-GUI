var animated_vol = document.getElementById("volume_panel");

function openvolpanel() {
    animated_vol.classList.toggle("animated_volume");
    animated_vol.classList.contains("animated_volume") && setTimeout(function rmvlm() {
        window.addEventListener("click", function (volumepanel) {
            animated_vol.contains(volumepanel.target) ? rmvlm() : animated_vol.classList.remove("animated_volume");
        }, {
            once: !0
        });
    }, 10);
}

function iconvol(a) {
    var vol_icon_panel = document.getElementById('vol_icon_panel');
    if (a > 0 & a <= 33) {
        vol_icon_panel.src = 'src/image/svg/volume_mute.svg';
    } else {
        if (a > 33 & a <= 66) {
            vol_icon_panel.src = 'src/image/svg/volume_down.svg';
        } else {
            if (a > 66 & a <= 100) {
                vol_icon_panel.src = 'src/image/svg/volume_up.svg';
            } else {
                vol_icon_panel.src = 'src/image/svg/volume_off.svg';
            }
        }
    }
}