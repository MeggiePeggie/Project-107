function startClassification()
{
    navigator.mediaDevices.getUserMedia({audion: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/v4lMmsBSM/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}