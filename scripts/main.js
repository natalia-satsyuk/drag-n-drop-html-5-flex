function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(ev.target.getAttribute('value') == "1") {
        var target = ev.target;
        var par_current = document.getElementById(data).parentNode;
        var next_el = document.getElementById(data).nextSibling;
        var rem_el = target.parentNode.replaceChild(document.getElementById(data), target);
        par_current.insertBefore(rem_el, next_el);
    }

    if(ev.target == document.getElementById("div2") ||
        ev.target == document.getElementById("div3") ||
        ev.target == document.getElementById("div4")) {
        ev.target.innerHTML = "";
        ev.target.appendChild(document.getElementById(data));
    }
    if(ev.target == document.getElementById("line1")) {
        ev.target.appendChild(document.getElementById(data));
    }
    if(ev.target == document.getElementById("line2")) {
        ev.target.appendChild(document.getElementById(data));    
    }
    if(ev.target == document.getElementById("line3")) {
        ev.target.appendChild(document.getElementById(data));
    }
    if(document.getElementById("div2").innerHTML == "") {
        document.getElementById("div2").innerHTML = "Place here";
    }
    if(document.getElementById("div3").innerHTML == "") {
        document.getElementById("div3").innerHTML = "Place here";
    }
    if(document.getElementById("div4").innerHTML == "") {
        document.getElementById("div4").innerHTML = "Place here";
    }       
}