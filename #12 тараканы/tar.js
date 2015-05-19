function getRandomArbitary(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}
var q = 0;
var w = 0;
var e = 0;
var r = 0;
var ct = 0;
var ct1 = 0;
var ct2 = 0;
var ct3 = 0;
var ct4 = 0;
var q1 = 1;
var q2 = 1;
var q3 = 1;
var q4 = 1;

function play() {

    var i = getRandomArbitary(-3, 6) * 5;
    if (q > 750) {
        i = 0;
        q = 950;
    }
    var j = getRandomArbitary(-3, 6) * 5;
    if (w > 750) {
        j = 0;
        w = 950;
    }
    var p = getRandomArbitary(-3, 6) * 5;
    if (e > 750) {
        p = 0;
        e = 950;
    }
    var k = getRandomArbitary(-3, 6) * 5;
    if (r > 750) {
        k = 0;
        r = 950
    }



    var start = performance.now();
    var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5.5;

    ctx.beginPath();
    ctx.lineCap = 'butt';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(750, 100);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(750, 200);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(750, 300);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(750, 400);
    ctx.strokeStyle = "black";
    ctx.stroke();


    var img = document.getElementById('bug');
    ctx.drawImage(img, q, 20);
    q = q + i;
    var img1 = document.getElementById('bug');
    ctx.drawImage(img, w, 120);
    w = w + j
    var img2 = document.getElementById('bug');
    ctx.drawImage(img, e, 220);
    e = e + p;
    var img3 = document.getElementById('bug');
    ctx.drawImage(img, r, 320);
    r = r + k;




    if ((q > 750) && (q1 != 0)) {
        ct++;
        q1 = 0;
        ct1 = ct;
    }


    if ((w > 750) && (q2 != 0)) {
        ct++;
        ct2 = ct;
        q2 = 0;
    }


    if ((e > 750) && (q3 != 0)) {
        ct++;
        ct3 = ct;
        q3 = 0;
    }


    if ((r > 750) && (q4 != 0)) {
        ct++;
        ct4 = ct;
        q4 = 0;
    }




    ctx.fillText(ct1, 100, 30);
    ctx.fillText(ct2, 100, 130);
    ctx.fillText(ct3, 100, 230);
    ctx.fillText(ct4, 100, 330);


    setTimeout("play()", 200);
   // addEventListener("load", play);

}

b1 = 0;
b2 = 0;
b3 = 0;
b4 = 0;

n1 = 0;
n2 = 0;
n3 = 0;
n4 = 0;
addEventListener("load", initiate);
function get1() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b1 = document.forms["task1"].elements["b1"].value - 0;
    if (document.getElementById("Radio1").checked) {
        n1 = 1;
    }
    else if (document.getElementById("Radio12").checked) {
        n1 = 2;
    }
    else if (document.getElementById("Radio13").checked) {
        n1 = 3;
    }
    else if (document.getElementById("Radio14").checked) {
        n1 = 4;
    }
    ctx.fillText('player 1 chek' + ' bug number  ' + n1 + '  and stavka = ' + b1, 30, 20);
}
function get2() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b2 = document.forms["task2"].elements["b2"].value - 0;
    if (document.getElementById("Radio21").checked) {
        n2 = 1;
    }
    else if (document.getElementById("Radio22").checked) {
        n2 = 2;
    }
    else if (document.getElementById("Radio23").checked) {
        n2 = 3;
    }
    else if (document.getElementById("Radio24").checked) {
        n2 = 4;
    }
    ctx.fillText('player 2 chek' + ' bug number  ' + n2 + '  and stavka = ' + b2, 30, 30);
}
function get3() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b3 = document.forms["task3"].elements["b3"].value - 0;
    if (document.getElementById("Radio31").checked) {
        n3 = 1;
    }
    else if (document.getElementById("Radio32").checked) {
        n3 = 2;
    }
    else if (document.getElementById("Radio33").checked) {
        n3 = 3;
    }
    else if (document.getElementById("Radio34").checked) {
        n3 = 4;
    }
    ctx.fillText('player 3 chek' + ' bug number  ' + n3 + '  and stavka = ' + b3, 30, 40);
}
function get4() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    b4 = document.forms["task4"].elements["b4"].value - 0;
    if (document.getElementById("Radio41").checked) {
        n4 = 1;
    }
    else if (document.getElementById("Radio42").checked) {
        n4 = 2;
    }
    else if (document.getElementById("Radio43").checked) {
        n4 = 3;
    }
    else if (document.getElementById("Radio44").checked) {
        n4 = 4;
    }
    ctx.fillText('player 4 chek' + ' bug number  ' + n4 + '  and stavka = ' + b4, 30, 50);
}
banks = 0;
function bank() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    banks = b1 + b2 + b3 + b4;
    ctx.fillText('BANK!!!= ' + banks, 300, 30);
}

