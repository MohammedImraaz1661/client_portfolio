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
var cmm=document.querySelector("#main2 #cmm")
var ph=document.querySelector(".ph")
var ph1=document.querySelector("#ph1")
var ph2=document.querySelector("#ph2")
var ph3=document.querySelector("#ph3")
var ph4=document.querySelector("#ph4")
var marq1=document.querySelector(".marquee-content")
var marq2=document.querySelector(".marquee-content2")
let stag = document.getElementById('#stag');


var t = 0
var v = 1
var d=0
const smq = window.matchMedia("(max-width: 600px)");
if(smq.matches){
    cent.style="-webkit-text-stroke: transparent;"
    d=1
};
  



if(smq.matches){
    cent.style="-webkit-text-stroke: transparent;"
      d=1
}
else
{
    d=0
}



   


function bb(){
    if(d==1){
        ph2.style.display="block"
        ph1.style.display="none"
        ph4.style.display="none"
        ph3.style.display="none"

    }
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
    if(d==1){
        ph2.style.display="block"
        ph1.style.display="none"
        ph4.style.display="none"
        ph3.style.display="none"
        
    }
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
    if(d==1){
        ph1.style.display="block"
        ph2.style.display="none"
        ph3.style.display="none"
        ph4.style.display="none"
        
    }
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
    
    if(d==1){
        ph1.style.display="block"
        ph2.style.display="none"
        ph3.style.display="none"
        ph4.style.display="none"
        
    }
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
    if(d==1){
        ph3.style.display="block"
        ph2.style.display="none"
        ph1.style.display="none"
        ph4.style.display="none"
        
    }
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
    if(d==1){
        ph3.style.display="block"
        ph2.style.display="none"
        ph1.style.display="none"
        ph4.style.display="none"
        
    }
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
    if(d==1){
        ph4.style.display="block"
        ph2.style.display="none"
        ph1.style.display="none"
        ph3.style.display="none"
        
    }
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
    if(d==1){
        ph4.style.display="block"
        ph2.style.display="none"
        ph1.style.display="none"
        ph3.style.display="none"
        
    }
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
        stag.innerHTML+=`#contmarq:after{
   display:none;
}`
   
        if(smq.matches){
            cent.style.webkitTextStroke = "transparent"
        cent.style.color = "black"
        }
        else {
        span.style.webkitTextStroke = ".1rem #000000"
        span.style.color="transparent"
        cent.style.color = "black"
        }
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
            span.style.color="black"

        cmm.style.backgroundColor="black"
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
        stag.innerHTML+=`#contmarq:after{
            display:block;
         }`
          cmm.style.backgroundColor="white"
       
        if(smq.matches){
            cent.style.webkitTextStroke = "transparent"
        cent.style.color = "white"
        }
        else {
       span.style.webkitTextStroke = ".1rem #ffffff"
          span.style.color="transparent"
        cent.style.color = "white"
        }
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
        
         if(v==1){
            l1.style="opacity:1;color:white"
         }
       
       span.style.color="white"
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
       
        h1.style.fontWeight = 200;
        body.style.backgroundColor = "black"
        body.style.color = "white"
        t = 0;
        body.style.transition = '1.5s'
    }
}


function anime(){
    var p = gsap.timeline()
    marq1.innerHTML += marq1.innerHTML;
marq2.innerHTML += marq2.innerHTML;

var a=gsap.to(marq1, {
   x:0, 
    duration: 70,                
    ease: "linear",             
    repeat: -1                 
  });
  
 
 var b= gsap.to(marq2, {
    x: -marq2.offsetWidth / 2, 
    duration: 50,                 
    ease: "linear",             
    repeat: -1                  
  });
  
    
    marq1.addEventListener("mouseover",function(){
        a.pause()
    })
    marq1.addEventListener("mouseleave",function(){
        a.play()
    })
    marq2.addEventListener("mouseover",function(){
        b.pause()
    })
    marq2.addEventListener("mouseleave",function(){
        b.play()
    })
    
    if(d==1){
        
    p.from("#nav", {
        opacity: 0,
        y: -150,
        duration: 0.8
       
    })
    p.from("#center", {
        y: 150,
        opacity: 0,
        duration: 0.8  
    })
    p.from("#cent2", {
        y: 150,
        opacity: 0,
        duration: 0.8
    })
    p.from("#cent3 h2", {
        x: -1000,
        opacity: 0,
        duration: 1
    })
    p.from("#cent3p", {
        x: 1000,
        opacity: 0,
        duration: 1
    })
    p.from("#part", {
        x: -500,
        opacity: 0,
        duration: 1
    })
    p.from(".vary", {
        y: 500,
        opacity: 0,
        duration: 1,
        stagger:0.3
    })
    p.from("#main2 h1", {
        y: 300,
        opacity: 0,
        duration: 1
    })
    p.from("#desc", {
        y: 300,
        opacity: 0,
        duration: 1
    })
    p.from("#n1", {
        y: 300,
        opacity: 0,
        duration: 1
    }) 
    p.from("#stud", {
        y: 300,
        opacity: 0,
        duration: 1
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
else{
   
    p.from("#nav", {
        opacity: 0,
        y: -150,
        duration: 0.8
       
    })
    p.from("#center", {
        y: 150,
        opacity: 0,
        duration: 0.8  
    })
    p.from("#cent2", {
        y: 150,
        opacity: 0,
        duration: 0.8
    })
    gsap.from("#cent3 h2", {
        x: -1000,
        opacity: 0,
        duration: 1,
       scrollTrigger:{
        scroller:"body",
        trigger:"#cent3 h2",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
    gsap.from("#cent3p", {
        x: 1000,
        opacity: 0,
        duration: 1,
       scrollTrigger:{
        scroller:"body",
        trigger:"#cent3p",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
   
    p.from("#cent3p", {
     
    })
    gsap.from("#part", {
        x: -500,
        opacity: 0,
        duration: 1,
       scrollTrigger:{
        scroller:"body",
        trigger:"#part",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
    
    gsap.from(".vary ", {
        y: 500,
        opacity: 0,
        duration: 1,
        stagger:0.3,
       scrollTrigger:{
        scroller:"body",
        trigger:".vary ",
        start:"top 100%",
        end:"top 0%"
       }
       
      
    })
    
    gsap.from("#main2 h1", {
        y: 300,
        opacity: 0,
        duration: 1,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
      
    gsap.from("#desc", {
        y: 300,
        opacity: 0,
        duration: 1,
        delay:0.5,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2 h1",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
      
    gsap.from("#n1", {
        y: 300,
        opacity: 0,
        duration: 1,
        delay:1,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2 h1",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
      
    gsap.from("#stud", {
        y: 300,
        opacity: 0,
        duration: 1,
        delay:1.5,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2 h1",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    })
      
    gsap.from("#lt", {
        scale: 0.3,
        opacity: 0,
        duration: .9,
        delay:2,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2 h1",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    },"saath")
    gsap.from("#rt", {
        scale: 0.3,
        opacity: 0,
        duration: .9,
        delay:2,
       scrollTrigger:{
        scroller:"body",
        trigger:"#main2 h1",
        start:"top 60%",
        end:"top 40%"
       }
       
      
    },"saath")
 

 
    
 
  }
  
}

anime()