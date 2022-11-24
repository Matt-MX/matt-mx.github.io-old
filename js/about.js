
const me = document.getElementById("me")
const bg = document.getElementById("menu-background")
me.style.transition = ""
bg.style.transition = ""
document.onmousemove = (e) => {
    var x = e.clientX
    var y = e.clientY
    me.style.transform = "translateX(" + (x / window.outerWidth * 100) + "px) translateY(calc(-50% + " + (y / window.outerHeight * 100) + "px))"
    bg.style.backgroundPosition = (x / window.outerWidth * 10) + "% " + (y / window.outerHeight * 10) + "%"
}

const title = document.getElementById("title")