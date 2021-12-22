document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("range")) {
        let range = document.getElementById("range");
    
    
        let init = (value) => {
        document.getElementById("value").innerHTML = value;
        document.documentElement.style.setProperty("--range", value + "%");
        }
        let updateValue = (value) => {
        document.getElementById("value").innerHTML = Math.floor(value);
        }
        let updateVar = (value) => {
        document.documentElement.style.setProperty("--deg", value * 2.95 + "%");
        document.documentElement.style.setProperty("--range", value * 3 + "%");
        // if(value >= 100) {
        //     document.documentElement.style.setProperty("--trackball", second);
        // } else {
        //     document.documentElement.style.setProperty("--trackball", base);
        // }
        
        }
    
        init(range.value);
        console.log(range.value)
        range.addEventListener("input", () => { 
        let deg = range.value * 3.6; 
        updateValue(range.value);
        updateVar(range.value);
        });

    }


})
