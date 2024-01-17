document.addEventListener("keydown", function(event) {
    let audio;

    switch (event.code) {
        case "KeyA":
            console.log("The 'A' key is pressed");
            audio = new Audio("white_keys/A.mp3");
            break;
        case "KeyS":
            console.log("The 'S' key is pressed");
            audio = new Audio("white_keys/S.mp3");
            break;
        case "KeyD":
            console.log("The 'D' key is pressed");
            audio = new Audio("white_keys/D.mp3");
            break;
        case "KeyF":
            console.log("The 'F' key is pressed");
            audio = new Audio("white_keys/F.mp3");
            break;
        case "KeyG":
            console.log("The 'G' key is pressed");
            audio = new Audio("white_keys/G.mp3");
            break;
        case "KeyH":
            console.log("The 'H' key is pressed");
            audio = new Audio("white_keys/H.mp3");
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed");
            audio = new Audio("white_keys/J.mp3");
            break;
        default:
            console.warn("Warning: Unbound key pressed");
            break;
    }

    if (audio) {
        audio.preload = "auto";
        audio.play()
            .then(() => console.log("Audio playback started successfully"))
            .catch(error => console.error("Error starting audio playback:", error));
    }
});
