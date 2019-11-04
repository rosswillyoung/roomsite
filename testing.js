function createWallInputs() {
    var walls = parseInt(document.getElementById("wallNumber").value);
    var container = document.getElementById("divContainer");
    for (var i = 0; i < walls; i++) {
        container.innerHTML += "<div>Hello</div>";
    }
    return false;
}

function startCanvas() {
    myCanvas.start();
}

var myCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[10]);
    }
}
