var arcPos_x = 10;
var arcPos_y = 10;
var lune_x = 10;
var lune_y = 400;
function initiate() {
    var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5.5;
    ctx.lineCap = 'butt';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //небо
    //заливка
    if (arcPos_y >= 10 && arcPos_y < 50) { 
    ctx.fillStyle = "#589dd0";
    ctx.fill();
    ctx.beginPath();
    ctx.fillRect(0, 0, 1000, 300);
    }
    else if (arcPos_y >= 50 && arcPos_y < 100)
    {
        ctx.fillStyle = "#296999";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (arcPos_y >= 100 && arcPos_y < 150) {
        ctx.fillStyle = "#1a4780";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (arcPos_y >= 150 && arcPos_y < 200) {
        ctx.fillStyle = "#003366";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (arcPos_y >= 200 && arcPos_y < 250) {
        ctx.fillStyle = "#001524";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else if (arcPos_y >= 250 && arcPos_y < 400) {
        ctx.fillStyle = "#0e1824";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    else {
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(0, 0, 1000, 300);
    }
    //солнце
    
        ctx.beginPath();
        ctx.arc(arcPos_x, arcPos_y, 120, 0, Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
        arcPos_y += 1;
        arcPos_x += 1;

        //заливка
        ctx.fillStyle = "#f9fb51";
        ctx.fill();
        //контур
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#f9ec6e";
        ctx.stroke();
    
    //луна
    if (arcPos_y >= 300)
    {
        var lune_y = 10;
        ctx.beginPath();
        ctx.arc(lune_x, lune_y, 75, 0, Math.PI * 2, true);//start point, radius, starting angle, degree(rad), clockwise
        lune_x += 1;
        lune_y += 1;
        //заливка
        ctx.fillStyle = "white";
        ctx.fill();
    }
    ctx.beginPath();
    //земля
    //заливка
    ctx.fillStyle = "#f9c31e";
    ctx.fill();
    //контур
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#f9c31e";
    ctx.stroke();
    ctx.beginPath();
    ctx.fillRect(0, 300, 1000, 200);

    //пирамида
    ctx.beginPath();
    ctx.moveTo(400, 198);
    ctx.lineTo(200, 400);
    ctx.lineTo(600, 400);
    ctx.lineTo(400, 195);
    //заливка
    ctx.fillStyle = "#f9a339";
    ctx.fill();
    //контур
    ctx.lineWidth = 5;
    ctx.strokeStyle = "orange";
    ctx.stroke();

    setTimeout("initiate()", 20);
}

addEventListener("load", initiate);