(function(){
    "use strict";

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
    
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        }
    }, false);

    var showList = document.getElementById("mybutton");

    showList.addEventListener("click", newElement);
    
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var listContainer = document.getElementById("myUL");
        if (listContainer.children.length !== 0) {
            document.getElementById("title").innerHTML = "<h3>My Today's to-do List!</h3>";
            document.getElementById("title").style.textTransform = "uppercase";
            document.getElementById("title").style.textAlign = "center";
            document.getElementById("title").style.fontSize = "1.5rem";
            document.getElementById("title").style.marginBottom = "-1.5rem";
            document.getElementById("title").style.fontWeight = "bolder";
        }
        
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
    }

    var showGoal = document.getElementById("myGoal");

    showGoal.addEventListener("keypress", updateValue);

    function updateValue(e) {
        var output = document.getElementById("myGoal").value;

        if(e.key === "Enter"){
            var goalContainer = document.getElementById("main-goal-container");
            if (goalContainer.children.length === 0) {
                document.getElementById("goaltitle").innerHTML = "<h3>My main goal for today is</h3>";
                document.getElementById("goaltitle").style.textTransform = "uppercase";
                document.getElementById("goaltitle").style.textAlign = "center";
                document.getElementById("goaltitle").style.fontSize = "1.5rem";
                document.getElementById("goaltitle").style.marginBottom = "-1.5rem";
                document.getElementById("goaltitle").style.fontWeight = "bolder";
            }

            if (output === '') {
                alert("You must write something!");
            } 
            else {
                document.getElementById("main-goal-container").innerText = output;
            }

            document.getElementById("myGoal").value = ""; 
        }

        
    }
})();