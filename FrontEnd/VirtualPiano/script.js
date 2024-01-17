document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "KeyA":
            console.log("The 'A' key is pressed");
            break;
        case "KeyS":
            console.log("The 'S' key is pressed");
            break;
        case "KeyD":
            console.log("The 'D' key is pressed");
            break;
        case "KeyF":
            console.log("The 'F' key is pressed");
            break;
        case "KeyG":
            console.log("The 'G' key is pressed");
            break;
        case "KeyH":
            console.log("The 'H' key is pressed");
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed");
            break;
        default:
            console.warn("Warning: Unbound key pressed");
            break;
    }
});
