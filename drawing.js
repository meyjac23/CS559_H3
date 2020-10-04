function setup() {
    "use strict";
    /* global glMatrix */
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext('2d');
    var mat3 = glMatrix.mat3;

    function draw() {
        canvas.width = canvas.width;

        function setCanvasTransform(Tx) {
            context.setTransform(Tx[0], Tx[1], Tx[3], Tx[4], Tx[6], Tx[7]);
        }

        function drawBackground() {
            context.beginPath();
            context.fillStyle = "#2cbdf2";
            context.rect(0, 0, canvas.width, canvas.height);
            context.closePath();
            context.fill();
            context.beginPath();
            context.fillStyle = "#997950";
            context.rect(0, 450, canvas.width, 250);
            context.closePath();
            context.fill();
        }

        function drawStalk(broken) {
            if (broken === true) {
                context.beginPath();
                context.fillStyle = "#a0a653";
                context.lineWidth = 1;
                context.moveTo(0, 0);
                context.lineTo(0, -30);
                context.lineTo(10, -28);
                context.lineTo(10, 0);
                context.closePath();
                context.fill();
                context.stroke();
            } else {
                context.beginPath();
                context.fillStyle = "#a0a653";
                context.lineWidth = 1;
                context.moveTo(0, 0);
                context.lineTo(0, -210);
                context.lineTo(10, -210);
                context.lineTo(10, 0);
                context.closePath();
                context.fill();
                context.stroke();

                var cobs = mat3.create();
                mat3.fromTranslation(cobs, [10, -70]);
                var Tx_curr = context.getTransform();
                var cobs_to_canvas = mat3.create();
                mat3.multiply(cobs_to_canvas, cobs, Tx_curr);
                setCanvasTransform(cobs_to_canvas);
                drawCob();
            }
        }

        function drawCob() {
            context.beginPath();
            context.fillStyle = "#e2e62c";
            context.lineWidth = 1;
            context.ellipse(0, 0, 25, 10,
                Math.PI/2, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
            // Leaves
            context.beginPath();
            context.fillStyle = "#3a7037";
            context.moveTo(-10, 30);
            context.lineTo(15, 0);
            context.lineTo(10, 30);
            context.closePath();
            context.fill();
            context.stroke();
            context.moveTo(10, 30);
            context.lineTo(-10, 30);
            context.lineTo(-15, 0);
            context.closePath();
            context.fill();
            context.stroke();
        }

        function corn(Tx_curr, broken) {
            drawStalk(broken);
            // Bring canvas back to wherever it
            // started before drawing the corn
            setCanvasTransform(Tx_curr);
        }

        drawBackground();

        var firstCorn = mat3.create();
        mat3.fromTranslation(firstCorn, [600, 600]);
        setCanvasTransform(firstCorn);
        corn(firstCorn, false);
    }

    draw();
} window.onload = setup;