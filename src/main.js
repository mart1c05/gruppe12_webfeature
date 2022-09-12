import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion"

scroll  (
    animate(
        ".zoom", {
            scale: [0, 2], 
            
            
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
s


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
document.querySelectorAll(".parallaxcontainer").forEach(( parallaxcontainer ) => {
    const elementderskalparallaxes = parallaxcontainer.querySelector("p");
    scroll(animate(elementderskalparallaxes, { y: [50, 500] }), {
      target: elementderskalparallaxes
    });
  });








// const scrollContainer = document.querySelector("#scroll");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

// https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/



