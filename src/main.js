import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion"

scroll  (
    animate(
        ".zoom", {
            scale: [0.5, 1], 
            
            
        }
    ),
    
)

animate (
    ".staggeranimation div",
    { opacity: [0, 1] },
    { 
        delay: stagger(0.5, { start: 1 })
    }
)


inView (".overlaytrigger", () => { 
    animate(
        ".overlay",
        
         {
            opacity: [0, 1, 0],
        }, 
        {
            duration: 2,
            
        },

        

        
    ) 
    animate(
        ".exit", 
        {
            scaleY: [1, 0],
            translateY: [0, 300]

        },
        {
            duration: 1.5,
            delay: 3
        }
    ),
    animate(
        ".picture",
        {
            opacity: [0, 1]
        },
        {
            duration: 0.5,
            delay: 4
        }

    )
  
     
    

}
)

const items = document.querySelectorAll("#horisontalliste li");
scroll(
   animate("#horisontalliste", {
     transform: ["none", `translateX(-${items.length - 1}00vw)`]
   }),
   { target: document.querySelector("#horisontalscrollsection") }
 ); 





