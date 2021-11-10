function start_class(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P1L7fB2x1M/model.json', modelloaded);
}
function modelloaded(){
    classifier.classify(gotresults);
}
function gotresults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r_rgb = Math.floor(Math.random()*255)+1;
        g_rgb = Math.floor(Math.random()*255)+1;
        b_rgb = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'I Can Hear: ' + results[0].label;
        document.getElementById("res_con").innerHTML = 'Accuracy Is: ' + (results[0].confidence*100).toFixed(2) + '%';
        document.getElementById("result_label").style.color="rgb("+r_rgb+","+g_rgb+","+b_rgb+")";
        document.getElementById("res_con").style.color="rgb("+r_rgb+","+g_rgb+","+b_rgb+")";
        
        img=document.getElementById("ali_1");

        if(results[0].label == "dog"){
            img.src = 'dog.png';
        }
        else if(results[0].label == "cat"){
            img.src = 'cat.png';
        }
        else if(results[0].label == "cow"){
            img.src = 'cow.png';
        }
        else{
            img.src = 'Ear image.png';
        }
    }
}