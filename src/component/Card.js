import React from 'react';
import '../index.css';
const Card = props=>{
    let {imgSrc} = props.data;
    return(
        <div>
            <div class="card swiper-slide">
          <div class="image-content">
            <span class="overlay"></span>

            <div class="card-image">
              <img src={imgSrc} alt="#" class="card-img"/>
            </div>
          </div>

          <div class="card-content">
            <h2 class="name">Lorem, ipsum.</h2>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit minima natus repudiandae commodi, molestiae et quos nesciunt deleniti ullam autem, sit nihil.</p>
            <button class="button">View more</button>
          </div>
        </div>
        </div>
    );
};
export default Card;