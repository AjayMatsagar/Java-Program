var canvas=document.getElementById("diagonal");
        var context=canvas.getContext("2d");
        console.log(canvas);
        context.beginPath();
        context.moveTo(100,100);
        context.lineTo(200,100);
        context.lineTo(200,200);
        context.stroke();