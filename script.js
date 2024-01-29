function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


document.querySelectorAll("#load h1").forEach(function(h){
  var clutter1 = ""
  h.textContent.split("").forEach(function(l){
    clutter1 += `<span>${l}</span>`
  })
  h.innerHTML = clutter1
})

var clutter = ""
document.querySelector("#head h1").textContent.split("").forEach(function(l){
   clutter += `<span>${l}</span>`
})
document.querySelector("#head h1").innerHTML = clutter


var tll = gsap.timeline()
tll
.to("#load h2",{
  opacity:0,
  duration:0,
  delay:2
})
.to("#load h1",{
  opacity:1,
  duration:0,
})
.to("#load h1 span",{
  y:"-100%",
  delay:1,
  stagger:{
    amount:.5
  }
},"a")
.to("#load-ig",{
  clipPath:` polygon(0 0, 99% 0, 100% 100%, 0 100%)`,
  duration:.5,
  delay:1
},"a")
.to("#load h1 span",{
  y:"-200%",
  delay:1,
  stagger:{
    amount:.5
  }
},"b")
.to("#load-ig",{
  clipPath:` polygon(100% 0, 100% 0, 100% 100%, 100% 100%)`,
  duration:.5,
  delay:1.2
},"b")
.to("#loader",{
  opacity:0
})
.from("#head h1 span",{
  y:"100%",
  duration:0.5,
  stagger:{
    amount:0.8
  }
},"c")
.from("#page1 video",{
  objectPosition:`0% 50%`,
  duration:.5,
},"c")
.from("#text h2",{
  opacity:0,
  stagger:0.2,
  onStart:function(){
   $('#text h2').textillate({ 
    in: { effect: 'fadeInUp',delay:15 },
  });
  }
},"c")




gsap.to("#page1 video",{
  transform:"scale(1)",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top top",
    scrub:2,
  }
})
 
gsap.to("#page3 .slide",{
  transform: "translateX(-50%)",
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 100%",
    scrub:1,
  }
})


var tl4 =gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top top",
    end:"top -200%",
    scrub:1,
    pin:true,
  }
})
tl4
.to("#page4 #wraper-4",{
  transform: "translateX(-60%)",
},"a")
.to(".ig2",{
  left:"10%"
},"a")

gsap.to("#page6 .slide",{
  transform: "translateX(-50%)",
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 100%",
    scrub:1,
  }
})


gsap.to("#page7 .elem2",{
  scrollTrigger:{
    trigger:"#page7 .elem2",
    scroller:"#main",
    start:"top 8%",
    end:"top -92%",
    scrub:1,
    pin:true,
  }
})


var hs = document.querySelectorAll("#footer .effect h4")
var effect = document.querySelectorAll("#footer .effect")
hs.forEach(function(h){
  var clutterf = ""
  h.textContent.split("").forEach(function(letter){
    clutterf += `<span>${letter}</span>`
  })
  h.innerHTML = clutterf
})

effect.forEach(function(e){
  e.addEventListener("mouseenter",function(){
   var one=  e.querySelectorAll(".one span")
    var two = e.querySelectorAll(".two span")

    gsap.to(two,{
      y:"100%",
      stagger:{
        amount:0.3
      },
    })

    gsap.to(one,{
      y:"100%",
      stagger:{
        amount:0.3
      },
    })

   })  
})

effect.forEach(function(e){
  e.addEventListener("mouseleave",function(){
   var one=  e.querySelectorAll(".one span")
    var two = e.querySelectorAll(".two span")

    gsap.to(two,{
      y:"0%",
      stagger:{
        amount:0.3
      },
    })

    gsap.to(one,{
      y:"0%",
      stagger:{
        amount:0.3
      },
    })
    
   })  
})