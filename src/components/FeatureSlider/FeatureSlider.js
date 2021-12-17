import React, { useState } from 'react'
import './FeatureSlider.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function FeatureSlider() {

    
    const [x,setX] = useState(0)

    

   

    const goLeft=()=>{
    x === 0 ? setX(-100*(features.length-1)) : setX(x + 100);
    }

    const goRight=()=>{
        x === -100 * (features.length -1) ? setX(0) : setX(x - 100);
    }

    const features=[
        {
            id:1,
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },
        
        {
            id:2,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },

        {
            id:3,
            image:"https://images.fineartamerica.com/images-medium-large-5/my-best-friend-nustin-world.jpg"
        },

        {
            id:4,
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },

        {
            id:5,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },
        {
            id:6,
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },
        
        {
            id:7,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },

        {
            id:8,
            image:"https://images.fineartamerica.com/images-medium-large-5/my-best-friend-nustin-world.jpg"
        },

        {
            id:9,
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },

        {
            id:10,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },
    ]

    return (
        <div className="carousel">

            <div className="carousel_header">
                <h6 className="carousel_title"> Special Features </h6>
                <div class="carousel_button">

                <a href="jfaksdf.dk" className="mybutton">
                  See All
                </a>

                    
                <ChevronLeftIcon  onClick={goLeft} />
               
                <ChevronRightIcon onClick={goRight} />
                

                </div>

            </div>

            <div className="carousel_body">
                <div className="carousel_items">
                   {
                       features.map((element)=>{
                           return (
                               <div className="single_item2" style={{transform:`translateX(${x}%)`}}>
                                   
                                     <img alt='alt' className="single_image2" src={element.image}  style={{width:`280px` , height:`140px` }} />
                                  
                               </div>
                           )
                       })
                   }
        
                </div>
            </div>
            
        </div>
    )
}

export default FeatureSlider
