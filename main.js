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

function clearCanvas()
{
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    figure();
}

function polyLine(points)
{
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    for (let i = 0; i < points.length; i++)
    {
        context.moveTo(points[i][0], points[i][1]);
        console.log('moved to ' + points[i][0] + ', ' + points[i][1]);
        context.lineTo(points[(i + 1) % points.length][0], points[(i + 1) % points.length][1]);
        console.log('lined to ' + points[(i + 1) % points.length][0] + ', ' + points[(i + 1) % points.length][1]);
        context.stroke();    
    }
}

function figure()
{
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    context.fillStyle = '#008080';

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();

    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();

    var figure_bot = [[0 + canvas.width / 2, 0 + canvas.width / 2], [-100 + canvas.width / 2, -100 + canvas.width / 2], [100 + canvas.width / 2, -100 + canvas.width / 2]];
    polyLine(figure_bot);

    var figure_mid = [[-100 + canvas.width / 2, -100 + canvas.width / 2], [100 + canvas.width / 2, -100 + canvas.width / 2], [100 + canvas.width / 2, 320], [-100 + canvas.width / 2, 320]];
    polyLine(figure_mid);

    var figure_top = [[-80 + canvas.width / 2, 320], [-100 + canvas.width / 2, 290], [-60 + canvas.width / 2, 290], [canvas.width / 2, 270], [60 + canvas.width / 2, 290], [100 + canvas.width / 2, 290], [80 + canvas.width / 2, 320]];
    polyLine(figure_top);

}