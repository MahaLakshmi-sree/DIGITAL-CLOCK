
 
function displayTime(){
     let dateTime = new Date()
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr>12){
        hr = hr-12
        ampm.innerHTML= 'PM'
    }
    else
        ampm.innerHTML='AM'
    document.getElementById('hours').innerHTML = hr
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec

}
setInterval(displayTime,700)
