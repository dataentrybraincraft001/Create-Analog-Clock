 //get references to DOM elements
 const body = document.querySelector("body"),
     hourHand = document.querySelector(".hour"),
     miniteHand = document.querySelector(".minite"),
     secondHand = document.querySelector(".second"),
     modeSwitch = document.querySelector(".mode-switch");

     if(localStorage.getItem("mode")==="Dark Mode"){
        body.classList.add("dark");
        modeSwitch.textContent = Li 
     }

     //add a click mode
     modeSwitch.addEventListener("click",()=>{
        //toggle the "dark " class on the body element
        body.classList.toggle("dark");
        const isDarkMode = body.classList.contains("dark");
        modeSwitch.textContent= isDarkMode ? "Light Mode " : "Dark Mode"
        localStorage.setItem("mode",isDarkMode ? "Dark Mode":"Light Mode ")
     })

const updateTime = () =>{
    //get current time and calculate degrees for clock hands
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        houeToDeg = (date.getHours() / 12) * 360;
    
    // Rotate the clock hands to the appropriate degree on the current time 
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    miniteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${houeToDeg}deg)`;

};



// call update to set clock hands evey scound
setInterval(updateTime,1000);


 // call updatime funtion on page loag
 updateTime();
