let countdown = 30;
let counter = setInterval(() => {
    console.log(countdown);
    countdown--;
    if(countdown<0){
        clearInterval(counter);
        console.log("countdown finished");
    }
}, 1000);
