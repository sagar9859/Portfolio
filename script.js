function valueSetters(){
    gsap.set("#nav a",{ y:"-100%",opacity:0});
    // gsap.set("#home .parent .child", { y:"100%"});
    gsap.set("#home .row img", {opacity:0});

     

}

function revealToSpan(){
    document.querySelectorAll(".reveal")
   .forEach(function(elem){
   //Create Two spans
   var parent=document.createElement("span");
   var child=document.createElement("span");
   
   //parent and child both sets their respective classes
   parent.classList.add("parent");
   child.classList.add("child");


   //span parent gets child and child  gets elem details

   child.innerHTML=elem.innerHTML;
   parent.appendChild(child); 

   //elem replaces its value with parent  span

   elem.innerHTML= "";
   elem.appendChild(parent);

});
}

 function loaderAnimation(){
    var tl=gsap.timeline();

    tl
    .from("#loader .child span",{
        x:100,
        duration:1,
        stagger:.2,
        ease:Power3.easeInOut,
    
    })
    
    .to("#loader .parent .child",{
        y:"-100%",
        duration:0.5,
        ease:Circ.easeInOut,
    
    })
    .to("#loader",{
        height:0,
        duration:0.6,
        ease:Circ.easeInOut,
    })
    .to("#green",{
        height:"100%",
        top:0,
        duration:0.8,
        delay:-.8,
        ease:Circ.easeInOut,
    })
    
    .to("#green",{
        height:"0%",
        duration:1,
        delay:-.5,
        ease:Power3.easeInOut,
        onComplete:function(){
            animateHomepage();

             
        }
    });
 }


 function animateSvg(){
//    document.querySelectorAll("#Visual>g").forEach(function (e){
//     var charecter= e.childNodes[1].childNodes[1];

//     charecter.style.strokeDasharray =charecter.getTotalLength() + 'px';
//     charecter.style.strokeDashoffset =charecter.getTotalLength() + 'px';
    
//    })

//    gsap.to("#Visual>g>",{   
//         strokeDashoffset:0,
//         // strokeDasharray:0,
//         duration:2,
//         ease:Expo.easeInOut,
//         delay:2
//    });
gsap.from("g path",{
    strokeDasharray:64.68521881103516,
    duration:2,
    ease:Expo.easeInOut,
    delay:5
});
 }


 function animateHomepage(){
        

         var tl=gsap.timeline();
         tl
         .to("#nav a",{
            y:0,
            opacity:1,
            stagger:.01,
            delay:0.1,
            ease:Expo.easeInOut
         })
        // .to("#home .parent .child",{
        //     y:0,
        //     stagger:.1,
        //     duration:0.1,
        //     delay:0.3,
        //     ease:Power3.easeInOut
        //  })
        .to("#home .row img",{
            opacity:1,
            duration:0.1,
            ease:Power3.easeInOut,
            delay:-5,
            onComplete:function(){
                animateSvg();
            }

         })
 }


 revealToSpan();
 valueSetters();
 loaderAnimation();
 
 
 



