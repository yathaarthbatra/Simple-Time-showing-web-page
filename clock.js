    let a;
    let date;
    let time;
setInterval(() => {

    
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('displaytime').innerHTML = time + " on " + date;

}, 1000);