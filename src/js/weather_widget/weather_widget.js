/*
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (c) {
    return c.raw == c;
};
$jscomp.createTemplateTagFirstArgWithRaw = function (c, e) {
    c.raw = e;
    return c;
};

function dbtt() {
    function c(b) {
        a.open("GET", "https://www.iplocate.io/api/lookup/" + b, !0);
        a.onload = function () {
            if (200 <= this.status && 400 > this.status) {
                var d = JSON.parse(this.response);
                console.log(d);
                var f = d.latitude;
                d = d.longitude;
            } else {
                console.log("There are some error in here, sorry");
            }
            e(f, d);
        };
        a.onerror = function () {
            console.log("Cant get your Ip. sorry :(");
        };
        a.send();
    }

    function e(b, d) {
        a.open("GET", "https://api.openweathermap.org/data/2.5/onecall?lat=" + b + "&lon=" + d + "&appid=bf75512d0d69c33fe053ba09d9b8ae85", !0);
        a.onload = function () {
            if (200 <= this.status && 400 > this.status) {
                var f = JSON.parse(this.response);
                console.log(f);
                //console.log(f.current)
            } else {
                console.log("There are some error in here, sorry");
            }
            var current_weather_info = f.current;
            widget_weather_info(current_weather_info);
        };
        a.onerror = function () {
            console.log("Cant get your Ip. sorry :(");
        };
        a.send();
    }
    var a = new XMLHttpRequest();
    a.open("GET", "https://api.ipify.org/?format=json", !0);
    a.onload = function () {
        if (200 <= this.status && 400 > this.status) {
            var b = JSON.parse(this.response);
            console.log(b);
            b = b.ip;
        } else {
            console.log("There are some error in here, sorry");
        }
        c(b);
    };
    a.onerror = function () {
        console.log("Cant get your Ip. sorry :(");
    };
    a.send();
}
dbtt();

function widget_weather_info(current_weather_info) {
    console.log(current_weather_info);
}
*/