
var requestCount = document.querySelector("#request");
var conectionSpan = document.querySelector("#connection");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    conectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
}

function edit(){
    username.innerText = "Juanita Perez";
}
