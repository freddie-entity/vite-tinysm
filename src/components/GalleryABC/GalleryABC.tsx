import React from 'react';
import './GalleryABC.css';

export const GalleryABC = () => {
  return (
    <div>
      <section className='recommendation-container'>
        <div className='recommendation-cards'>
          <div className='card-head'>
            <img
              src='https://cdn.pixabay.com/photo/2020/03/12/07/55/city-4924252__340.jpg'
              alt='image'
            />
          </div>
          <div className='card-body'>
            <span className='recommendation-tag tag-teal'>Technology</span>
            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='recommendation-user'>
            <img
              src='https://www.gaste24.com/images/haberler/2019/01/hande-ercel-kimdir-nereli-kac-yasinda_b640e.jpg'
              alt=''
              width='50px'
              height='50px'
            />
            <div className='recommendation-user-info'>
              <h5>Hande Erçel</h5>
              <small>2h Ago</small>
            </div>
          </div>
        </div>

        <div className='recommendation-cards'>
          <div className='card-head'>
            <img
              src='https://cdn.pixabay.com/photo/2020/02/24/06/33/crescent-4875339__340.jpg'
              alt='image'
            />
          </div>
          <div className='card-body'>
            <span className='recommendation-tag tag-green'>Science</span>
            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='recommendation-user'>
            <img
              src='https://img.acunn.com/foto/643x390/uploads/icerikler/2019/12/04/620_400_tolga-saritas-emmy-odulleri-nde-en-iyi-kadin-oyuncu-kategorisinde-final-jurisi-olarak-yer-aldi-750x481.88405797101444_5de78dc55722b.jpg'
              alt=''
              width='50px'
              height='50px'
            />
            <div className='user-info'>
              <h5>Tolga Sarıtas</h5>
              <small>Today</small>
            </div>
          </div>
        </div>

        <div className='recommendation-cards'>
          <div className='card-head'>
            <img
              src='https://cdn.pixabay.com/photo/2020/06/15/19/49/fuchs-5303221__340.jpg'
              alt='image'
            />
          </div>
          <div className='card-body'>
            <span className='recommendation-tag tag-orange'>Profession</span>
            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='recommendation-user'>
            <img
              src='https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg'
              alt=''
              width='50px'
              height='50px'
            />
            <div className='user-info'>
              <h5>Aysel Kasani</h5>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
