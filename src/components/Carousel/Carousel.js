import React, { useState } from 'react'
import './Carousel.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Carousel({elements,width,height,title,isItemTitle}) {

    const [x,setX] = useState(0)
    
    const goLeft=()=>{
    x === 0 ? setX(-100*(elements.length-1)) : setX(x + 100);
    }

    const goRight=()=>{
        x === -100 * (elements.length -1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="carousel">

            <div className="carousel_header">
                <h6 className="carousel_title"> {title} </h6>
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
                       elements.map((element)=>{
                           return (
                               <div className="single_item" style={{transform:`translateX(${x}%)`}}>
                                   <div className="single_image_wrapper">
                                     <img className="single_image" src={element.image} alt={element.title} style={{width:`${width}px` , height:`${height}px` }} />
                                     </div>
                                 {isItemTitle && (
                                     <div className="single_title">
                                     <p> {element.title} </p>
                                </div>
                                 )}
                               </div>
                           )
                       })
                   }
        
                </div>
            </div>
            
        </div>
    )
}

export default Carousel
