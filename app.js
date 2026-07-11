window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");
    
    if(window.scrollY>80){
    
    header.style.height="70px";
    
    header.style.background="rgba(255,255,255,.82)";
    
    }else{
    
    header.style.height="85px";
    
    header.style.background="rgba(255,255,255,.55)";
    
    }
    
    });
    window.addEventListener("scroll", () => {

        const header = document.querySelector("header");
    
        if (window.scrollY > 80) {
    
            header.style.height = "70px";
            header.style.background = "rgba(255,255,255,.82)";
    
        } else {
    
            header.style.height = "85px";
            header.style.background = "rgba(255,255,255,.55)";
    
        }
    
    });
    const searchInput = document.querySelector(".search-area input");
const cards = document.querySelectorAll(".serial-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};