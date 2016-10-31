'use strict'

function time2text(time) {
    var hour = time.substring(0, 2)
    var minute = time.substring(3, 5)
    var am = morn_or_night(hour)
    var oClock = is_it_oclock(minute)

    console.log('hour', hour, 'minute', minute)

    if (time === '01:00') {
        return "one " + oClock + am

    }
    if (time === '02:00') {
        return "two " + oClock + am

    }
    if (time === '03:00') {
        return "three " + oClock + am

    }
    if (time === '04:00') {
        return "four " + oClock + am

    }
    if (time === '05:00') {
        return "five " + oClock + am

    }
    if (time === '06:00') {
        return "six " + oClock + am

    }
    if (time === '07:00') {
        return "seven " + oClock + am

    }
    if (time === '08:00') {
        return "eight " + oClock + am

    }
    if (time === '09:00') {
        return "nine " + oClock + am

    }
    if (time === '10:00') {
        return "ten " + oClock + am

    }
    if (time === '11:00') {
        return "eleven " + oClock + am

    }
    if (time === '12:00') {
        return 'noon'
    } else {
        return ('midnight')
    }

}

function morn_or_night(hour) {
    if (hour[0] >= 0 && hour[0] < 12) {
        return "in the morning"
    } else if (hour[0] > 12 && hour[0] < 18) {
        return "in the afternoon"
    } else
        return "in the evening"
}

function is_it_oclock(minute) {
    if (minute[0] === '0' && minute[1] === '0') {
        return "o'clock "
    }
}



module.exports = time2text
