document.getElementById("tab1").onclick = function () {
    // document.querySelector("span").classList.remove('active');
    // document.getElementById("tab1").classList.add('active'); 
    document.getElementById("body").innerHTML =  "hello";}
     
    document.getElementById("tab2").onclick = function () {
    document.querySelector("span").classList.remove('active');
    document.getElementById("tab2").classList.add('active'); 
    document.getElementById("body").innerHTML =  "hello2";}
     
           
    document.getElementById("tab3").onclick = function () {
    document.querySelector("span").classList.remove('active');
    document.getElementById("tab3").classList.add('active'); 
    document.getElementById("body").innerHTML =  "hello3";}

    // document.querySelectorAll("span").forEach(e => e.classList.remove('active'));
