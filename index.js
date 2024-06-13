



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