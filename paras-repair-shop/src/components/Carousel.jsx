import React, {useEffect} from 'react';
import styles from '../styles/Carousel.module.scss';
import repair from '../static/images/vehicle_repair.jpg';
import engine from '../static/images/engine.jpg';

const Carousel = () => {

        // let carousels = document.getElementsByClassName('');
        // [].foreach.call(carousels, function (c){
        // let next = c.getElementsByClassName('next')[0];
        // let prev = c.getElementsByClassName('prev')[0];
        // let bubblesContainer = c.getElementsByClassName('bubbles')[0];
        // let inner = c.getElementsByClassName('inner')[0];
        // let imgs = [{engine}, {repair}];
        // let currentImageIndex = 0;
        // let bubbles = [];
            
        // for(let i=0; i < imgs.length; i++){
        //     let b = document.createElement('span');
        //     b.classList.add('bubble');
        //     bubblesContainer.appendChild(b);
        //     bubbles.push(b);
        //     switchBubble(i);
        // }

        // function switchBubble (i) => {
        //     currentImageIndex = i;
        //     switchImg();
        // }
        // function switchImg () => {
        //     inner.style.left = -width * currentImageIndex + 'px';

        //     bubbles.forEach(function(b, i){
        //         if(i === currentImageIndex){
        //             b.classList.add('active');
        //         } else {
        //             b.classList.remove('active');
        //         }
        //     })
        // }

        // function switchNext () => {
        //     currentImageIndex++;
            
        //     if(currentImageIndex >= imgs.length){
        //         currentImageIndex = 0;
        //     }
            
        //     switchImg();
        // }

        // function switchPrev () => {
        //     currentImageIndex--;
            
        //     if(currentImageIndex >= imgs.length - 1){
        //         currentImageIndex = 0;
        //     }
            
        //     switchImg();
        // }   

        //     switchImg();
        // });

    return (
        <div className={styles.slideshow}>
            {/* <div className={styles.inner}>
                {
                    imgs.map(img => {
                        return <img src={img} key={img}></img>
                    })};
                <img src={repair} alt="vehicle being repaired"></img>
            </div> */}
            {/* <div className={styles.bubbles} onClick={}></div>
            <div className={styles.prev} onClick={}></div>
            <div className={styles.next} onClick={}></div> */}
        </div>
    )
}

export default Carousel;