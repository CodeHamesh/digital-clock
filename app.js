
function indianTime() {
    return new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })
}
let hours = document.querySelector('.hours span');
let min = document.querySelector('.min span');
let sec = document.querySelector('.sec span');
let ampm = document.querySelector('.am-pm');
function time(fnc) {
    let second = fnc().slice(6,9)
    let minute = fnc().slice(3,5)
    let houres = fnc().slice(0,2)
    let am = fnc().slice(9,12).toUpperCase()
    hours.textContent = houres
    min.textContent = minute
    sec.textContent = second   
    ampm.textContent = am
}
setInterval(()=>{
 time(indianTime)
},1000)
