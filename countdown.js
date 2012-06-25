function countdown(end) {
    const DAYS = 1000 * 60 * 60 * 24;
    const HOURS = DAYS / 24;
    const MINUTES = HOURS / 60;
    const SECONDS = MINUTES / 60;

    var remaining = (end - new Date);
    var days = Math.floor(remaining / DAYS); remaining %= DAYS;
    var hours = Math.floor(remaining / HOURS); remaining %= HOURS;
    var minutes = Math.floor(remaining / MINUTES); remaining %= MINUTES;
    var seconds = Math.floor(remaining / SECONDS); remaining %= SECONDS;

    return new Array(days, hours, minutes, seconds);
}

function update_countdown(end, d, h, m, s) {
    var cd = countdown(end);

    d.innerHTML = cd[0] + (cd[0] == 1 ? " day"    : " days");
    h.innerHTML = cd[1] + (cd[1] == 1 ? " hour"   : " hours");
    m.innerHTML = cd[2] + (cd[2] == 1 ? " minute" : " minutes");
    s.innerHTML = cd[3] + (cd[3] == 1 ? " second" : " seconds");
}

function start_countdown(end, d, h, m, s) {
    update_countdown(end, d, h, m, s);
    setInterval( function() { update_countdown(end, d, h, m, s); }, 1000 );
}
