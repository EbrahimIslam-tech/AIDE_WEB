import React from 'react'
import Carousel from '../components/Carousel'
import FeatureSlider from '../components/FeatureSlider'
import MySlider from '../components/MySlider'

function homeScreen() {

    const items=[
        {
            id:1,
            title:"Title 1",
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },
        
        {
            id:2,
            title:"Title 2",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },

        {
            id:3,
            title:"Title 3",
            image:"https://images.fineartamerica.com/images-medium-large-5/my-best-friend-nustin-world.jpg"
        },

        {
            id:4,
            title:"Title 4",
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },

        {
            id:5,
            title:"Title 5",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },
        {
            id:6,
            title:"Title 6",
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },
        
        {
            id:7,
            title:"Title 7",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },

        {
            id:8,
            title:"Title 8",
            image:"https://images.fineartamerica.com/images-medium-large-5/my-best-friend-nustin-world.jpg"
        },

        {
            id:9,
            title:"Title 9",
            image:"https://i.redd.it/20sxgsvonvlz.jpg"
        },

        {
            id:10,
            title:"Title 10",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgkVK932HdVuqiaAhC4gz-nbcobkaPslmj3z6hHe-4H7OWBBWYw1AYnp8AAHi5HxP8Ts&usqp=CAU"
        },
    ]


 


    return (
        <div className="home__screen">
            <h1>This is the Home Screen....
            </h1>
            
<Carousel elements={items} width={140} height={90} title={"Top Category"} isItemTitle={true} />

<FeatureSlider/>

<Carousel elements={items} width={100} height={120} title={"Special Features"}  isItemTitle={true} />

<MySlider/>

        </div>
    )
}

export default homeScreen
