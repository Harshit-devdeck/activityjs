let count = 0;
function increaseCount(){
    count++;
  
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;//display the count in html 
}
function increaseCount(){
    count++;
    displayCount();
   checkcountvalue();
}
function checkcountvalue(){
    if(count === 10){
        alert("your insta post gained 10 follow ups"); 
    } else if (count === 20){
        alert("reached 20 follow ups");
    }
}
function increasCount(){
    count++;
    displayCount();
   checkcountvalue();
}
increaseCount();