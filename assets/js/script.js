function time() {
    const fulltime = new Date();
    const hour = String(fulltime.getHours()).padStart(2, "0");
    const min = String(fulltime.getMinutes()).padStart(2, "0");
    const sec = String(fulltime.getSeconds()).padStart(2, "0");
    let format = "A.M";
    if (hour > 12){
        format = "P.M";
    }

    let showTime = document.getElementById("time");

    showTime.innerHTML = `
    
        <p class="text-secondary mx-2">Clock:</p>
        <p>${hour}:</p>
        <p>${min}:</p>
        <p>${sec}_</p>
        <p>${format}</p>
    `
}

setInterval(time,1000);