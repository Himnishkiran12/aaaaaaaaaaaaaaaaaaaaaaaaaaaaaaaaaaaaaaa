var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var no = "0";

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "selfie") {
        console.log("TAKING YOUR SELFIE");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "TAKING YOUR SELFIE IN 5 SECONDS";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("one").src;
    link.href = image;
    link.click();
}
Webcam.set({
    width: 720,
    height: 500,
    img_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");


function take_snapshot() {
    Webcam.snap(function(data_uri) {
        if (no == 0) {
            document.getElementById("result").innerHTML = "<img id='selfi' src='" + data_uri + "'>";
            no = no + 1;
        }
        if (no == 1) {
            document.getElementById("result").innerHTML = "<img id='selfi1' src='" + data_uri + "'>";
            no = no + 1;
        }
        if (no == 2) {
            document.getElementById("result").innerHTML = "<img id='selfi2' src='" + data_uri + "'>";
            no = no + 1;
        }
        if (no == 3) {
            document.getElementById("result").innerHTML = "<img id='selfi3' src='" + data_uri + "'>";
            no = no + 1;
        }
        if (no == 4) {
            document.getElementById("result").innerHTML = "RESET THE WEBSITE FOR MORE PHOTOS";
        }

    });
}