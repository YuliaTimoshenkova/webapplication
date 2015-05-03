var c_x = 100;
var c_y = 100;
function initiate() {
    var element = document.getElementById("canvas");
    var ctx = element.getContext('2d');
    //звезда
    //1
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(c_x - 17, c_y-13);
    ctx.lineTo(c_x, 10);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "red";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //2
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(114,82);
    ctx.lineTo(c_x, 10);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "#ff6600";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //3
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(114, 82);
    ctx.lineTo(200, 70);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "red";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //4
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(120, 110);
    ctx.lineTo(200, 70);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "#ff6600";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //5
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(83, 110);
    ctx.lineTo(20, 70);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "red";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //6
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(80, 80);
    ctx.lineTo(20, 70);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "#ff6600";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //7
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(80, 110);
    ctx.lineTo(40, 180);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "#ff6600";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //8
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);;
    ctx.lineTo(100, 120);
    ctx.lineTo(40, 180);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "red";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //9
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(100, 120);
    ctx.lineTo(150, 180);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "#ff6600";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    //10
    ctx.beginPath();
    ctx.moveTo(c_x, c_y);
    ctx.lineTo(120, 110);
    ctx.lineTo(150, 180);
    ctx.lineTo(c_x, c_y);
    //заливка
    ctx.fillStyle = "red";
    ctx.fill();
    //контур
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

addEventListener("load", initiate);