function createWallInputs() {
    var walls = parseInt(document.getElementById("wallNumber").value);
    var container = document.getElementById("divContainer");
    for (var i = 0; i < walls; i++) {
        container.innerHTML += "<div>Hello</div>";
    }
    return false;
}
