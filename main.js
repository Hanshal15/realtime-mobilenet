function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded);

}

function modelLoaded() {
  console.log("model is loaded");
}

function draw() {
image(video, 0,0,300,300);
classifier.classify(video,gotresult);
}

function gotresult(error,results) {
 if(error) {
   console.error(error);
 }
 else{console.log("results");
      document.getElementById("obj_name").innerHTML = results[0].label;
      document.getElementById("obj_accuracy").innerHTML = results[0].confidence.toFixed(2);
}
}