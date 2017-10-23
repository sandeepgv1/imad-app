console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "new value";
var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick = function() {
    var interval = setInterval(moveRight, 2);
} 

/*var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('POST','http://sandeepgv1.hasura-app.io/submit-name?name=' + name, true);
request.send(JSON.stringify({username: username, password: password}));
*/