var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
    var c = 0;
    return function () {
        return c < a.length ? {
            done: !1,
            value: a[c++],
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function (a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, b) {
    if (a == Array.prototype || a == Object.prototype) {
        return a;
    }
    a[c] = b.value;
    return a;
};
$jscomp.getGlobal = function (a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
    for (var c = 0; c < a.length; ++c) {
        var b = a[c];
        if (b && b.Math == Math) {
            return b;
        }
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, c) {
    var b = $jscomp.propertyToPolyfillSymbol[c];
    if (null == b) {
        return a[c];
    }
    b = a[b];
    return void 0 !== b ? b : a[c];
};
$jscomp.polyfill = function (a, c, b, e) {
    c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, b, e) : $jscomp.polyfillUnisolated(a, c, b, e));
};
$jscomp.polyfillUnisolated = function (a, c, b, e) {
    b = $jscomp.global;
    a = a.split(".");
    for (e = 0; e < a.length - 1; e++) {
        var f = a[e];
        if (!(f in b)) {
            return;
        }
        b = b[f];
    }
    a = a[a.length - 1];
    e = b[a];
    c = c(e);
    c != e && null != c && $jscomp.defineProperty(b, a, {
        configurable: !0,
        writable: !0,
        value: c
    });
};
$jscomp.polyfillIsolated = function (a, c, b, e) {
    var f = a.split(".");
    a = 1 === f.length;
    e = f[0];
    e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var g = 0; g < f.length - 1; g++) {
        var k = f[g];
        if (!(k in e)) {
            return;
        }
        e = e[k];
    }
    f = f[f.length - 1];
    b = $jscomp.IS_SYMBOL_NATIVE && "es6" === b ? e[f] : null;
    c = c(b);
    null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, f, {
        configurable: !0,
        writable: !0,
        value: c
    }) : c !== b && (void 0 === $jscomp.propertyToPolyfillSymbol[f] && ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + f), f = $jscomp.propertyToPolyfillSymbol[f], $jscomp.defineProperty(e, f, {
        configurable: !0,
        writable: !0,
        value: c
    })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (a) {
    if (a) {
        return a;
    }
    var c = function (f, g) {
        this.$jscomp$symbol$id_ = f;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        });
    };
    c.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
    };
    var b = 0,
        e = function (f) {
            if (this instanceof e) {
                throw new TypeError("Symbol is not a constructor");
            }
            return new c("jscomp_symbol_" + (f || "") + "_" + b++, f);
        };
    return e;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (a) {
    if (a) {
        return a;
    }
    a = Symbol("Symbol.iterator");
    for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), b = 0; b < c.length; b++) {
        var e = $jscomp.global[c[b]];
        "function" === typeof e && "function" != typeof e.prototype[a] && $jscomp.defineProperty(e.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            }
        });
    }
    return a;
}, "es6", "es3");
$jscomp.iteratorPrototype = function (a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function () {
        return this;
    };
    return a;
};
$jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
    var c = 0;
    return function () {
        return c < a.length ? {
            done: !1,
            value: a[c++],
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function (a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    };
};
$jscomp.makeIterator = function (a) {
    var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return c ? c.call(a) : $jscomp.arrayIterator(a);
};

var getoldtopval, getnewtopval, getwinloca, getwinlocaHeight, getoldleftval, getnewleftvar, getwinlocaWidth, getoldrightval, getnewrightvar, getoldbottomval, getnewbottomvar;

(function (a) {
    function c(b) {
        function e(l) {
            (4 >= av || 4 >= bv || 4 >= a_lt || 4 >= bv || 4 <= av && 4 >= bv || 4 <= a_lt && 4 >= b_lt) && f();
            d.style.left = l.clientX - g + "px";
            d.style.top = l.clientY - k + "px";
            1 == (d.classList.contains("win_fullscreen") || d.classList.contains("win_topleft") || d.classList.contains("win_left") || d.classList.contains("win_topright") || d.classList.contains("win_right") || d.classList.contains("win_bottomright") || d.classList.contains("win_bottomleft")) && (d.classList.remove("win_fullscreen"), d.classList.remove("win_topleft"), d.classList.remove("win_left"), d.classList.remove("win_topright"), d.classList.remove("win_right"), d.classList.remove("win_bottomright"),
                d.classList.remove("win_bottomleft"), g = 20, k = 20, d.style.left = l.clientX + g + "px", d.style.top = l.clientY + k + "px");
            rmsnap(h);
            0 >= d.offsetTop && (d.style.top = 0, rmsnap(h), h.classList.add("app_snap_top"));
            0 >= d.offsetLeft && (d.style.left = 0, rmsnap(h), h.classList.add("app_snap_left"));
            30 >= window.innerHeight - d.getBoundingClientRect().bottom && (d.style.top = window.innerHeight - (d.getBoundingClientRect().bottom - d.getBoundingClientRect().y) - 30 + "px");
            0 >= window.innerWidth - d.getBoundingClientRect().right && (d.style.left = window.innerWidth - (d.getBoundingClientRect().right - d.getBoundingClientRect().x) + "px", rmsnap(h), h.classList.add("app_snap_right"));
            30 >= window.innerHeight - d.getBoundingClientRect().bottom && 0 >= d.offsetLeft && (rmsnap(h), h.classList.add("app_snap_bottomleft"));
            0 >= d.offsetTop && 0 >= d.offsetLeft && (rmsnap(h), h.classList.add("app_snap_topleft"));
            0 >= d.offsetTop && 0 >= window.innerWidth - d.getBoundingClientRect().right && (rmsnap(h), h.classList.add("app_snap_topright"));
            30 >= window.innerHeight - d.getBoundingClientRect().bottom && 0 >= window.innerWidth - d.getBoundingClientRect().right && (rmsnap(h), h.classList.add("app_snap_bottomright"));
        }

        function f() {
            a.removeEventListener("mousemove", e);
            a.removeEventListener("mouseup", f);
            switch (!0) {
                case h.classList.contains("app_snap_top"):
                    d.classList.add("win_fullscreen");
                    break;
                case h.classList.contains("app_snap_topleft"):
                    d.classList.add("win_topleft");
                    break;
                case h.classList.contains("app_snap_left"):
                    d.classList.add("win_left");
                    break;
                case h.classList.contains("app_snap_bottomleft"):
                    d.classList.add("win_bottomleft");
                    break;
                case h.classList.contains("app_snap_right"):
                    d.classList.add("win_right");
                    break;
                case h.classList.contains("app_snap_topright"):
                    d.classList.add("win_topright");
                    break;
                case h.classList.contains("app_snap_bottomright"):
                    d.classList.add("win_bottomright");
            }
            rmsnap(h);
        }
        var g = b.clientX - this.offsetLeft,
            k = b.clientY - this.offsetTop,
            d = this,
            m = d.getBoundingClientRect().x,
            n = d.getBoundingClientRect().right,
            p = d.getBoundingClientRect().y,
            q = d.getBoundingClientRect().bottom,
            h = document.getElementById("windows-app-snap");
        x = b.clientX;
        y = b.clientY;
        av = x - m;
        bv = y - p;
        a_lt = n - x;
        b_lt = q - y;
        a.addEventListener("mouseup", f);
        a.addEventListener("mousemove", e);
    }
    a.body.addEventListener("mousedown", function (b) {
        b.target.classList.contains("windows-app") && c.call(b.target, b);
    });
})(document);

function rmsnap(a) {
    a.classList.remove("app_snap_top");
    a.classList.remove("app_snap_topleft");
    a.classList.remove("app_snap_left");
    a.classList.remove("app_snap_bottomleft");
    a.classList.remove("app_snap_right");
    a.classList.remove("app_snap_topright");
    a.classList.remove("app_snap_bottomright");
}

function fullscreen(a) {
    a.parentNode.parentNode.classList.remove("win_topleft");
    a.parentNode.parentNode.classList.remove("win_left");
    a.parentNode.parentNode.classList.remove("win_topright");
    a.parentNode.parentNode.classList.remove("win_right");
    a.parentNode.parentNode.classList.remove("win_bottomright");
    a.parentNode.parentNode.classList.remove("win_bottomleft");
    a.parentNode.parentNode.classList.toggle("win_fullscreen");
}

function dbfullscr(a) {
    a.classList.remove("win_topleft");
    a.classList.remove("win_left");
    a.classList.remove("win_topright");
    a.classList.remove("win_right");
    a.classList.remove("win_bottomright");
    a.classList.remove("win_bottomleft");
    a.classList.toggle("win_fullscreen");
}

function zindex(a, c) {
    for (var b = $jscomp.makeIterator(document.querySelectorAll(".windows-app")), e = b.next(); !e.done; e = b.next()) {
        e = e.value, e.style.zIndex = "8", e.style.opacity = "0.8";
    }
    a.style.zIndex = "10";
    a.style.opacity = "1";
    b = a.getBoundingClientRect().x;
    e = a.getBoundingClientRect().right;
    var f = a.getBoundingClientRect().y,
        g = a.getBoundingClientRect().bottom,
        k = c.clientX,
        d = c.clientY;
    b = k - b;
    f = d - f;
    e -= k;
    d = g - d;
    4 >= b && 4 >= f ? (window.addEventListener("mousemove", releft), leftywin(c, a), window.addEventListener("mousemove", retop), topywin(c, a)) : 4 >= b && 4 >= d ? (window.addEventListener("mousemove", rebottom), bottomywin(c, a), window.addEventListener("mousemove", releft), leftywin(c, a)) : 4 >= e && 4 >= f ? (window.addEventListener("mousemove", retop), topywin(c, a), window.addEventListener("mousemove", reright), rightywin(c, a)) : 4 >= b && 4 <= f ? (window.addEventListener("mousemove", releft),
        leftywin(c, a)) : 4 <= b && 4 >= f ? (window.addEventListener("mousemove", retop), topywin(c, a)) : 4 >= e && 4 >= d ? (window.addEventListener("mousemove", rebottom), bottomywin(c, a), window.addEventListener("mousemove", reright), rightywin(c, a)) : 4 >= e && 4 <= d ? (window.addEventListener("mousemove", reright), rightywin(c, a)) : 4 <= e && 4 >= d && (window.addEventListener("mousemove", rebottom), bottomywin(c, a));
}

function xydetect(a, c) {
    var b = a.getBoundingClientRect().x,
        e = a.getBoundingClientRect().right,
        f = a.getBoundingClientRect().y,
        g = a.getBoundingClientRect().bottom,
        k = c.clientX,
        d = c.clientY;
    b = k - b;
    f = d - f;
    e -= k;
    d = g - d;
    g = a.children;
    if (4 >= b && 4 >= f) {
        for (a.style.cursor = "nw-resize", b = 0; b < g.length; b++) {
            g[b].style.pointerEvents = "none";
        }
    } else {
        if (4 >= b && 4 >= d) {
            for (a.style.cursor = "ne-resize", b = 0; b < g.length; b++) {
                g[b].style.pointerEvents = "none";
            }
        } else {
            if (4 >= e && 4 >= f) {
                for (a.style.cursor = "ne-resize", b = 0; b < g.length; b++) {
                    g[b].style.pointerEvents = "none";
                }
            } else {
                if (4 >= b && 4 <= f) {
                    for (a.style.cursor = "ew-resize", b = 0; b < g.length; b++) {
                        g[b].style.pointerEvents = "none";
                    }
                } else {
                    if (4 <= b && 4 >= f) {
                        for (a.style.cursor = "n-resize", b = 0; b < g.length; b++) {
                            g[b].style.pointerEvents = "none";
                        }
                    } else {
                        if (4 >= e && 4 >= d) {
                            for (a.style.cursor = "nw-resize", b = 0; b < g.length; b++) {
                                g[b].style.pointerEvents = "none";
                            }
                        } else {
                            if (4 >= e && 4 <= d) {
                                for (a.style.cursor = "ew-resize", b = 0; b < g.length; b++) {
                                    g[b].style.pointerEvents = "none";
                                }
                            } else {
                                if (4 <= e && 4 >= d) {
                                    for (a.style.cursor = "n-resize", b = 0; b < g.length; b++) {
                                        g[b].style.pointerEvents = "none";
                                    }
                                } else {
                                    for (a.style.cursor = "default", b = 0; b < g.length; b++) {
                                        g[b].style.pointerEvents = "auto";
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

function endxydetect(a) {
    a.style.cursor = "default";
    for (var c = 0; c < a.children.length; c++) {
        a.children[c].style.pointerEvents = "auto";
    }
}
window.onmouseup = function () {
    var i = 0;
    if (0 != document.querySelectorAll(".windows-app").length)
        for (i = 0; i < document.querySelectorAll(".windows-app").length; i++) document.querySelectorAll(".windows-app")[i].style.transition = "height 100ms cubic-bezier(0,1,0,1), width 100ms cubic-bezier(0,1,0,1), opacity 300ms cubic-bezier(0,1,0,1) 50ms";
    window.removeEventListener("mousemove", retop);
    window.removeEventListener("mousemove", reright);
    window.removeEventListener("mousemove", rebottom);
    window.removeEventListener("mousemove", releft);
};

function topywin(a, c) {
    getoldtopval = a.clientY;
    getwinloca = c;
    getwinlocaHeight = c.offsetHeight;
}

function retop(a) {
    a.preventDefault();
    getnewtopval = a.clientY;
    a = getoldtopval - getnewtopval;
    getwinloca.style.transition = "all 0ms";
    getwinloca.style.top = 230 >= getwinloca.offsetHeight ? getwinloca.offsetTop + "px" : getnewtopval + "px";
    getwinloca.style.height = getwinlocaHeight + a + "px";
}

function leftywin(a, c) {
    getoldleftval = a.clientX;
    getwinloca = c;
    getwinlocaWidth = c.offsetWidth;
}

function releft(a) {
    a.preventDefault();
    getnewleftvar = a.clientX;
    a = getoldleftval - getnewleftvar;
    getwinloca.style.transition = "all 0ms";
    getwinloca.style.left = 300 >= getwinloca.offsetWidth ? getwinloca.offsetLeft + "px" : getnewleftvar + "px";
    getwinloca.style.width = getwinlocaWidth + a + "px";
}

function rightywin(a, c) {
    getoldrightval = a.clientX;
    getwinloca = c;
    getwinlocaWidth = c.offsetWidth;
}

function reright(a) {
    a.preventDefault();
    getnewrightvar = a.clientX;
    getwinloca.style.transition = "all 0ms";
    getwinloca.style.width = getwinlocaWidth + (getnewrightvar - getoldrightval) + "px";
}

function bottomywin(a, c) {
    getoldbottomval = a.clientY;
    getwinloca = c;
    getwinlocaHeight = c.offsetHeight;
}

function rebottom(a) {
    a.preventDefault();
    getnewbottomvar = a.clientY;
    a = getnewbottomvar - getoldbottomval;
    getwinloca.style.transition = "all 0ms";
    getwinloca.style.height = getwinlocaHeight + a + "px";
}

function closeprogram(a) {
    a.parentNode.parentNode.classList.toggle('win_close_ani');
    setTimeout(function () {
        a.parentNode.parentNode.remove();
    }, 175);
}

function minmax_program(a) {
    var b = a.parentNode.parentNode;
    b.classList.toggle('win_minmax_ani');
    setTimeout(function () {
        if (b.classList.contains('win_minmax_ani')) {
            b.style.display = 'none';
        } else {
            b.style.display = 'block';
        }
    }, 175);
}