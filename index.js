function loadingloaderanimation(){
    



let tl = gsap.timeline();
tl.from(" .line h1, .line-slogan h5, .line h2",{
    y : 150,
    stagger : 0.25,
    duration : 0.6,
    delaly : 0.5
})
tl.from("#line1-part1, .line h2",{
    opacity : 0,
    onStart : function(){
        let h5timer = document.querySelector("#line1-part1 h5")
        let grow = 0;
        setInterval(function(){
            if(grow < 100){
                h5timer.innerHTML = grow ++;
            }
            else {
                h5timer.innerHTML = grow;
            }
        },30)
    }
})
tl.to("#loader",{
    opacity : 0,
    duration : 0.4,
    delay : 3.5
})
tl.from("#page1",{
    y : 1600,
    opacity : 1,
    delay : 0.2,
    ease : Power4,
    duration : 0.5
})
tl.to("#loader",{
    display : "none"
})
tl.from("#nav",{
    opacity : 0
})
tl.from(".page1-content h1, .page1-content h2, #hero3",{
    y : 120,
    stagger : 0.2
})
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left : dets.x,
            top : dets.y
        })
    }) 
    Shery.makeMagnet("#nav-part2 h4"); 
}
loadingloaderanimation();
cursorAnimation();
