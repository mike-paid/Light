let check = 1

document.getElementById("btn").onclick = function(){
   if(check == 1){
    
    document.getElementById("btn").style.backgroundColor = "yellow"
    document.getElementById("span1").style.display ="none"
    document.getElementById("span2").style.display ="block"
    document.getElementById("light").style.display = "block"
    check = 2
   }else{
    document.getElementById("btn").style.backgroundColor = "#FFD2D2"
    document.getElementById("span1").style.display ="block"
    document.getElementById("span2").style.display ="none"
    document.getElementById("light").style.display = "none"
    check = 1
   }
}

document.getElementById("brightness").onchange = function(){
    let bright = document.getElementById("brightness").value
    if(bright <= 20){
        document.getElementById("light").style.opacity = 0.5
     } // }else if(bright >= 30 && bright < 50){
    //     document.getElementById("light").style.opacity = 2
    // }

    if(bright >= 21 && bright < 40){
        document.getElementById("light").style.opacity = 4
       }   // }else if(bright >= 50 && bright < 75){
    //     document.getElementById("light").style.opacity = 6
    // }

    if(bright >= 41 && bright < 60){
        document.getElementById("light").style.opacity = 6
     } // }else if(bright >= 50 && bright < 75){
    //     document.getElementById("light").style.opacity = 0.5
    // }

    if(bright >= 60 && bright < 75){
        document.getElementById("light").style.opacity = 8
    }// }else if(bright >= 50 && bright < 75){
    //     document.getElementById("light").style.opacity = 0.5
    // }

document.getElementById("sharp").replaceWith(bright).value
}


