let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ahmed = document.querySelector('.ahmed');
window.onscroll = function() {
    let value = scrollY

    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px'
    mountains3.style.top = value * 1.5 + 'px'
    mountains4.style.top = value * 1.3 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 3 + 'px'
    ahmed.style.fontSize = value + 'px'
    if (scrollY >= 80) {
        ahmed.style.fontSize = 80 + 'px'
        ahmed.style.position = 'fixed'
        if (scrollY >= 480) {
            ahmed.style.display = 'none'

        } else {
            ahmed.style.display = 'block'

        }
        if (scrollY >= 160) {
            document.querySelector('.main').style.background = 'linear-gradient(rgb(42 143 208), rgb(148 195 207))'
        } else {

            document.querySelector('.main').style.background = 'linear-gradient(rgb(14, 0, 15), rgb(43, 2, 59))'
        }
    }
}