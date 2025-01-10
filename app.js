let hours = document.querySelector('.hours span');
let min = document.querySelector('.min span');
let sec = document.querySelector('.sec span');
let ampm = document.querySelector('.am-pm');
function time() {
    let second = new Date().getSeconds()
    let minute = new Date().getMinutes()
    let hourss = new Date().getHours()
    let am = ""
    if (hours >= 12) {
        am = "pm"
    }else{
        am = "am"
    }
    hours.textContent = hourss
    min.textContent = minute
    sec.textContent = second   
    ampm.textContent = am
}
setInterval(()=>{
 time()
},1000)
