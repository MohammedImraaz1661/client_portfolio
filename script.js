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
var para = document.querySelector(".para")
var l1 = document.querySelector("#l1")
var l2 = document.querySelector("#l2")
var l3 = document.querySelector("#l3")
var l4 = document.querySelector("#l4")
var habibi = document.querySelector("#habibi")
var to = document.querySelector("#to")
var Var = document.querySelector("#variable")
var idu = document.querySelector(".idu")
var aid=document.querySelectorAll(".idu")
var list = document.querySelector(".list")
var t = 0
var v = 1


   


function bb(){
    para.innerHTML = `<p>I'm here to bring your brand to life by telling its one-of-a-kind story! With my design skills, I'll create an unforgettable visual identity that will make you stand out from the crowd. And when it comes to crafting digital experiences, I make sure they're user-friendly, because people are the heart and soul of every project I work on.</p>`
    l1.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 1; color: white;"
    habibi.style.top = "25%" 
    habibi.innerHTML = "02/"
    v=2  
    
}

function bb1(){
    para.innerHTML = `<p>I'm here to bring your brand to life by telling its one-of-a-kind story! With my design skills, I'll create an unforgettable visual identity that will make you stand out from the crowd. And when it comes to crafting digital experiences, I make sure they're user-friendly, because people are the heart and soul of every project I work on.</p>`
    l1.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 1; color: black;"
    habibi.style.top = "25%" 
    habibi.innerHTML = "02/"
    v=2
}
function aa(){
    l2.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l1.style = "opacity: 1; color: white;"
    para.innerHTML=`<p>Let's roll up our sleeves and dive deep into the exciting world of product creation! I'll take a close look at the brand, competitors, market values, and product goals to gather all the juicy details we need to make something amazing.</p>`
    habibi.style.top = "8%" 
    habibi.innerHTML = "01/"
    v = 1    
    
}
function aa1(){
    v = 1  
    l2.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l1.style = "opacity: 1; color: black;"
    para.innerHTML=`<p>Let's roll up our sleeves and dive deep into the exciting world of product creation! I'll take a close look at the brand, competitors, market values, and product goals to gather all the juicy details we need to make something amazing.</p>`
    habibi.style.top = "8%" 
    habibi.innerHTML = "01/"
    
}
function cc(){
    v = 3
    para.innerHTML=`<p>Get ready to experience the power of cutting-edge technology! With my expertise, I'll build websites and products that not only function flawlessly but also remain dependable and adaptable over time. You can trust me to keep your digital world running smoothly while you focus on what matters most to you.</p>`
    l1.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 1; color: white;"
    habibi.style.top = "45%" 
    habibi.innerHTML = "03/"
    
}
function cc1(){
    v=3
    para.innerHTML=`<p>Get ready to experience the power of cutting-edge technology! With my expertise, I'll build websites and products that not only function flawlessly but also remain dependable and adaptable over time. You can trust me to keep your digital world running smoothly while you focus on what matters most to you.</p>`
    l1.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 1; color: black;"
    habibi.style.top = "45%" 
    habibi.innerHTML = "03/"
    
}
function dd(){
    v=4
    l1.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 1; color: white;"
    para.innerHTML=`<p>Just like the world is constantly evolving, so is my design practice! I'm always pushing myself to get better and better, because I know that's what it takes to stay ahead in this fast-paced world. And when I work with businesses like yours, I bring all my latest and greatest ideas to the table to help you succeed in style.</p>`
    habibi.style.top = "65%" 
    habibi.innerHTML = "04/"
    
}
function dd1(){
    v=4
    l1.style = "opacity: 0.7; color: darkgray;"
    l3.style = "opacity: 0.7; color: darkgray;"
    l2.style = "opacity: 0.7; color: darkgray;"
    l4.style = "opacity: 1; color: black;"
    para.innerHTML=`<p>Just like the world is constantly evolving, so is my design practice! I'm always pushing myself to get better and better, because I know that's what it takes to stay ahead in this fast-paced world. And when I work with businesses like yours, I bring all my latest and greatest ideas to the table to help you succeed in style.</p>`
    habibi.style.top = "65%" 
    habibi.innerHTML = "04/"
    
}

