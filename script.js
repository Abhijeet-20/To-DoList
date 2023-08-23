const input = document.getElementById("input");
const list = document.querySelector(".list");


var war = document.querySelector(".alert");


function addtask() {
    if (input.value === '') {
        war.innerHTML = "Please write your task first";
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        war.innerHTML = "";
    }
    input.value = "";
    savedata();
}

list.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list.innerHTML)
}

function show() {
    list.innerHTML = localStorage.getItem("data");
}
show();