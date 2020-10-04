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

        function drawTrunk() {
            context.beginPath();
            context.fillStyle = "#824403";
            context.lineWidth = 1;
            context.moveTo(0, 0);
            context.lineTo(10, -15);
            context.lineTo(10, -50);
            context.lineTo(40, -50);
            context.lineTo(40, -15);
            context.lineTo(50, 0);
            context.closePath();
            context.fill();
            context.stroke();
        }

        function drawTree() {

        }

        function tree() {
            drawTrunk();
            drawTree();
        }

        function drawBackground() {
            context.beginPath();
            context.fillStyle = "#2cbdf2";
            context.rect(0, 0, canvas.width, canvas.height);
            context.closePath();
            context.fill();
            context.beginPath();
            context.fillStyle = "#168f09";
            context.rect(0, 450, canvas.width, 250);
            context.closePath();
            context.fill();
        }

        drawBackground();

        var firstTree = mat3.create();
        mat3.fromTranslation(firstTree, [300, 600]);
        setCanvasTransform(firstTree);
        tree();
    }

    draw();
} window.onload = setup;