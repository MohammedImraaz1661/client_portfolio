var body = document.querySelector("#main")
var h1 = document.querySelector('#Logo')
var cent = document.querySelector("#center")
var span = document.querySelector('#hit')
var btn = document.querySelector(".connect")
var main2 = document.querySelector("#main2")
var n1 = document.querySelector("#n1")
var link = document.querySelector("#link")
var bl = document.querySelector("#bl")
var br = document.querySelector("#br")
var a = document.querySelector(".lik")
var b = document.querySelector(".lie")
var bs = document.querySelector("#bs")
var t = 0

function change(){
    if(t == 0){
        bs.style.color = "black"
        a.style.color = "white"
        b.style.color = "white"
        link.style.backgroundColor = "black"
        bl.style.backgroundColor = "white"
        br.style.backgroundColor = "white"
        n1.style.backgroundColor = "white"
        n1.style.color = "black"
        main2.style.backgroundColor = "black"
        main2.style.color = "white"
        btn.style.border = "2px solid black"
        btn.style.color = "black"
        span.style.color = "black"
        cent.style.webkitTextStroke = "3px black"
        cent.style.color = "transparent"
        h1.style.fontWeight = 700;
        body.style.backgroundColor = "white"
        body.style.color = "black"
        t = 1;
        body.style.transition = '1.5s';
        n1.addEventListener("mouseover", function(){
            n1.style.backgroundColor = "black"
            n1.style.color = "white"
            n1.style.border = "2px solid white"
            n1.addEventListener("mouseleave", function(){
                n1.style.backgroundColor = "white"
                n1.style.color = "black"
            })
        })
    }
    else{
        n1.addEventListener("mouseover", function(){
            n1.style.backgroundColor = "white"
            n1.style.color = "black"
            n1.style.border = "2px solid black"
            n1.addEventListener("mouseleave", function(){
                n1.style.backgroundColor = "white"
                n1.style.color = "black"
            })
        })
        bs.style.color = "white"
        a.style.color = "black"
        b.style.color = "black"
        n1.style.border = "2px solid black"
        link.style.backgroundColor = "white"
        bl.style.backgroundColor = "black"
        br.style.backgroundColor = "black"
        // n1.style.backgroundColor = "black"
        // n1.style.color = "white"
        main2.style.backgroundColor = "white"
        main2.style.color = "black"
        btn.style.border = "2px solid white"
        btn.style.color = "white"
        cent.style.color = "white"
        h1.style.fontWeight = 200;
        body.style.backgroundColor = "black"
        body.style.color = "white"
        t = 0;
        body.style.transition = '1.5s'
    }
}
