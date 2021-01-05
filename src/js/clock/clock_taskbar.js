var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (c) {
    return c.raw = c;
};
$jscomp.createTemplateTagFirstArgWithRaw = function (c, d) {
    c.raw = d;
    return c;
};

function showTime() {
    var c = new Date,
        d = c.getHours(),
        e = c.getMinutes(),
        f = c.getSeconds(),
        k = c.getFullYear(),
        h = c.getDate(),
        l = document.getElementById("tsk_cal_sec_ring"),
        m = document.getElementById("tsk_cal_min_ring"),
        n = document.getElementById("tsk_cal_hr_ring"),
        p = document.getElementById("tsk_digi_hr"),
        q = document.getElementById("tsk_digi_min"),
        r = document.getElementById("tsk_digi_sec"),
        t = document.getElementById("tsk_digi_am_pm"),
        u = document.getElementById("tsk_digi_wkday"),
        v = document.getElementById("tsk_digi_mon_n_day"),
        w = document.getElementById("tsk_digi_year");
    if (3 < h && h != 21 && h != 22 && h != 23 && h != 31) {
        var g = "th";
    } else {
        switch (h) {
            case 1:
            case 21:
            case 31:
                g = "st";
                break;
            case 2:
            case 22:
                g = "nd";
                break;
            case 3:
            case 23:
                g = "rd";
        }
    }
    var a = Array(12);
    a[0] = "Jan";
    a[1] = "Feb";
    a[2] = "Mar";
    a[3] = "Apr";
    a[4] = "May";
    a[5] = "Jun";
    a[6] = "Jul";
    a[7] = "Aug";
    a[8] = "Sep";
    a[9] = "Oct";
    a[10] = "Nov";
    a[11] = "Dec";
    a = a[c.getMonth()];
    var b = Array(7);
    b[0] = "Sun";
    b[1] = "Mon";
    b[2] = "Tue";
    b[3] = "Wed";
    b[4] = "Thu";
    b[5] = "Fri";
    b[6] = "Sat";
    c = b[c.getDay()];
    b = "AM";
    12 < d && (d -= 12, b = "PM");
    0 == d && (hr = 12, b = "AM");
    e = 10 > e ? "0" + e : e;
    f = 10 > f ? "0" + f : f;
    l.style.transform = "translate(-50%, -50%) rotate(" + (45 + 90 * f / 59) + "deg)";
    m.style.transform = "translate(-50%, -50%) rotate(" + (45 + 90 * e / 59) + "deg)";
    n.style.transform = "translate(-50%, -50%) rotate(" + (45 + 90 * d / 12) + "deg)";
    p.innerHTML = d + ":";
    q.innerHTML = e;
    r.innerHTML = f;
    w.innerHTML = k + ".";
    t.innerHTML = b;
    d = d + ":" + e + " " + b;
    document.getElementById("clock").innerHTML = d;
    document.getElementById("taskbar_time").setAttribute("data-title", c + ", " + a + " " + h + g + " " + k);
    c = new Date;
    a = Array(12);
    a[0] = "January";
    a[1] = "February";
    a[2] = "March";
    a[3] = "April";
    a[4] = "May";
    a[5] = "June";
    a[6] = "July";
    a[7] = "August";
    a[8] = "September";
    a[9] = "October";
    a[10] = "November";
    a[11] = "December";
    a = a[c.getMonth()];
    b = Array(7);
    b[0] = "Sunday";
    b[1] = "Monday";
    b[2] = "Tuesday";
    b[3] = "Wednesday";
    b[4] = "Thursday";
    b[5] = "Friday";
    b[6] = "Saturday";
    c = b[c.getDay()];
    u.innerHTML = c;
    v.innerHTML = a + " " + h + "<sup>" + g + "</sup>";
}
setInterval(showTime, 1000);
showTime();