

window.onload = loadDate();

function loadDate () { 
    document.getElementsByClassName('copyright')[0].innerHTML = "Copyright @ "+new Date().getFullYear();
 }