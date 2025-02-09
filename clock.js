const myClock = document.querySelector("#clock")
const myYear = document.querySelector("#year");

function handleClock(){
    const date = new Date();
    const Hours = date.getHours().toString().padStart(2,"0");
    const Minutes = date.getMinutes().toString().padStart(2,"0");
    const Seconds = date.getSeconds().toString().padStart(2,"0");
    myYear.innerText = `${date.getFullYear()}`; // innerText를 하면 html에 써놓은 내용을 덮어 씌움
    if (Hours > 12) {
    myClock.innerText = `PM ${Hours-12}:${Minutes}:${Seconds}`;
    } else {
    myClock.innerText = `AM ${Hours}:${Minutes}:${Seconds}`;
    }
}

handleClock();
setInterval(handleClock,1000);


