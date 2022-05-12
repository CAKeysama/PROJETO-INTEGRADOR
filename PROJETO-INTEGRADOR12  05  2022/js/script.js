
    window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
    
    })


    window.onload = function(){

        var tracinho = document.getElementsByClassName("tracinho")[0];
        tracinho.style.visibility = "visible"
        
        setInterval(function(){

            if (tracinho.style.visibility == "hidden"){
                tracinho.style.visibility = "visible";
            }
            else
            if (tracinho.style.visibility == "visible"){
                tracinho.style.visibility = "hidden";
            }
            }, 500);

    }
