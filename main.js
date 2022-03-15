var rocket = document.getElementById('rocket'); 
var rocketY = window.innerWidth / 4;
var rocketSizeW = rocket.width / 2;
var rocketSizeH = rocket.height / 2;

function drawContent()
{
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    context.fillStyle = '#008080';

    context.arc(canvas.width / 2, canvas.height, canvas.height / 2, 0, Math.PI, true);
    context.fill();

    context.drawImage(rocket, canvas.width / 2 - rocketSizeW / 2 , rocketY - rocketSizeH / 2, rocketSizeW, rocketSizeH);
}

drawContent();

function rocketLaunch()
{
    var id = setInterval(function() {
        rocketY--;
        rocketSizeH -= 0.4;
        rocketSizeW -= 0.4;

        drawContent();

        if (rocketSizeH < 100 || rocketSizeW < 100)
            clearInterval(id);
    })
}

function refresh()
{
    document.location.reload();
}