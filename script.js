let player = document.createElement("div");
player.innerText = "Player-1"

let iswin = false;

let div1 = document.querySelector(".grid-item-1");
let div2 = document.querySelector(".grid-item-2");
let div3 = document.querySelector(".grid-item-3");
let div4 = document.querySelector(".grid-item-4");
let div5 = document.querySelector(".grid-item-5");
let div6 = document.querySelector(".grid-item-6");
let div7 = document.querySelector(".grid-item-7");
let div8 = document.querySelector(".grid-item-8");
let div9 = document.querySelector(".grid-item-9");

// Styling grid items
let inneritems = document.querySelector(".grid-item-1");
inneritems.style.display = "flex";
inneritems.style.flexDirection = "row";
inneritems.style.justifyContent = "center";
inneritems.style.alignItems = "center";

let inneritems2 = document.querySelector(".grid-item-2");
inneritems2.style.display = "flex";
inneritems2.style.flexDirection = "row";
inneritems2.style.justifyContent = "center";
inneritems2.style.alignItems = "center";

let inneritems3 = document.querySelector(".grid-item-3");
inneritems3.style.display = "flex";
inneritems3.style.flexDirection = "row";
inneritems3.style.justifyContent = "center";
inneritems3.style.alignItems = "center";

let inneritems4 = document.querySelector(".grid-item-4");
inneritems4.style.display = "flex";
inneritems4.style.flexDirection = "row";
inneritems4.style.justifyContent = "center";
inneritems4.style.alignItems = "center";

let inneritems5 = document.querySelector(".grid-item-5");
inneritems5.style.display = "flex";
inneritems5.style.flexDirection = "row";
inneritems5.style.justifyContent = "center";
inneritems5.style.alignItems = "center";

let inneritems6 = document.querySelector(".grid-item-6");
inneritems6.style.display = "flex";
inneritems6.style.flexDirection = "row";
inneritems6.style.justifyContent = "center";
inneritems6.style.alignItems = "center";

let inneritems7 = document.querySelector(".grid-item-7");
inneritems7.style.display = "flex";
inneritems7.style.flexDirection = "row";
inneritems7.style.justifyContent = "center";
inneritems7.style.alignItems = "center";

let inneritems8 = document.querySelector(".grid-item-8");
inneritems8.style.display = "flex";
inneritems8.style.flexDirection = "row";
inneritems8.style.justifyContent = "center";
inneritems8.style.alignItems = "center";

let inneritems9 = document.querySelector(".grid-item-9");
inneritems9.style.display = "flex";
inneritems9.style.flexDirection = "row";
inneritems9.style.justifyContent = "center";
inneritems9.style.alignItems = "center";


div1.onclick = () => {
    if (iswin) return
    if (player.innerText == "Player-1" && div1.innerText == "") {
        div1.innerText = "X";
        div1.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div1.innerText == "") {
        div1.innerText = "O";
        div1.style.fontSize = "200px";
        div1.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div2.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div2.innerText == "") {
        div2.innerText = "X";
        div2.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div2.innerText == "") {
        div2.innerText = "O";
        div2.style.fontSize = "200px";
        div2.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div3.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div3.innerText == "") {
        div3.innerText = "X";
        div3.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div3.innerText == "") {
        div3.innerText = "O";
        div3.style.fontSize = "200px";
        div3.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div4.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div4.innerText == "") {
        div4.innerText = "X";
        div4.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div4.innerText == "") {
        div4.innerText = "O";
        div4.style.fontSize = "200px";
        div4.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div5.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div5.innerText == "") {
        div5.innerText = "X";
        div5.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div5.innerText == "") {
        div5.innerText = "O";
        div5.style.fontSize = "200px";
        div5.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div6.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div6.innerText == "") {
        div6.innerText = "X";
        div6.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div6.innerText == "") {
        div6.innerText = "O";
        div6.style.fontSize = "200px";
        div6.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div7.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div7.innerText == "") {
        div7.innerText = "X";
        div7.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div7.innerText == "") {
        div7.innerText = "O";
        div7.style.fontSize = "200px";
        div7.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div8.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div8.innerText == "") {
        div8.innerText = "X";
        div8.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div8.innerText == "") {
        div8.innerText = "O";
        div8.style.fontSize = "200px";
        div8.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}

div9.onclick = () => {
    if (iswin) return;
    if (player.innerText == "Player-1" && div9.innerText == "") {
        div9.innerText = "X";
        div9.style.fontSize = "200px";
        player.innerText = "Player-2";
    }
    else if (player.innerText == "Player-2" && div9.innerText == "") {
        div9.innerText = "O";
        div9.style.fontSize = "200px";
        div9.style.color = "red";
        player.innerText = "Player-1";
    }
    conditions() 
}


function conditions(){
    if (div1.innerText == "O" && div2.innerText == "O" && div4.innerText == "O") {
        alert("Winner player 2");
        iswin = true;
    }
    else if (div1.innerText == "X" && div2.innerText == "X" && div4.innerText == "X") {
        alert("Winner player 1");
        iswin = true;
    }

    if (div4.innerText == "O" && div5.innerText == "O" && div7.innerText == "O") {
        alert("Winner player 2")
        iswin = true;
    }
    else if (div4.innerText == "X" && div5.innerText == "X" && div7.innerText == "X") {
        alert("Winner player 1");
        iswin = true;
    }

    if (div1.innerText == "O" && div3.innerText == "O" && div6.innerText == "O") {
        alert("Winner player 2")
        iswin = true;
    }
    else if (div1.innerText == "X" && div3.innerText == "X" && div6.innerText == "X") {
        alert("Winner player 1");
        iswin = true;
    }
}