function change(){

    if(t == 0){
   
        
        idu.style="opacity:0.7;color:darkgray;"
        if (v == 1) {
            l1.style.color = "black"
            l1.style.opacity="1"
        } else if (v == 2) {
            l2.style.color = "black"
             l2.style.opacity="1"
        }
        else if (v == 3){
             l3.style.opacity="1"
            l3.style.color = "black"
        }
        else if (v == 4){
             l4.style.opacity="1"
            l4.style.color = "black"
        }
      
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor = "black"
            btn.style.color = "white"
            btn.style.border = "2px solid white"
            btn.addEventListener("mouseleave", function(){
                btn.style.backgroundColor = "white"
                btn.style.color = "black"
                btn.style.border = "2px solid black"
            })
        })
        
        l1.addEventListener("click",function(){
            aa1()
            
        })
        l2.addEventListener("click",function(){
            bb1()
            
        })
        l3.addEventListener("click",function(){
            cc1()
            
        })
        l4.addEventListener("click",function(){
            dd1()
            
        })

      
    
        if(v!=4&v!=2&v!=3){
            l1.style.color = "black"
            l1.style.opacity="1"
            }
        Var.style.color = "white"
        to.style.color = "black"
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
        btn.style.backgroundColor = "white"
        span.style.color = "black"
        cent.style.webkitTextStroke = ".1rem black"
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
       
     
         idu.style="opacity:0.7;color:darkgray;"
        l1.addEventListener("click",function(){
        aa()
                
        })
        l2.addEventListener("click",function(){
            bb()
            
        })
        l3.addEventListener("click",function(){
            cc()
            
        })
        l4.addEventListener("click",function(){
            dd()
            
        })
      

        if (v == 1) {
            l1.style.color = "white"
              l1.style.opacity="1"
        } else if (v == 2) {
            l2.style.color = "white"
              l1.style.opacity="1"
        }
        else if (v == 3){
            l3.style.color = "white"
              l1.style.opacity="1"
        }
        else if (v == 4){
            l4.style.color = "white"
              l1.style.opacity="1"
        }
        idu.style = "opacity: 0.7;color:darkgray;"
        n1.addEventListener("mouseover", function(){
            n1.style.backgroundColor = "black"
            n1.style.color = "white"
            n1.style.border = "2px solid black"
            n1.addEventListener("mouseleave", function(){
                n1.style.backgroundColor = "white"
                n1.style.color = "black"
            })
        })
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor = "white"
            btn.style.color = "black"
            btn.addEventListener("mouseleave", function(){
                btn.style.backgroundColor = "black"
                btn.style.color = "white"
                btn.style.border = "2px solid white"
            })
        })
      
        Var.style.color = "black"
        to.style.color = "white"
        bs.style.color = "white"
        a.style.color = "black"
        b.style.color = "black"
        n1.style.border = "2px solid black"
        link.style.backgroundColor = "white"
        bl.style.backgroundColor = "black"
        br.style.backgroundColor = "black"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
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


function anime(){
    var p = gsap.timeline()
    p.from("#nav", {
        opacity: 0,
        y: -150,
        duration: 1.5
    })
    p.from("#center", {
        y: 150,
        opacity: 0,
        duration: 1.5    
    })
    p.from("#cent2", {
        y: 150,
        opacity: 0,
        duration: 1.5
    })
    p.from("#cent3 h2", {
        x: -1000,
        opacity: 0,
        duration: 1.5
    })
    p.from("#cent3p", {
        x: 1000,
        opacity: 0,
        duration: 1.5
    })
    p.from("#part", {
        x: -500,
        opacity: 0,
        duration: 1.5
    })
    p.from(".vary", {
        y: 500,
        opacity: 0,
        duration: 1.5
    })
    p.from("#main2 h1", {
        y: 300,
        opacity: 0,
        duration: 1.5
    })
    p.from("#desc", {
        y: 300,
        opacity: 0,
        duration: 1.5
    })
    p.from("#n1", {
        y: 300,
        opacity: 0,
        duration: 1.5
    })
    p.from("#stud", {
        y: 300,
        opacity: 0,
        duration: 1.5
    })
    p.from("#lt", {
        scale: 0.3,
        opacity: 0,
        duration: .9
    },"saath")
    p.from("#rt", {
        scale: 0.3,
        opacity: 0,
        duration: .9
    },"saath")
}

// anime()