import React from 'react';
// import { createRoot } from 'react-dom'
// import ReactDOM from 'react-dom'
import star from './image/star.png'
import playcircle from './image/playcircle.png'
import pussboots from './image/slider-banner.jpg'
import slidercontrol from './image/slidercontrol.jpg'
import detail from './detail'

import './home.css'

const home = () => {
  return (
    <article class="container" page-content>
      <section class="banner" aria-label='popular movies'>
        <div class="banner-slide">
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href="#" className="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href="" className="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href="#" className="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href="#" className="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href="#" className="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
          <div class="slider-item" slider-item>
            <img src={pussboots} alt='Puss in Boots: The Last Wish' class="img-cover" loading='eager'/>
            <div class="banner-content">
              <h2 class="heading">
                Puss in Boots: The Last Wish
              </h2>
                <div class="meta-list">
                  <div class="meta-item">2022</div>
                  <div class="meta-item card-badge"></div>
                </div>
            <p class="genre">Animation, Action, Adventure</p>
            <p class="banner-text">
            Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish and restoreschis nine lives.
            </p>
            <a href='' class="btn">
              <img src={playcircle} width="24" height="24" aria-hidden="true" alt="play circle"/>

              <span class="span">Watch Now</span>
            </a>
            </div>
          </div>
        </div>
        <div class="slider-control">
          <div class="control-inner">
            <button class="poster-box slider-item active">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>

            <button class="poster-box slider-item">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>
            <button class="poster-box slider-item">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>
            <button class="poster-box slider-item">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>
            <button class="poster-box slider-item">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>
            <button class="poster-box slider-item">
           <img src={slidercontrol} alt="Slide to Puss in Boots: The last wish" loading="lazy" draggable="false" class="img-cover"/>
            </button>

          </div>
        </div>
        </section>

      <section class="movie-list" aria-label='Upcoming Movie'>
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

              <a href={detail} class="card-btn" title='Puss in Boots: The Last Wish'></a>
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

              <a href={detail} class="card-btn" title='Puss in Boots: The Last Wish'></a>
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

              <a href={detail} class="card-btn" title='Puss in Boots: The Last Wish'></a>
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

              <a href={detail} class="card-btn" title='Puss in Boots: The Last Wish'></a>
            </div>
            
          </div>
        </div>
      </section>


    </article>
  )
}

export default home;
