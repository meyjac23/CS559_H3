function setup() {
    "use strict";
    /* global glMatrix */
    var canvas = document.getElementById("myCanvas");
    var mat3 = glMatrix.mat3;
    var theta = 0;
    var phi = 0;
    var x = 0;

    function draw() {
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        var stack = [mat3.create()];

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

                var cob1 = mat3.create();
                mat3.fromTranslation(cob1, [30, -170]);
                mat3.rotate(cob1, cob1, theta);
                mat3.multiply(stack[0], stack[0], cob1);
                setCanvasTransform(stack[0]);
                drawCob();
                stack.shift();

                stack.unshift(mat3.clone(stack[0]));
                var cob2 = mat3.create();
                mat3.fromTranslation(cob2, [-20, -150]);
                mat3.rotate(cob2, cob2, theta * -1);
                mat3.multiply(stack[0], stack[0], cob2);
                setCanvasTransform(stack[0]);
                drawCob();
                stack.shift();

                stack.unshift(mat3.clone(stack[0]));
                var cob3 = mat3.create();
                mat3.fromTranslation(cob3, [30, -100]);
                mat3.rotate(cob3, cob3, theta);
                mat3.multiply(stack[0], stack[0], cob3);
                setCanvasTransform(stack[0]);
                drawCob();
                stack.shift();

                stack.unshift(mat3.clone(stack[0]));
                var cob4 = mat3.create();
                mat3.fromTranslation(cob4, [-20, -80]);
                mat3.rotate(cob4, cob4, theta * -1);
                mat3.multiply(stack[0], stack[0], cob4);
                setCanvasTransform(stack[0]);
                drawCob();
            }
        }

        function drawCob() {
            stack.unshift(mat3.clone(stack[0]));
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
            stack.shift();
        }

        function corn(broken) {
            stack.unshift(mat3.clone(stack[0]));
            drawStalk(broken);
            stack.shift();
        }

        function combine_() {
            stack.unshift(mat3.clone[0]);
            // Arm
            context.beginPath();
            context.fillStyle = "#a60c0c";
            context.lineWidth = 1;
            context.moveTo(270, -50);
            context.lineTo(335, 10);
            context.lineTo(410, 10);
            context.lineTo(270, -80);
            context.closePath();
            context.fill();
            context.stroke();

            // Body
            context.beginPath();
            context.fillStyle = "#ed0000";
            context.moveTo(0, 0);
            context.lineTo(0, -40);
            context.lineTo(-40, -40);
            context.lineTo(0, -180);
            context.lineTo(280, -200);
            context.lineTo(320, -60);
            context.lineTo(270, -60);
            context.lineTo(270, 0);
            context.closePath();
            context.fill();
            context.stroke();

            // Window
            context.beginPath();
            context.fillStyle = "#96ffff";
            context.moveTo(310, -70);
            context.lineTo(270, -190);
            context.lineTo(210, -185);
            context.lineTo(210, -70);
            context.closePath();
            context.fill();
            context.stroke();

            // Tube
            context.beginPath();
            context.fillStyle = "#a60c0c";
            context.moveTo(180, -170);
            context.lineTo(-80, -170);
            context.lineTo(-95, -130);
            context.lineTo(-60, -130);
            context.lineTo(-60, -150);
            context.lineTo(180, -150);
            context.closePath();
            context.fill();
            context.stroke();


            // Wheels
            stack.unshift(mat3.clone(stack[0]));
            var wheel_spin = mat3.create();
            mat3.fromTranslation(wheel_spin, [50, 0]);
            mat3.rotate(wheel_spin, wheel_spin, phi);
            mat3.multiply(stack[0], stack[0], wheel_spin);
            context.beginPath();
            context.fillStyle = 'black';
            context.arc(50, 0, 50, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.arc(270, 0, 60, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.closePath();
            context.beginPath();
            context.fillStyle = "#c4c4c4";
            context.moveTo(50, 0);
            context.arc(50, 0, 25, 0, Math.PI/2);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(50, 0);
            context.arc(50, 0, 25, Math.PI, 3*Math.PI/2);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(270, 0);
            context.arc(270, 0, 35, 0, Math.PI/2);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(270, 0);
            context.arc(270, 0, 35, Math.PI, 3*Math.PI/2);
            context.closePath();
            context.fill();
            context.beginPath();
            context.fillStyle = "#5e5e5e";
            context.moveTo(50, 0);
            context.arc(50, 0, 25, 3*Math.PI/2, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(50, 0);
            context.arc(50, 0, 25, Math.PI/2, Math.PI);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(270, 0);
            context.arc(270, 0, 35, 3*Math.PI/2, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.beginPath();
            context.moveTo(270, 0);
            context.arc(270, 0, 35, Math.PI/2, Math.PI);
            context.closePath();
            context.fill();
            stack.shift();
        }

        drawBackground();

        // Draw the corn
        stack.unshift(mat3.clone(stack[0]));
        var firstCorn = mat3.create();
        mat3.fromTranslation(firstCorn, [700, 600]);
        mat3.multiply(stack[0], stack[0], firstCorn);
        setCanvasTransform(stack[0]);
        corn(false);
        stack.shift();

        stack.unshift(mat3.clone(stack[0]));
        var secondCorn = mat3.create();
        mat3.fromTranslation(secondCorn, [800, 600]);
        mat3.multiply(stack[0], stack[0], secondCorn);
        setCanvasTransform(stack[0]);
        corn(false);
        stack.shift();

        stack.unshift(mat3.clone(stack[0]));
        var thirdCorn = mat3.create();
        mat3.fromTranslation(thirdCorn, [900, 600]);
        mat3.multiply(stack[0], stack[0], thirdCorn);
        setCanvasTransform(stack[0]);
        corn(false);
        stack.shift();

        // Draw the combine
        stack.unshift(mat3.clone(stack[0]));
        var combine = mat3.create();
        mat3.fromTranslation(combine, [100, 580]);
        mat3.multiply(stack[0], stack[0], combine);
        setCanvasTransform(stack[0]);
        combine_();
        stack.shift();

        // Changes
        x = x + 0.01;
        theta = 0.2 * Math.sin(0.3 * x - 2) + 1;
        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);

    draw();
} window.onload = setup;