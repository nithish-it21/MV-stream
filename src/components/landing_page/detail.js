import React from "react";
// import { createRoot } from 'react-dom'
// import ReactDOM from 'react-dom'
import star from './image/star.png'
// import playcircle from './image/playcircle.png'
import pussboots from './image/slider-banner.jpg'
// import slidercontrol from './image/slidercontrol.jpg'
import './home.css'

const detail = () =>
{
    return(
        <article class="container" page-content>
            <div class="movie-detail">
            <div className="backdrop-image" style={{ backgroundImage: `url(${pussboots})` }}>
            </div>
            <figure class="poster-box movie-poster">
              <img src={pussboots} alt="Puss in Boots: The Last Wish" class="img-cover"/>
            </figure>
            <div class="detail-box">
              <div class="detail-content">
                <h1 class="heading">Puss in Boots: The Last Wish</h1>
                <div class="meta-list">
                  <div class="meta-item">
                    <img src={star} width="20" height="20" alt="rating"/>
                    <span class="span">8.4</span>
                  </div>
                  <div class="separator"></div>
                  <div class="meta-item">162m</div>
                </div>
              </div>
            </div>
            </div>



        {/* <section class="movie-list" aria-label='Upcoming Movie'>
          <div class="title-wrapper">
            <h3 class="title-large">Upcoming Movies</h3>
          </div>
          <div class="slider-list">
            <div class="slider-inner">
              <div class="movie-card">
                <figure class="poster-box card-banner">
                  <img src={slidercontrol} alt="" class="img-cover" />
                </figure>
                <h4 class="title">Puss in Boots: The Last Wish</h4>
                <div class="meta-list">
                  <div class="meta-item">
                    <img src={star} width="20" height="20" loading="lazy" alt="rating"/>
                    <span class="span">8.4</span>
                  </div>
                  <div class="card-badge">2022</div>
                </div>
  
                <a href={} class="card-btn" title='Puss in Boots: The Last Wish'></a>
              </div>
              <div class="movie-card">
                <figure class="poster-box card-banner">
                  <img src={slidercontrol} alt="" class="img-cover" />
                </figure>
                <h4 class="title">Puss in Boots: The Last Wish</h4>
                <div class="meta-list">
                  <div class="meta-item">
                    <img src={star} width="20" height="20" loading="lazy" alt="rating"/>
                    <span class="span">8.4</span>
                  </div>
                  <div class="card-badge">2022</div>
                </div>
  
                <a href={star} class="card-btn" title='Puss in Boots: The Last Wish'></a>
              </div>
              <div class="movie-card">
                <figure class="poster-box card-banner">
                  <img src={slidercontrol} alt="" class="img-cover" />
                </figure>
                <h4 class="title">Puss in Boots: The Last Wish</h4>
                <div class="meta-list">
                  <div class="meta-item">
                    <img src={star} width="20" height="20" loading="lazy" alt="rating"/>
                    <span class="span">8.4</span>
                  </div>
                  <div class="card-badge">2022</div>
                </div>
  
                <a href={star} class="card-btn" title='Puss in Boots: The Last Wish'></a>
              </div>
              <div class="movie-card">
                <figure class="poster-box card-banner">
                  <img src={slidercontrol} alt="" class="img-cover" />
                </figure>
                <h4 class="title">Puss in Boots: The Last Wish</h4>
                <div class="meta-list">
                  <div class="meta-item">
                    <img src={star} width="20" height="20" loading="lazy" alt="rating"/>
                    <span class="span">8.4</span>
                  </div>
                  <div class="card-badge">2022</div>
                </div>
  
                <a href={star} class="card-btn" title='Puss in Boots: The Last Wish'></a>
              </div>
              
            </div>
          </div>
        </section> */}
  
  
      </article>
    )
}

export default detail;