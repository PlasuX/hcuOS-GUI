var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (c) {
    var f = 0;
    return function () {
        return f < c.length ? {
            done: !1,
            value: c[f++],
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function (c) {
    return {
        next: $jscomp.arrayIteratorImpl(c)
    };
};
$jscomp.makeIterator = function (c) {
    var f = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
    return f ? f.call(c) : $jscomp.arrayIterator(c);
};
(function (c) {
    function f(b) {
        function g(l) {
            a.style.left = l.clientX - d + "px";
            a.style.top = l.clientY - k + "px";
            1 == (a.classList.contains("win_fullscreen") || a.classList.contains("win_topleft") || a.classList.contains("win_left") || a.classList.contains("win_topright") || a.classList.contains("win_right") || a.classList.contains("win_bottomright") || a.classList.contains("win_bottomleft")) && (a.classList.remove("win_fullscreen"), a.classList.remove("win_topleft"), a.classList.remove("win_left"), a.classList.remove("win_topright"), a.classList.remove("win_right"), a.classList.remove("win_bottomright"),
                a.classList.remove("win_bottomleft"), d = 10, k = 5, a.style.left = l.clientX + d + "px", a.style.top = l.clientY + k + "px");
            rmsnap(e);
            0 >= a.offsetTop && (a.style.top = 0, rmsnap(e), e.classList.add("app_snap_top"));
            0 >= a.offsetLeft && (a.style.left = 0, rmsnap(e), e.classList.add("app_snap_left"));
            30 >= window.innerHeight - a.getBoundingClientRect().bottom && (a.style.top = window.innerHeight - (a.getBoundingClientRect().bottom - a.getBoundingClientRect().y) - 30 + "px");
            0 >= window.innerWidth - a.getBoundingClientRect().right && (a.style.left = window.innerWidth - (a.getBoundingClientRect().right - a.getBoundingClientRect().x) + "px", rmsnap(e), e.classList.add("app_snap_right"));
            30 >= window.innerHeight - a.getBoundingClientRect().bottom && 0 >= a.offsetLeft && (rmsnap(e), e.classList.add("app_snap_bottomleft"));
            0 >= a.offsetTop && 0 >= a.offsetLeft && (rmsnap(e), e.classList.add("app_snap_topleft"));
            0 >= a.offsetTop && 0 >= window.innerWidth - a.getBoundingClientRect().right && (rmsnap(e), e.classList.add("app_snap_topright"));
            30 >= window.innerHeight - a.getBoundingClientRect().bottom && 0 >= window.innerWidth - a.getBoundingClientRect().right && (rmsnap(e), e.classList.add("app_snap_bottomright"));
            (4 >= av || 4 >= bv || 4 >= a_lt || 4 >= bv || 4 <= av && 4 >= bv || 4 <= a_lt && 4 >= b_lt) && (c.removeEventListener("mousemove", g));
        }

        function h() {
            c.removeEventListener("mousemove", g);
            c.removeEventListener("mouseup", h);
            switch (!0) {
                case e.classList.contains("app_snap_top"):
                    a.classList.add("win_fullscreen");
                    break;
                case e.classList.contains("app_snap_topleft"):
                    a.classList.add("win_topleft");
                    break;
                case e.classList.contains("app_snap_left"):
                    a.classList.add("win_left");
                    break;
                case e.classList.contains("app_snap_bottomleft"):
                    a.classList.add("win_bottomleft");
                    break;
                case e.classList.contains("app_snap_right"):
                    a.classList.add("win_right");
                    break;
                case e.classList.contains("app_snap_topright"):
                    a.classList.add("win_topright");
                    break;
                case e.classList.contains("app_snap_bottomright"):
                    a.classList.add("win_bottomright");
            }
            rmsnap(e);
        }
        var d = b.clientX - this.offsetLeft,
            k = b.clientY - this.offsetTop,
            a = this,
            m = a.getBoundingClientRect().x,
            n = a.getBoundingClientRect().right,
            p = a.getBoundingClientRect().y,
            q = a.getBoundingClientRect().bottom,
            e = document.getElementById("windows-app-snap");
        x = b.clientX;
        y = b.clientY;
        av = x - m;
        bv = y - p;
        a_lt = n - x;
        b_lt = q - y;
        c.addEventListener("mouseup", h);
        c.addEventListener("mousemove", g);
    }
    c.body.addEventListener("mousedown", function (b) {
        b.target.classList.contains("windows-app") && f.call(b.target, b);
    });
})(document);

function rmsnap(c) {
    c.classList.remove("app_snap_top");
    c.classList.remove("app_snap_topleft");
    c.classList.remove("app_snap_left");
    c.classList.remove("app_snap_bottomleft");
    c.classList.remove("app_snap_right");
    c.classList.remove("app_snap_topright");
    c.classList.remove("app_snap_bottomright");
}

function fullscreen(c) {
    c.parentNode.parentNode.classList.remove("win_topleft");
    c.parentNode.parentNode.classList.remove("win_left");
    c.parentNode.parentNode.classList.remove("win_topright");
    c.parentNode.parentNode.classList.remove("win_right");
    c.parentNode.parentNode.classList.remove("win_bottomright");
    c.parentNode.parentNode.classList.remove("win_bottomleft");
    c.parentNode.parentNode.classList.toggle("win_fullscreen");
}

function dbfullscr(c) {
    c.classList.remove("win_topleft");
    c.classList.remove("win_left");
    c.classList.remove("win_topright");
    c.classList.remove("win_right");
    c.classList.remove("win_bottomright");
    c.classList.remove("win_bottomleft");
    c.classList.toggle("win_fullscreen");
}

function zindex(c, f) {
    for (var b = $jscomp.makeIterator(document.querySelectorAll(".windows-app")), g = b.next(); !g.done; g = b.next()) {
        g = g.value, g.style.zIndex = "8", g.style.background = "#eee";
    }
    c.style.zIndex = "10";
    c.style.background = "rgba(251, 253, 254, 0.4)";
    var b = c.getBoundingClientRect().x,
        g = c.getBoundingClientRect().right,
        h = c.getBoundingClientRect().y,
        d = c.getBoundingClientRect().bottom,
        k = f.clientX,
        a = f.clientY;
    b = k - b;
    h = a - h;
    g -= k;
    a = d - a;
    d = c.children;
    /*window.onmousedown = function (e) {
    console.log(e.clientX - f.clientX, e.clientY - f.clientY)
    }*/
    if (4 >= b && 4 >= h) {

    } else {
        if (4 >= b && 4 >= a) {

        } else {
            if (4 >= g && 4 >= h) {

            } else {
                if (4 >= b && 4 <= h) {

                } else {
                    if (4 <= b && 4 >= h) { // trên -->xong
                        window.addEventListener('mousemove', retop);
                        topywin(f, c);
                    } else {
                        if (4 >= g && 4 >= a) {

                        } else {
                            if (4 >= g && 4 <= a) {

                            } else {
                                if (4 <= g && 4 >= a) {

                                } else {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function xydetect(c, f) {
    var b = c.getBoundingClientRect().x,
        g = c.getBoundingClientRect().right,
        h = c.getBoundingClientRect().y,
        d = c.getBoundingClientRect().bottom,
        k = f.clientX,
        a = f.clientY;
    b = k - b;
    h = a - h;
    g -= k;
    a = d - a;
    d = c.children;
    /*window.onmousedown = function (e) {
    console.log(e.clientX - f.clientX, e.clientY - f.clientY)
    }*/
    if (4 >= b && 4 >= h) {
        for (c.style.cursor = "nw-resize", b = 0; b < d.length; b++) {
            d[b].style.pointerEvents = "none";
        }
    } else {
        if (4 >= b && 4 >= a) {
            for (c.style.cursor = "ne-resize", b = 0; b < d.length; b++) {
                d[b].style.pointerEvents = "none";
            }
        } else {
            if (4 >= g && 4 >= h) {
                for (c.style.cursor = "ne-resize", b = 0; b < d.length; b++) {
                    d[b].style.pointerEvents = "none";
                }
            } else {
                if (4 >= b && 4 <= h) {
                    for (c.style.cursor = "ew-resize", b = 0; b < d.length; b++) {
                        d[b].style.pointerEvents = "none";
                    }
                } else {
                    if (4 <= b && 4 >= h) { // trên
                        for (c.style.cursor = "n-resize", b = 0; b < d.length; b++) {
                            d[b].style.pointerEvents = "none";
                        }
                    } else {
                        if (4 >= g && 4 >= a) {
                            for (c.style.cursor = "nw-resize", b = 0; b < d.length; b++) {
                                d[b].style.pointerEvents = "none";
                            }
                        } else {
                            if (4 >= g && 4 <= a) {
                                for (c.style.cursor = "ew-resize", b = 0; b < d.length; b++) {
                                    d[b].style.pointerEvents = "none";
                                }
                            } else {
                                if (4 <= g && 4 >= a) {
                                    for (c.style.cursor = "n-resize", b = 0; b < d.length; b++) {
                                        d[b].style.pointerEvents = "none";
                                    }
                                } else {
                                    for (c.style.cursor = "default", b = 0; b < d.length; b++) {
                                        d[b].style.pointerEvents = "auto";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function endxydetect(c) {
    c.style.cursor = "default";
    for (var f = 0; f < c.children.length; f++) {
        c.children[f].style.pointerEvents = "auto";
    }
};

window.onmouseup = () => {
    getwinloca.style.transition = 'height 100ms cubic-bezier(0,1,0,1), width 100ms cubic-bezier(0,1,0,1), background 100ms linear';
    window.removeEventListener('mousemove', retop);
}

var getoldtopval,getnewtopval, getwinloca, getwinlocaHeight;

function topywin(f, c) {
    getoldtopval = f.clientY;
    getwinloca = c;
    getwinlocaHeight = c.offsetHeight;
}

function retop(e) {
    e.preventDefault();
    getnewtopval = e.clientY;
    var topvalwinchange = getoldtopval - getnewtopval;
    getwinloca.style.transition = 'all 0ms';
    if (getwinloca.offsetHeight <= 230) {
        getwinloca.style.top = getwinloca.offsetTop + 'px'
    } else {
        getwinloca.style.top = getnewtopval + "px";
    }
    getwinloca.style.height = getwinlocaHeight + topvalwinchange + "px";
    //console.log(getoldtopval, getnewtopval, topvalwinchange, getwinloca.offsetHeight)
}
