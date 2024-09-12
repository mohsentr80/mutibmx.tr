// start btn go to top 
// get the button
mybutton = document.getElementById("myBtn"); 
// when the user scroll top 60px from the top of the document . show the button 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        mybutton.style.display = "block" ;
    } else {
        mybutton.style.display = "none" ;
    }
}
// when the user clicks on the button . scroll to the top of the document
function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




