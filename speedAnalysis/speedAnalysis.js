let testText ="The quick brown fox jumps over the lazy dog.";
let startTime,endTime;
function startTest(){
    document.getElementById("inputText").value=testText;
    let userInput = document.getElementById("userInput");
    userInput.value="";
    userInput.readOnly=false;
    userInput.focus();
    document.getElementById("output").innerHTML="";
    startTime = new Date().getTime();
}
function endTest(){
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly=true;
    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;
    var TypedWords = userTypedText.split(/\s+/).filter(function(word){return word !=="";
}).length;
var wpm = 0;
if (timeElapsed !== 0 && !isNaN(TypedWords)){
    wpm = Math.round((TypedWords / timeElapsed)*60);

}
var outputDiv= document.getElementById("output");
outputDiv.innerHTML= "<h2>Typing test results:</h2>"+
"<p>Total Length: "+ userTypedText.length+
"<p> Words Typed: "+ TypedWords + "</p>"+
"<p> Time Elapsd: "+timeElapsed.toFixed(2)+"seconds</p>"+"<p> Words per minute (WPM):"+ wpm + "</p>";

}