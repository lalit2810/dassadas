Prediction_1 = ""
Prediction_2 = ""
Webcam.set({
width:350,
height:300,
image_format :'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() { 
Webcam.snap(function(data_uri) 
{ document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
 }); 
}
console.log('ml5 version:', ml5.version); 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RhBPjPWOl/model.json',modelLoaded); 
function modelLoaded() 
{ console.log('Model Loaded!'); 
}

function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "The First Prediction is " + prediction_1;
speak_data_1 = "The Second Prediction is " + prediction_2;
var utterThis = new SpeechSynthesisisUtterance(speak_data + speak_data_2);

function check()
{
    img = document.getElementById('captured_image');
    classifer.classify(img,gotresult);
}

function gotresult(error, results)
{
    if (error){

    } else {
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
       speak();
    }
    if(result[0].label == "yo ")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304";
    }
    if(result[0].label == "wow")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076";
    }
    if(result[0].label == "up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077";
    }
    if(result[0].label == "down")
    {
        document.getElementById("update_emoji").innerHTML = "&#128078";
    }

    if(result[1].label == "yo ")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304";
    }
    if(result[1].label == "wow")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076";
    }
    if(result[1].label == "up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077";
    }
    if(result[1].label == "down")
    {
        document.getElementById("update_emoji").innerHTML = "&#128078";
    }
}