function result() {
    var canvas = document.getElementById("map2");
    var ctx = canvas.getContext("2d");
    v1 = banks * 0.5;
    v2 = banks * 0.3;
    v3 = banks * 0.1;
    v4 = 0;
    v5 = banks * 0.2;
    v6 = banks * 0.15;
    v7 = banks * 0.10;
    v8 = banks * 0.5;
    v21 = 0.4;
    v22 = 0.3;
    v23 = 0.2;
    v31 = 0.25;
    v32 = 0.15;
    v33 = 0.1;
    //1 1
    if (n1 == 1 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct1 == 1) 
    { ctx.fillText('1 place : bug 1: player 1 ' + v1 + '$', 10, 10); }
    if (n2 == 1 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 1)
    { ctx.fillText('1 place : bug 1: player 2 ' + v1 + '$', 10, 10); }
    if (n3 == 1 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct1 == 1)
    { ctx.fillText('1 place : bug 1: player 3 ' + v1 + '$', 10, 10); }
    if (n4 == 1 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct1 == 1)
    { ctx.fillText('1 place : bug 1: player 4 ' + v1 + '$', 10, 10); }
//1 2
    if (n1 == 1 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct1 == 2)
    { ctx.fillText('2 place : bug 1: player 1 ' + v2 + '$', 10, 10); }
    if (n2 == 1 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 2)
    { ctx.fillText('2 place : bug 1: player 2 ' + v2 + '$', 10, 10); }
    if (n3 == 1 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct1 == 2)
    { ctx.fillText('2 place : bug 1: player 3 ' + v2 + '$', 10, 10); }
    if (n4 == 1 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct1 == 2)
    { ctx.fillText('2 place : bug 1: player 4 ' + v2 + '$', 10, 10); }
    //1 3
    if (n1 == 1 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct1 == 3)
    { ctx.fillText('3 place : bug 1: player 1 ' + v3 + '$', 10, 10); }
    if (n2 == 1 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 3)
    { ctx.fillText('3 place : bug 1: player 2 ' + v3 + '$', 10, 10); }
    if (n3 == 1 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct1 == 3)
    { ctx.fillText('3 place : bug 1: player 3 ' + v3 + '$', 10, 10); }
    if (n4 == 1 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct1 == 3)
    { ctx.fillText('3 place : bug 1: player 4 ' + v3 + '$', 10, 10); }
    //1 4
    if (n1 == 1 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct1 == 4)
    { ctx.fillText('4 place : bug 1: player 1 ' + v4 + '$', 10, 10); }
    if (n2 == 1 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 4)
    { ctx.fillText('4 place : bug 1: player 2 ' + v4 + '$', 10, 10); }
    if (n3 == 1 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct1 == 4)
    { ctx.fillText('4 place : bug 1: player 3 ' + v4 + '$', 10, 10); }
    if (n4 == 1 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct1 == 4)
    { ctx.fillText('4 place : bug 1: player 4 ' + v4 + '$',10, 10); }
            //2 1
            if (n1 == 2 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct2 == 1)
            { ctx.fillText('1 place : bug 2: player 1 ' + v1 + '$', 20, 30); }
            if (n2 == 2 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 1)
            { ctx.fillText('1 place : bug 2: player 2 ' + v1 + '$', 20, 30); }
            if (n3 == 2 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct2 == 1)
            { ctx.fillText('1 place : bug 2: player 3 ' + v1 + '$', 20, 30); }
            if (n4 == 2 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct2 == 1)
            { ctx.fillText('1 place : bug 2: player 4 ' + v1 + '$', 20, 50); }
            // 2 2
            if (n1 == 2 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct2 == 2)
            { ctx.fillText('2 place : bug 2: player 1 ' + v2 + '$', 20, 30); }
            if (n2 == 2 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 2)
            { ctx.fillText('2 place : bug 2: player 2 ' + v2 + '$', 20, 30); }
            if (n3 == 2 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct2 == 2)
            { ctx.fillText('2 place : bug 2: player 3 ' + v2 + '$',20, 30); }
            if (n4 == 2 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct2 == 2)
            { ctx.fillText('2 place : bug 2: player 4 ' + v2 + '$', 20, 30); }
            // 2 3
            if (n1 == 2 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct2 == 3)
            { ctx.fillText('3 place : bug 2: player 1 ' + v3 + '$', 20, 30); }
            if (n2 == 2 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 3)
            { ctx.fillText('3 place : bug 2: player 2 ' + v3 + '$', 20, 30); }
            if (n3 == 2 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct2 == 3)
            { ctx.fillText('3 place : bug 2: player 3 ' + v3 + '$', 20, 30); }
            if (n4 == 2 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct2 == 3)
            { ctx.fillText('3 place : bug 2: player 4 ' + v3 + '$', 20, 30); }
            // 2 4
            if (n1 == 2&& (n1 != n2) && (n1 != n3) && (n1 != n4) && ct2 == 4)
            { ctx.fillText('4 place : bug 2: player 1 ' + v4 + '$', 20, 30); }
            if (n2 == 2 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 4)
            { ctx.fillText('4 place : bug 2: player 2 ' + v4 + '$', 20, 30); }
            if (n3 == 2 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct2 == 4)
            { ctx.fillText('4 place : bug 2: player 3 ' + v4 + '$', 20, 30); }
            if (n4 == 2 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct2 == 4)
            { ctx.fillText('4 place : bug 2: player 4 ' + v4 + '$', 20, 30); }
                    //3 1
                    if (n1 == 3 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct3 == 1)
                    { ctx.fillText('1 place : bug 3: player 1 ' + v1 + '$', 30, 40); }
                    if (n2 == 3 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 1)
                    { ctx.fillText('1 place : bug 3: player 2 ' + v1 + '$', 30, 40); }
                    if (n3 == 3 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct3 == 1)
                    { ctx.fillText('1 place : bug 3: player 3 ' + v1 + '$', 30, 40); }
                    if (n4 == 3 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct3 == 1)
                    { ctx.fillText('1 place : bug 3: player 4 ' + v1 + '$', 30, 40); }
                    //3 2
                    if (n1 == 3 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct3 == 2)
                    { ctx.fillText('2 place : bug 3: player 1 ' + v2 + '$', 30, 40); }
                    if (n2 == 3 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 2)
                    { ctx.fillText('2 place : bug 3: player 2 ' + v2 + '$', 30, 40); }
                    if (n3 == 3 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct3 == 2)
                    { ctx.fillText('2 place : bug 3: player 3 ' + v2 + '$', 30, 40); }
                    if (n4 == 3 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct3 == 2)
                    { ctx.fillText('2 place : bug 3: player 4 ' + v2 + '$', 30, 40); }
                    //3 3
                    if (n1 == 3 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct3 == 3)
                    { ctx.fillText('3 place : bug 3: player 1 ' + v3 + '$', 30, 40); }
                    if (n2 == 3 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 3)
                    { ctx.fillText('3 place : bug 3: player 2 ' + v3+ '$', 500, 40); }
                    if (n3 == 3 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct3 == 3)
                    { ctx.fillText('3 place : bug 3: player 3 ' + v3 + '$', 30, 40); }
                    if (n4 == 3 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct3 == 3)
                    { ctx.fillText('3 place : bug 3: player 4 ' + v3 + '$', 30, 40); }
                    //3 4
                    if (n1 == 3 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct3 == 4)
                    { ctx.fillText('4 place : bug 3: player 1 ' + v4 + '$', 30, 40); }
                    if (n2 == 3 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 4)
                    { ctx.fillText('4 place : bug 3: player 2 ' + v4 + '$', 30, 40); }
                    if (n3 == 3 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct3 == 4)
                    { ctx.fillText('4 place : bug 3: player 3 ' + v4 + '$', 30, 40); }
                    if (n4 == 3 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct3 == 4)
                    { ctx.fillText('4 place : bug 3: player 4 ' + v4 + '$', 30, 40); }
                            //4 1
                            if (n1 == 4 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct4 == 1)
                            { ctx.fillText('1 place : bug 4: player 1 ' + v1 + '$', 40, 50); }
                            if (n2 == 4 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 1)
                            { ctx.fillText('1 place : bug 4: player 2 ' + v1 + '$', 40, 50); }
                            if (n3 == 4 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct4 == 1)
                            { ctx.fillText('1 place : bug 4: player 3 ' + v1 + '$', 40, 50); }
                            if (n4 == 4 && (n4 != n2) && (n4 != n3) && (n1 = !n4) && ct4 == 1)
                            { ctx.fillText('1 place : bug 4: player 4 ' + v1 + '$', 40, 50); }
                            // 4 2
                            if (n1 == 4 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct4 == 2)
                            { ctx.fillText('2 place : bug 4: player 1 ' + v2 + '$', 50, 50); }
                            if (n2 == 4 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 2)
                            { ctx.fillText('2 place : bug 4: player 2 ' + v2 + '$', 50, 50); }
                            if (n3 == 4 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct4 == 2)
                            { ctx.fillText('2 place : bug 4: player 3 ' + v2 + '$', 50, 50); }
                            if (n4 == 4 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct4 == 2)
                            { ctx.fillText('2 place : bug 4: player 4 ' + v2 + '$', 50, 50); }
                            // 4 3
                            if (n1 == 4 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct4 == 3)
                            { ctx.fillText('3 place : bug 4: player 1 ' + v3 + '$', 50, 50); }
                            if (n2 == 4 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 3)
                            { ctx.fillText('3 place : bug 4: player 2 ' + v3 + '$', 50, 50); }
                            if (n3 == 4 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct4 == 3)
                            { ctx.fillText('3 place : bug 4: player 3 ' + v3 + '$', 50, 50); }
                            if (n4 == 4 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct4 == 3)
                            { ctx.fillText('3 place : bug 4: player 4 ' + v3 + '$', 50, 50); }
                            // 4 4
                            if (n1 == 4 && (n1 != n2) && (n1 != n3) && (n1 != n4) && ct4 == 4)
                            { ctx.fillText('4 place : bug 4: player 1 ' + v4 + '$', 50, 50); }
                            if (n2 == 4 && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 4)
                            { ctx.fillText('4 place : bug 4: player 2 ' + v4 + '$', 50, 50); }
                            if (n3 == 4 && (n3 != n2) && (n1 != n3) && (n3 != n4) && ct4 == 4)
                            { ctx.fillText('4 place : bug 4: player 3 ' + v4 + '$', 50, 50); }
                            if (n4 == 4 && (n4 != n2) && (n4 != n3) && (n1 != n4) && ct4 == 4)
                            { ctx.fillText('4 place : bug 4: player 4 ' + v4 + '$', 50, 50); }


    //все 4 выбрали одного 1место

    if ((n1 == n2 && n2 == n3 && n3 == n4 && n4 == 1 && ct1 == 1) || (1 == n2 && n2 == n3 && n3 == n4 && n4 == 2 && ct2 == 1) ||
    (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 3 && ct3 == 1) || (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 4 && ct4 == 1)) {
        ctx.fillText('1 place : bug ' + n1 + ' : player 1 ' + v5 + '$', 100, 10);
        ctx.fillText('1 place : bug ' + n1 + ' : player 2 '  +v5 + '$', 100, 20);
        ctx.fillText('1 place : bug ' + n1 + ' : player 3 '  +v5 + '$', 100, 30);
        ctx.fillText('1 place : bug ' + n1 + ' : player 4 '  +v5 + '$', 100, 40);
    }
    else if ((n1 == n2 && n2 == n3 && n3 == n4 && n4 == 1 && ct1 == 2) || (1 == n2 && n2 == n3 && n3 == n4 && n4 == 2 && ct2 == 2) ||
    (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 3 && ct3 == 2) || (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 4 && ct4 == 2)) {
        ctx.fillText('2 place : bug ' + n1 + ' : player 1 ' + v6 + '$', 100, 10);
        ctx.fillText('2 place : bug ' + n1 + ' : player 2 ' + v6 + '$', 100, 20);
        ctx.fillText('2 place : bug ' + n1 + ' : player 3 ' + v6 + '$', 100, 30);
        ctx.fillText('2 place : bug ' + n1 + ' : player 4 ' + v6 + '$', 100, 40);
    }
    else if ((n1 == n2 && n2 == n3 && n3 == n4 && n4 == 1 && ct1 == 3) || (1 == n2 && n2 == n3 && n3 == n4 && n4 == 2 && ct2 == 3 )||
    (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 3 && ct3 == 3) || (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 4 && ct4 == 3)) {
        ctx.fillText('3 place : bug ' + n1 + ' : player 1 ' + v7 + '$', 100, 10);
        ctx.fillText('3 place : bug ' + n1 + ' : player 2 ' + v7 + '$', 100, 20);
        ctx.fillText('3 place : bug ' + n1 + ' : player 3 ' + v7 + '$', 100, 30);
        ctx.fillText('2 place : bug ' + n1 + ' : player 4 ' + v7 + '$', 100, 40);
    }
    else if ((n1 == n2 && n2 == n3 && n3 == n4 && n4 == 1 && ct1 == 4) || (1 == n2 && n2 == n3 && n3 == n4 && n4 == 2 && ct2 == 4) ||
    (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 3 && ct3 == 4) || (n1 == n2 && n2 == n3 && n3 == n4 && n4 == 4 && ct4 == 4)) {
        ctx.fillText('4 place : bug ' + n1 + ' : player 1 ' + v4 + '$', 100, 10);
        ctx.fillText('4 place : bug ' + n1 + ' : player 2 ' + v4 + '$', 100, 20);
        ctx.fillText('4 place : bug ' + n1 + ' : player 3 ' + v4 + '$', 100, 30);
        ctx.fillText('4 place : bug ' + n1 + ' : player 4 ' + v4 + '$', 100, 40);
    }


    //2 выбрали одного и того же
//1 место 1таракан
    if ((n1 == n2 && n2 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 1) ||
    (n1 == n3 && n3 == 1 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct1 == 1) ||
    (n1 == n4 && n4 == 1 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 1) ||
    (n2 == n4 && n4 == 1 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct1 == 1) ||
    (n2 == n3 && n3 == 1 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct1 == 1) ||
    (n3 == n4 && n4 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 1)) {

        ctx.fillText('1 place : bug 1 : player vin  - ' + v1 * v21 + '$', 10, 60);
        ctx.fillText('1 place : bug 1 : player vin  - ' + v1 * v21 + '$', 10, 70);
    }

//2 место 1 таракан
    if ((n1 == n2 && n2 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 2) ||
        (n1 == n3 && n3 == 1 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct1 == 2) ||
        (n1 == n4 && n4 == 1 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 2) ||
        (n2 == n4 && n4 == 1 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct1 == 2) ||
        (n2 == n3 && n3 == 1 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct1 == 2) ||
        (n3 == n4 && n4 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 2)) {

        ctx.fillText('2 place : bug 1 : player vin  - ' + v1 * v22 + '$', 40, 60);
        ctx.fillText('2 place : bug 1 : player vin  - ' + v1 * v22 + '$', 40, 70);
    }

    //3 место 1 таракан
    if ((n1 == n2 && n2 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 3) ||
        (n1 == n3 && n3 == 1 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct1 == 3) ||
        (n1 == n4 && n4 == 1 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct1 == 3) ||
        (n2 == n4 && n4 == 1 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct1 == 3) ||
        (n2 == n3 && n3 == 1 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct1 == 3) ||
        (n3 == n4 && n4 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 3)) {

        ctx.fillText('3 place : bug 1 : player vin  - ' + v1 * v23 + '$', 70, 60);
        ctx.fillText('3 place : bug 1 : player vin  - ' + v1 * v23 + '$', 70, 70);
    }

    //4место 1 таракан
    if ((n1 == n2 && n2 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 4) ||
        (n1 == n3 && n3 == 1 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct1 == 4) ||
        (n1 == n4 && n4 == 1 && (n1 != n3) && (n1 != n2) && (n4 != n3) && (n2 != n4) && ct1 == 4) ||
        (n2 == n4 && n4 == 1 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct1 == 4) ||
        (n2 == n3 && n3 == 1 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct1 == 4) ||
        (n3 == n4 && n4 == 1 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct1 == 4)) {

        ctx.fillText('4 place : bug 1 : player vin  - ' + v4 + '$', 100, 60);
        ctx.fillText('4 place : bug 1 : player vin  - ' + v4 + '$', 100, 70);
    }
    //1 место 2таракан
    if ((n1 == n2 && n2 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 1) ||
    (n1 == n3 && n3 == 2 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 1) ||
    (n1 == n4 && n4 == 2 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 1) ||
    (n2 == n4 && n4 == 2 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 1) ||
    (n2 == n3 && n3 == 2 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 1) ||
    (n3 == n4 && n4 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 1)) {

        ctx.fillText('1 place : bug 2 : player vin  - ' + v1 * v21 + '$', 10, 80);
        ctx.fillText('1 place : bug 2 : player vin  - ' + v1 * v21 + '$', 10, 90);

    }
    //2 место 2 таракан
    if ((n1 == n2 && n2 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 2) ||
        (n1 == n3 && n3 == 2 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 2) ||
        (n1 == n4 && n4 == 2 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 2) ||
        (n2 == n4 && n4 == 2 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 2) ||
        (n2 == n3 && n3 ==  2&& (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 2) ||
        (n3 == n4 && n4 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 2)) {

        ctx.fillText('2 place : bug 2 : player vin  - ' + v1 * v22 + '$', 40, 80);
        ctx.fillText('2 place : bug 2 : player vin  - ' + v1 * v22 + '$', 40, 90);
    }

    //3 место 2 таракан
    if ((n1 == n2 && n2 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 3) ||
        (n1 == n3 && n3 == 2 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 3) ||
        (n1 == n4 && n4 == 2 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 3) ||
        (n2 == n4 && n4 == 2 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 3) ||
        (n2 == n3 && n3 == 2 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 3) ||
        (n3 == n4 && n4 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 3)) {

        ctx.fillText('3 place : bug 2 : player vin  - ' + v1 * v23 + '$', 70, 80);
        ctx.fillText('3 place : bug 2 : player vin  - ' + v1 * v23 + '$', 70, 90);
    }

    //4место 2 таракан
    if ((n1 == n2 && n2 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 4) ||
        (n1 == n3 && n3 == 2 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 4) ||
        (n1 == n4 && n4 == 2 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 4) ||
        (n2 == n4 && n4 == 2 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 4) ||
        (n2 == n3 && n3 == 2 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 4) ||
        (n3 == n4 && n4 == 2 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 4)) {

        ctx.fillText('4 place : bug 2 : player vin  - ' + v4 + '$', 100, 80);
        ctx.fillText('4 place : bug 2 : player vin  - ' + v4 + '$', 100, 90);
    }
        //1 место 3 таракан
    if ((n1 == n2 && n2 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct3 == 1) ||
    (n1 == n3 && n3 == 3 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct3 == 1) ||
    (n1 == n4 && n4 == 3 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 1) ||
    (n2 == n4 && n4 == 3 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct3 == 1) ||
    (n2 == n3 && n3 == 3 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct3 == 1) ||
    (n3 == n4 && n4 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct3 == 1)) {

        ctx.fillText('1 place : bug 3 : player vin  - ' + v1 * v21 + '$', 10, 100);
        ctx.fillText('1 place : bug 3 : player vin  - ' + v1 * v21 + '$', 10, 110);
    }

    //2 место 3 таракан
            if ((n1 == n2 && n2 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct3 == 2) ||
            (n1 == n3 && n3 == 3 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct3 == 2) ||
            (n1 == n4 && n4 == 3 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct3 == 2) ||
            (n2 == n4 && n4 == 3 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n2 != n4) && ct3 == 2) ||
            (n2 == n3 && n3 == 3 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct3 == 2) ||
            (n3 == n4 && n4 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct3 == 2)) {

                ctx.fillText('2 place : bug 3 : player vin  - ' + v1 * v22 + '$', 40,100);
                ctx.fillText('2 place : bug 3 : player vin  - ' + v1 * v22 + '$', 40, 110);
            }

            //3 место 3 таракан
            if ((n1 == n2 && n2 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 3) ||
            (n1 == n3 && n3 == 3 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 3) ||
            (n1 == n4 && n4 == 3 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 3) ||
            (n2 == n4 && n4 == 3 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 3) ||
            (n2 == n3 && n3 == 3 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 3) ||
            (n3 == n4 && n4 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 3)) {

                ctx.fillText('3 place : bug 3 : player vin  - ' + v1 * v23 + '$', 70, 100);
                ctx.fillText('3 place : bug 3 : player vin  - ' + v1 * v23 + '$', 70, 110);
            }

            //4место 3 таракан
            if ((n1 == n2 && n2 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 4) ||
            (n1 == n3 && n3 == 3 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct2 == 4) ||
            (n1 == n4 && n4 == 3 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct2 == 4) ||
            (n2 == n4 && n4 == 3 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct2 == 4) ||
            (n2 == n3 && n3 == 3 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct2 == 4) ||
            (n3 == n4 && n4 == 3 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct2 == 4)) {

                ctx.fillText('4 place : bug 3 : player vin  - ' + v4 + '$', 100, 100);
                ctx.fillText('4 place : bug 3 : player vin  - ' + v4 + '$', 100, 110);
            }
            //1 место43 таракан
            if ((n1 == n2 && n2 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct3 == 1) ||
            (n1 == n3 && n3 == 4 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct4 == 1) ||
            (n1 == n4 && n4 == 4 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 1) ||
            (n2 == n4 && n4 == 4 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct4 == 1) ||
            (n2 == n3 && n3 == 4 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct4 == 1) ||
            (n3 == n4 && n4 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 1)) {

                ctx.fillText('1 place : bug 4 : player vin  - ' + v1 * v21 + '$', 10, 120);
                ctx.fillText('1 place : bug 4 : player vin  - ' + v1 * v21 + '$', 10, 130);

}
                //2 место 4 таракан
                if ((n1 == n2 && n2 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 2) ||
                (n1 == n3 && n3 == 4 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct4 == 2) ||
                (n1 == n4 && n4 == 4 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 2) ||
                (n2 == n4 && n4 == 4 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct4 == 2) ||
                (n2 == n3 && n3 == 4 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct4 == 2) ||
                (n3 == n4 && n4 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 2)) {

                    ctx.fillText('2 place : bug 4 : player vin  - ' + v1 * v22 + '$', 40, 120);
                    ctx.fillText('2 place : bug 4 : player vin  - ' + v1 * v22 + '$', 40, 130);
                }

                //3 место 4 таракан
                if ((n1 == n2 && n2 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 3) ||
                (n1 == n3 && n3 == 4 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct4 == 3) ||
                (n1 == n4 && n4 == 4 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 3) ||
                (n2 == n4 && n4 == 4 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct4 == 3) ||
                (n2 == n3 && n3 == 4 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct4 == 3) ||
                (n3 == n4 && n4 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 3)) {

                    ctx.fillText('3 place : bug 4 : player vin  - ' + v1 * v23 + '$', 70, 120);
                    ctx.fillText('3 place : bug 4 : player vin  - ' + v1 * v23 + '$', 70, 130);
                }

                //4место 4 таракан
                if ((n1 == n2 && n2 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 4) ||
                (n1 == n3 && n3 == 4 && (n1 != n2) && (n1 != n4) && (n2 != n3) && (n3 != n4) && ct4 == 4) ||
                (n1 == n4 && n4 == 4 && (n1 != n3) && (n1 != n2) && (n2 != n3) && (n2 != n4) && ct4 == 4) ||
                (n2 == n4 && n4 == 4 && (n1 != n2) && (n2 != n3) && (n4 != n3) && (n1 != n4) && ct4 == 4) ||
                (n2 == n3 && n3 == 4 && (n4 != n3) && (n2 != n4) && (n2 != n1) && (n1 != n3) && ct4 == 4) ||
                (n3 == n4 && n4 == 4 && (n1 != n3) && (n1 != n4) && (n2 != n3) && (n2 != n4) && ct4 == 4)) {

                    ctx.fillText('4 place : bug 4 : player vin  - ' + v4 + '$', 100, 120);
                    ctx.fillText('4 place : bug 4 : player vin  - ' + v4 + '$', 100, 130);
                }
                //3выбрали однгого и того же
                //1
                //1и2и3
                if ((n1 == n2 == n3 && n2 == 1 && ct1 == 1)) {
                    ctx.fillText('1 place : bug 1: player 1  - ' + v1 * v31 + '$', 100, 90);
                    ctx.fillText('1 place : bug 1: player 2  - ' + v1 * v31 + '$', 100, 100);
                    ctx.fillText('1 place : bug 1: player 3  - ' + v1 * v31 + '$', 100, 1100);
                }
                if ((n1 == n2 == n3 && n2 == 1 && ct1 == 2)) {
                    ctx.fillText('2 place : bug 1: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 1: player 2  - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 1: player 3  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n1 == n2 == n3 && n2 == 1 && ct1 == 3)) {
                    ctx.fillText('3 place : bug 1: player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 1: player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 1: player 3  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n1 == n2 == n3 && n2 == 1 && ct1 == 4)) {
                    ctx.fillText('4 place : bug 1: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 1: player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 1: player 3  - ' + v4 + '$', 100, 110);
                }
                //1и3и4
                if ((n1 == n3 == n4 && n3 == 1 && ct1 == 1)) {
                    ctx.fillText('1 place : bug 1: player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 1: player 3  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug 1: player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n1 == n3 == n4 && n3 == 1 && ct1 == 2)) {
                    ctx.fillText('2 place : bug 1: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 1: player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 1: player 4  - ' + v1 * v32 + '$', 100, 110);
                }
    if ((n1 == n3 == n4 && n3 == 1 && ct1 == 3)) {
        ctx.fillText('3 place : bug 1: player 1  - ' + v1 * v33 + '$', 100, 90);
        ctx.fillText('3 place : bug 1: player 3  - ' + v1 * v33 + '$', 100, 100);
        ctx.fillText('3 place : bug 1: player 4  - ' + v1 * v33 + '$', 100, 110);
    }
    if ((n1 == n3 == n4 && n3 == 1 && ct1 == 4)) {
                    ctx.fillText('4 place : bug 1: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 1: player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 1: player 4  - ' + v4 + '$', 100, 110);
                }
                //2и3и4
                if ((n2 == n4 == n3 && n4 == 1 && ct1 == 1)) {
                    ctx.fillText('1 place : bug 1: player 2  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 1: player 3  - ' + v1 * v13 + '$',100, 100);
                    ctx.fillText('1 place : bug 1: player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 1 && ct1 == 2)) {
                    ctx.fillText('2 place : bug 1: player 2  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 1: player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 1: player 4  - ' + v1 * v32 + '$',100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 1 && ct1 == 3)) {
                    ctx.fillText('3 place : bug 1: player 2  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 1: player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 1: player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 1 && ct1 == 4)) {
                    ctx.fillText('4 place : bug 1: player 2  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 1: player 3  - ' + v4 + '$', 100,100);
                    ctx.fillText('4 place : bug 1: player 4  - ' + v4 + '$', 100, 110);
                }

                //1и2и4
                if ((n2 == n4 && n4 == n1 && n2 == 1 && ct1 == 1)) {
                    ctx.fillText('1 place : bug 1: player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 1: player 2  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug 1: player 4  - ' + v1 * v13 + '$', 100, 1100);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 1 && ct1 == 2)) {
                    ctx.fillText('2 place : bug 1: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 1: player 2 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 1: player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 1 && ct1 == 3)) {
                    ctx.fillText('3 place : bug 1: player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 1: player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 1: player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 1 && ct1 == 4)) {
                    ctx.fillText('4 place : bug 1: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 1: player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 1: player 4  - ' + v4 + '$', 100, 110);
                }
   
    //2
    //1и2и3
                if ((n1 == n2 == n3 && n2 == 2 && ct2 == 1)) {
                    ctx.fillText('1 place : bug 2: player 1  - ' + v1 * v31 + '$', 100, 90);
                    ctx.fillText('1 place : bug 2: player 2  - ' + v1 * v31 + '$', 100, 100);
                    ctx.fillText('1 place : bug 2: player 3  - ' + v1 * v31 + '$', 100, 110);
                }
                if ((n1 == n2 == n3 && n2 == 2 && ct2 == 2)) {
                    ctx.fillText('2 place : bug 2: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 2 player 2  - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 2: player 3  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n1 == n2 == n3 && n2 == 2 && ct2 == 3)) {
                    ctx.fillText('3 place : bug 2: player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 2: player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 2: player 3  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n1 == n2 == n3 && n2 == 2 && ct2 == 4)) {
                    ctx.fillText('4 place : bug 2: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 2: player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 2: player 3  - ' + v4 + '$', 100, 110);
                }
    //1и3и4
                if ((n1 == n3 == n4 && n3 == 2 && ct2 == 1)) {
                    ctx.fillText('1 place : bug 2: player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 2: player 3  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug 2: player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n1 == n3 == n4 && n3 == 2 && ct2 == 2)) {
                    ctx.fillText('2 place : bug 2: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 1: player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 1: player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n1 == n3 == n4 && n3 == 2 && ct2 == 3)) {
                    ctx.fillText('3 place : bug 2: player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 2: player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 2: player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n1 == n3 == n4 && n3 == 2 && ct2 == 4)) {
                    ctx.fillText('4 place : bug 2: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 2: player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 2: player 4  - ' + v4 + '$', 100, 110);
                }
    //2и3и4
                if ((n2 == n4 == n3 && n4 == 2 && ct2 == 1)) {
                    ctx.fillText('1 place : bug 2: player 2  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 2 player 3  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug 2: player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 2 && ct2 == 2)) {
                    ctx.fillText('2 place : bug 2: player 2  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 2 player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 2: player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 2 && ct2 == 3)) {
                    ctx.fillText('3 place : bug 2: player 2  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 2: player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 2: player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 2 && ct2 == 4)) {
                    ctx.fillText('4 place : bug 2: player 2  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 2: player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 2: player 4  - ' + v4 + '$', 100, 110);
                }

    //1и2и4
                if ((n2 == n4 && n4 == n1 && n2 == 2 && ct2 == 1)) {
                    ctx.fillText('1 place : bug 2 player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug 2: player 2  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug 2: player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 2 && ct2 == 2)) {
                    ctx.fillText('2 place : bug 2: player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug 2: player 2 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug 2: player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 2 && ct2 == 3)) {
                    ctx.fillText('3 place : bug 2: player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug 2: player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug 2: player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 2 && ct2 == 4)) {
                    ctx.fillText('4 place : bug 2: player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug 2: player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug 2: player 4  - ' + v4 + '$', 100, 110);
                }

    //3 
    //1и2и3
                 if ((n1 == n2 == n3 && n2 == 3 && ct3 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 1  - ' + v1 * v31 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v31 + '$', 100, 100);
                    ctx.fillText('1 place : bug :'+n2+' player 3  - ' + v1 * v31 + '$', 100, 110);
                }
                 if ((n1 == n2 == n3 && n2 == 3 && ct3 == 2)) {
                    ctx.fillText('2 place : bug :'+n2+' player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 2  - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 3  - ' + v1 * v32 + '$', 100, 110);
                }
                 if ((n1 == n2 == n3 && n2 == 3 && ct3 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 3  - ' + v1 * v33 + '$', 100, 110);
                }
                 if ((n1 == n2 == n3 && n2 == 3 && ct3 == 4)) {
                    ctx.fillText('4 place : bug :' + n2 + ' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :' + n2 + ' player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 3  - ' + v4 + '$', 100, 110);
                }
    //1и3и4
                 if ((n1 == n3 == n4 && n3 == 3 && ct3 == 1)) {
                    ctx.fillText('1 place : bug :'+n3+' player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n3+' player 3  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug :'+n3+' player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                 if ((n1 == n3 == n4 && n3 == 3 && ct3 == 2)) {
                    ctx.fillText('2 place : bug :'+n3+' player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n3+' player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n3+' player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                 if ((n1 == n3 == n4 && n3 == 3 && ct3 == 3)) {
                    ctx.fillText('3 place : bug :'+n3+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n3+' player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n3+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                 if ((n1 == n3 == n4 && n3 == 3 && ct3 == 4)) {
                    ctx.fillText('4 place : bug :'+n3+' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n3+' player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n3+' player 4  - ' + v4 + '$', 100, 110);
                }
    //2и3и4
                 if ((n2 == n4 == n3 && n4 == 3 && ct3 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 3  - ' + v1 * v13 + '$',100, 100);
                    ctx.fillText('1 place : bug :'+n2+' player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                 if ((n2 == n4 == n3 && n4 == 3 && ct3 == 2)) {
                       ctx.fillText('2 place : bug :'+n2+' player 2  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 4  - ' + v1 * v32 + '$',100, 110);
                }
                 if ((n2 == n4 == n3 && n4 == 3 && ct3 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
                if ((n2 == n4 == n3 && n4 == 3 && ct3 == 4)) {
                    ctx.fillText('4 place : bug :' + n2 + ' player 2  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n2+' player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 4  - ' + v4 + '$', 100, 110);
                }

    //1и2и4
                 if ((n2 == n4 && n4 == n1 && n2 == 3 && ct3 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug :'+n2+' player 4  - ' + v1 * v13 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 3 && ct3 == 2)) {
                    ctx.fillText('2 place : bug :'+n2+'player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 2 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 4  - ' + v1 * v32 + '$', 100, 110);
                }
                if ((n2 == n4 && n4 == n1 && n2 == 3 && ct3 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
               if ((n2 == n4 && n4 == n1&&n2 == 3 && ct3 == 4)) {
                    ctx.fillText('4 place : bug :'+n2+' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n2+' player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 4  - ' + v4 + '$', 100, 110);
                }
    //4
    //1и2и3
               if ((n1 == n2 == n3 && n2 == 4 && ct4 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 1  - ' + v1 * v31 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v31 + '$', 100, 100);
                    ctx.fillText('1 place : bug :'+n2+' player 3  - ' + v1 * v31 + '$', 100, 110);
                }
              if ((n1 == n2 == n3 && n2 == 4 && ct4 == 2)) {
                    ctx.fillText('2 place : bug :'+n2+' player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 2  - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 3  - ' + v1 * v32 + '$', 100, 110);
                }
              if ((n1 == n2 == n3 && n2 == 4 && ct4 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 3  - ' + v1 * v33 + '$', 100, 110);
                }
              if ((n1 == n2 == n3 && n2 == 4 && ct4 == 4)) {
                    ctx.fillText('4 place : bug :' + n2 + ' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :' + n2 + ' player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 3  - ' + v4 + '$', 100, 110);
                }
    //1и3и4
               if ((n1 == n3 == n4 && n3 == 4 && ct4 == 1)) {
                    ctx.fillText('1 place : bug :'+n3+' player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n3+' player 3  - ' + v1 * v13 + '$', 100, 100);
                    ctx.fillText('1 place : bug :'+n3+' player 4  - ' + v1 * v13 + '$', 100, 110);
                     }
               if ((n1 == n3 == n4 && n3 == 4 && ct4 == 2)) {
                    ctx.fillText('2 place : bug :'+n3+' player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n3+' player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n3+' player 4  - ' + v1 * v32 + '$', 100, 110);
                }
               if ((n1 == n3 == n4 && n3 == 4 && ct4 == 3)) {
                    ctx.fillText('3 place : bug :'+n3+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n3+' player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n3+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
               if ((n1 == n3 == n4 && n3 == 4 && ct4 == 4)) {
                    ctx.fillText('4 place : bug :'+n3+' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n3+' player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n3+' player 4  - ' + v4 + '$', 100, 110);
                }
    //2и3и4
               if ((n2 == n4 == n3 && n4 == 4 && ct4 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 3  - ' + v1 * v13 + '$',100, 100);
                    ctx.fillText('1 place : bug :'+n2+' player 4  - ' + v1 * v13 + '$', 100, 110);
                }
               if ((n2 == n4 == n3 && n4 == 4 && ct4 == 2)) {
                    ctx.fillText('2 place : bug :'+n2+' player 2  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 3 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 4  - ' + v1 * v32 + '$',100, 110);
                }
               if ((n2 == n4 == n3 && n4 == 4 && ct4 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 3  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
               if ((n2 == n4 == n3 && n4 == 4 && ct4 == 4)) {
                    ctx.fillText('4 place : bug 2: player 2  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n2+' player 3  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 4  - ' + v4 + '$', 100, 110);
                }

    //1и2и4
              if ((n2 == n4 && n4 == n1 && n2 == 4 && ct4 == 1)) {
                    ctx.fillText('1 place : bug :'+n2+' player 1  - ' + v1 * v13 + '$', 100, 90);
                    ctx.fillText('1 place : bug :'+n2+' player 2  - ' + v1 * v13 + '$', 100,100);
                    ctx.fillText('1 place : bug :'+n2+' player 4  - ' + v1 * v13 + '$', 100, 110);
                }
              if ((n2 == n4 && n4 == n1 && n2 == 4 && ct4 == 2)) {
                    ctx.fillText('2 place : bug :'+n2+'player 1  - ' + v1 * v32 + '$', 100, 90);
                    ctx.fillText('2 place : bug :'+n2+' player 2 - ' + v1 * v32 + '$', 100, 100);
                    ctx.fillText('2 place : bug :'+n2+' player 4  - ' + v1 * v32 + '$', 100, 110);
                }
            if ((n2 == n4 && n4 == n1&& n2 == 4 && ct4 == 3)) {
                    ctx.fillText('3 place : bug :'+n2+' player 1  - ' + v1 * v33 + '$', 100, 90);
                    ctx.fillText('3 place : bug :'+n2+' player 2  - ' + v1 * v33 + '$', 100, 100);
                    ctx.fillText('3 place : bug :'+n2+' player 4  - ' + v1 * v33 + '$', 100, 110);
                }
              if ((n2 == n4 && n4 == n1 && n2 == 4 && ct4 == 4)) {
                    ctx.fillText('4 place : bug :'+n2+' player 1  - ' + v4, 100, 90);
                    ctx.fillText('4 place : bug :'+n2+' player 2  - ' + v4 + '$', 100, 100);
                    ctx.fillText('4 place : bug :'+n2+' player 4  - ' + v4 + '$', 100, 110);
                }
            

            }

//Функция отправки
            function post() {
                document.mailer.action = "mailto:juliatimoshenkova@gmail.com"
                mailtoandSubject = ('bugs viner ' + ct1 + ct2 + ct3 + ct4 + 'player 1 bug ' + n1 + ' stavka=' + b1 + ' viner=' + v1 +
                    '; player 2 bug ' + n2 + ' stavka=' + b2 + ' viner= ' + v2 + '; player 3 bug ' + n3 + ' stavka= ' + b3 + ' viner= '
                    + v3 + '; player 4 bug ' + n4 + ' stavka= ' + b4 + ' viner=' + v4);
            }
     