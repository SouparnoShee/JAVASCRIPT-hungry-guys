document.querySelector("body").addEventListener('mousemove', eyeballs);
function eyeballs() {
    var eyeball = document.querySelectorAll('.eyeball')
    eyeball.forEach(function (eyeball) {
        let x = (eyeball.getBoundingClientRect().left) + (eyeball.clientWidth / 2);
        let y = (eyeball.getBoundingClientRect().top) + (eyeball.clientHeight / 2);
        let radian = Math.atan2(Event.pageX - x, Event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eyeball.style.transform = "rotate(" + rot + "deg)"
    })
}