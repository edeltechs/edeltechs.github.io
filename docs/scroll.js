var one = 0;
var numPx;
window.onscroll = function (e) {
    numPx = window.scrollY;
    if (one == 0) {
        if (numPx > 0) {
            console.log("scrolling");

            //document.getElementById("bar").style.backgroundColor="red!important";
            document.getElementById("bar").id = "scroll";
            //  var div = document.getElementById("bar");
            //div.style.backgroundColor = "black"

            // var div = document.getElementById("bar");
            //  div.style.backgroundColor = "black"
            one = 1;
        }
    }

    if (one == 2) {
        if (numPx > 0) {
            console.log("scrolling");

            //document.getElementById("bar").style.backgroundColor="red!important";
            document.getElementById("scroll2").id = "scroll";
            //  var div = document.getElementById("bar");
            //div.style.backgroundColor = "black"

            // var div = document.getElementById("bar");
            //  div.style.backgroundColor = "black"
            one = 1;
        }
    }
    if (one == 1) {
        if (numPx == 0) {
            console.log("stop scrolling");
            document.getElementById("scroll").id = "scroll2";
            one = 2;
        }
    }


};





