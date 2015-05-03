var controlX_1 = 300;
var controlY_1 = 200;
var controlX_2 = 700;
var controlY_2 = 600;
var endPointX = 700;
var endPointY = 400;
function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    //background
    var gradient = canvas.createLinearGradient(0, 10, 100, 1000);
    gradient.addColorStop(0.65, '#FFFFFF');
    gradient.addColorStop(0.55, '#CCFFFF');
    gradient.addColorStop(0.45, '#00FFFF');
    gradient.addColorStop(0.35, '#CCCCFF');
    canvas.fillStyle = gradient;
    canvas.fillRect(0, 0, 700, 610);
    canvas.fill();
    //георгиевская лента
    //1
    for (var i = 0; i <= 7; i++) {
        canvas.lineWidth = 30;
        canvas.strokeStyle = "orange";
        canvas.stroke();
        canvas.moveTo(0, 500);
        canvas.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
                        endPointX, endPointY);
        canvas.stroke();
        controlX_1 = controlX_1 + 20;
        controlY_1 = controlY_1 + 20;
        controlX_2 = controlX_2 + 20
        controlY_2 = controlY_2 + 20;
        endPointX = endPointX + 20
        endPointY = endPointY + 20;
    }
    
    canvas.stroke();
    canvas.lineWidth = 9;
    canvas.strokeStyle = "black";
    canvas.stroke();
    ctx.beginPath();
    controlX_1 = controlX_1 + 10;
    controlY_1 = controlY_1 + 10;
    controlX_2 = controlX_2 + 10
    controlY_2 = controlY_2 + 10;
    endPointX = endPointX + 10
    endPointY = endPointY + 10;

    // Рисуем кривую
    canvas.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
                        endPointX, endPointY);
    canvas.stroke();
    controlX_1 = controlX_1 + 10;
    controlY_1 = controlY_1 + 10;
    controlX_2 = controlX_2 + 10
    controlY_2 = controlY_2 + 10;
    endPointX = endPointX + 10
    endPointY = endPointY + 10;
    canvas.lineWidth = 10;
    canvas.strokeStyle = "orange";
    canvas.stroke();
    canvas.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
                        endPointX, endPointY);
    // Толщина и цвет кривой
   /* for (var  i = 2; i <= 20;i++)
    {
    if (i%2==0) {
        canvas.lineWidth = 10;
        canvas.strokeStyle = "orange";
        canvas.stroke();
    } else 
        {
            canvas.lineWidth = 9;
            canvas.strokeStyle = "black";
            canvas.stroke();
    }
        // Устанавливаем начало кривой
    canvas.moveTo(0, 500);

        // Контрольные и конечная точки
    controlX_1 = controlX_1+10;
    controlY_1 = controlY_1+10;
    controlX_2 = controlX_2+10
    controlY_2 = controlY_2+10;
    endPointX = endPointX+ 10
    endPointY = endPointY+10;

        // Рисуем кривую
    canvas.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
                        endPointX, endPointY);
    canvas.stroke();
    
    }*/
    canvas.stroke();
    //звезда

    //надпись

}

addEventListener("load", initiate);