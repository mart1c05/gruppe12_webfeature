import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion"

scroll (
    animate(
        ".zoom", {
            scale: [0, 2], 
            
            
        }
    )
)
inView (
    animate(
        ".overlay",
        
         {
            opacity: [0, 1, 0],
        }, 
        {
            duration: 1.5
        }, 
        

        
    )
);







// const scrollContainer = document.querySelector("#scroll");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

// https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/



