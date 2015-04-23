var Pic = new Array()
Pic[0] = 'd.jpg'
Pic[1] = 'n.jpg'
var hours = new Date().getHours();
function runBGSlideShow() {
    if (hours > 6 && hours < 19) {
        document.body.background = Pic[0];
    }
    else {
        document.body.background = Pic[1];
    }
}
setInterval(check, 60000); // выполняется раз в минуту, чтобы не слишком нагружать
check();

