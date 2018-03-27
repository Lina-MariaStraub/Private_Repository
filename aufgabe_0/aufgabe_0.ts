function Textfeld(): void {
    var name: string = prompt("Hallo, wie heißt du denn?", "");
    if (name != null) {
        document.getElementById("Hallo").innerHTML = "Hey" + " " + name + "! Viel Spaß hier";
    }
}

