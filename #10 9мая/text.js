var a = 0;
function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    
    //canvas.textBaseline = 'bottom';
    canvas.fillStyle = "Red";
    
    canvas.fill();
    canvas.font = 'bold 150px segoe UI';
    if (a >= 0 && a < 5) {
        canvas.fillStyle = "#cc0000";
        canvas.font = 'bold 480px segoe UI';
        canvas.fillText('9', 300, 360);
        canvas.font = 'bold 150px segoe UI';
        canvas.fillText('МАЯ', 10, 600);
        a++;
    }
    else if (a >= 5 && a < 10) {
        canvas.fillStyle = "red";
        canvas.font = 'bold 480px segoe UI';
        canvas.fillText('9', 300, 360);
        canvas.font = 'bold 150px segoe UI';
        canvas.fillText('МАЯ', 10, 600);
        a++;
    }
    else if (a >= 10 && a <= 15) {
        canvas.fillStyle = "#ff3300";
        canvas.font = 'bold 480px segoe UI';
        canvas.fillText('9', 300, 360);
        canvas.font = 'bold 150px segoe UI';
        canvas.fillText('МАЯ', 10, 600);
        a++;
    }
    else {
        canvas.fillStyle = "#ff5050";
        canvas.font = 'bold 480px segoe UI';
        canvas.fillText('9', 300, 360);
        canvas.font = 'bold 150px segoe UI';
        canvas.fillText('МАЯ', 10, 600);

        a++;
    }
   
    setTimeout("initiate()", 20);
    if (a == 20) {
        a = 0;
    }
    //measureText
}

addEventListener("load", initiate);