var counter = 0;

function functionSnackbarPlus(){
    var x = document.getElementById("snackbarPlus");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}

function functionSnackbarMinus(){
    var x = document.getElementById("snackbarMinus");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}


var addCallback = function() {
    counter++;
    render();
    functionSnackbarPlus();
}

var subCallback = function() {
    counter--;
    render();
    functionSnackbarMinus();
}

function render() { //odswiezanie
    document.getElementById('counter').innerHTML = counter;

}

document.getElementById('counter').innerHTML = counter;

document.getElementById('addBtn').addEventListener('click', addCallback);

document.getElementById('subBtn').addEventListener('click', subCallback);

render();

