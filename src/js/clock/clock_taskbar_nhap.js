setInterval(showTime, 1000);

function showTime() {
    var time = new Date;
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var year = time.getFullYear();
    var date = time.getDate();
    if (date > 3) {
        var date_letter = "th"
    } else switch (date) {
        case 1:
            date_letter = "st";
            break;
        case 2:
            date_letter = "nd";
            break;
        case 3:
            date_letter = "rd"
    }

    var month = new Array(12);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var month_num = month[time.getMonth()];

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var day = weekday[time.getDay()];
    //console.log(day + ", " + month_num + " " + date + date_letter + " " + year) //for debugging

    var am_pm = "SA";
    if (hour > 12) {
        hour -= 12;
        am_pm = "CH";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var currentTime = hour + ":" + min + " " + am_pm;
    document.getElementById("clock").innerHTML = currentTime;

    var taskbartime_info = document.getElementById('taskbar_time')
    taskbartime_info.setAttribute('data-title', day + ", " + month_num + " " + date + date_letter + " " + year)
}

showTime();

//nháp 2
window.onload = function () {
    function showTime() {
        var time = new Date,
            hour = time.getHours(),
            min = time.getMinutes(),
            sec = time.getSeconds();
        var year = time.getFullYear(),
            date = time.getDate();
        var tsk_cal_sec_ring = document.getElementById('tsk_cal_sec_ring'),
            tsk_cal_min_ring = document.getElementById('tsk_cal_min_ring'),
            tsk_cal_hr_ring = document.getElementById('tsk_cal_hr_ring');
        var tsk_digi_hr = document.getElementById('tsk_digi_hr'),
            tsk_digi_min = document.getElementById('tsk_digi_min'),
            tsk_digi_sec = document.getElementById('tsk_digi_sec');
        var tsk_digi_wkday = document.getElementById('tsk_digi_wkday'),
            tsk_digi_mon_n_day = document.getElementById('tsk_digi_mon_n_day'),
            tsk_digi_year = document.getElementById('tsk_digi_year');
        if (3 < date) {
            var date_letter = "th";
        } else {
            switch (date) {
                case 1:
                    date_letter = "st";
                    break;
                case 2:
                    date_letter = "nd";
                    break;
                case 3:
                    date_letter = "rd";
            }
        }
        var month = Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        month = month[time.getMonth()];
        var weekday = Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        time = weekday[time.getDay()];
        weekday = "AM";
        12 < hour && (hour -= 12, weekday = "PM");
        0 == hour && (hr = 12, am_pm = "AM");
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        //-------------
        //full time info...
        tsk_cal_sec_ring.style.transform = "translate(-50%, -50%) rotate(" + (46.5 + (sec * 1.5)) + "deg)";
        tsk_cal_min_ring.style.transform = "translate(-50%, -50%) rotate(" + (46.5 + (min * 1.5)) + "deg)";
        tsk_cal_hr_ring.style.transform = "translate(-50%, -50%) rotate(" + (52.5 + (hour * 7.5)) + "deg)";
        tsk_digi_hr.innerHTML = 0 + hour + ":";
        tsk_digi_min.innerHTML = min;
        tsk_digi_sec.innerHTML = sec;
        tsk_digi_year.innerHTML = year + '.'
        //-------------
        hour = `${hour}:${min} ${weekday}`;
        document.getElementById("clock").innerHTML = hour;
        document.getElementById("taskbar_time").setAttribute("data-title", `${time}, ${month} ${date}${date_letter} ${year}`);

        var month = Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        month = month[time.getMonth()];
        var weekday = Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        time = weekday[time.getDay()];

        tsk_digi_wkday.innerHTML = time;
        tsk_digi_mon_n_day.innerHTML = month + ' ' + date + ' ' + date_letter
    };
    setInterval(showTime, 1000);
    showTime();
}

//nhap lần 3
function showTime() {
    var time = new Date,
        hour = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();
    var year = time.getFullYear(),
        date = time.getDate();
    var tsk_cal_sec_ring = document.getElementById('tsk_cal_sec_ring'),
        tsk_cal_min_ring = document.getElementById('tsk_cal_min_ring'),
        tsk_cal_hr_ring = document.getElementById('tsk_cal_hr_ring');
    var tsk_digi_hr = document.getElementById('tsk_digi_hr'),
        tsk_digi_min = document.getElementById('tsk_digi_min'),
        tsk_digi_sec = document.getElementById('tsk_digi_sec'),
        tsk_digi_am_pm = document.getElementById('tsk_digi_am_pm');
    var tsk_digi_wkday = document.getElementById('tsk_digi_wkday'),
        tsk_digi_mon_n_day = document.getElementById('tsk_digi_mon_n_day'),
        tsk_digi_year = document.getElementById('tsk_digi_year');
    if (3 < date) {
        var date_letter = "th";
    } else {
        switch (date) {
            case 1:
                date_letter = "st";
                break;
            case 2:
                date_letter = "nd";
                break;
            case 3:
                date_letter = "rd";
        }
    }
    var month = Array(12);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    month = month[time.getMonth()];
    var weekday = Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    time = weekday[time.getDay()];
    weekday = "AM";
    12 < hour && (hour -= 12, weekday = "PM");
    0 == hour && (hr = 12, weekday = "AM");
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    //-------------
    //full time info...
    tsk_cal_sec_ring.style.transform = "translate(-50%, -50%) rotate(" + (45 + (sec * 90 / 59)) + "deg)";
    tsk_cal_min_ring.style.transform = "translate(-50%, -50%) rotate(" + (45 + (min * 90 / 59)) + "deg)";
    tsk_cal_hr_ring.style.transform = "translate(-50%, -50%) rotate(" + (45 + (hour * 90 / 11)) + "deg)";
    tsk_digi_hr.innerHTML = hour + ":";
    tsk_digi_min.innerHTML = min;
    tsk_digi_sec.innerHTML = sec;
    tsk_digi_year.innerHTML = year + '.';
    tsk_digi_am_pm.innerHTML = weekday;
    //-------------
    hour = `${hour}:${min} ${weekday}`;
    document.getElementById("clock").innerHTML = hour;
    document.getElementById("taskbar_time").setAttribute("data-title", `${time}, ${month} ${date}${date_letter} ${year}`);

    var time = new Date;
    var month = Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    month = month[time.getMonth()];
    var weekday = Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    time = weekday[time.getDay()];

    tsk_digi_wkday.innerHTML = time;
    tsk_digi_mon_n_day.innerHTML = month + ' ' + date + '<sup>' + date_letter + '</sup>'
};
setInterval(showTime, 1000);
showTime();