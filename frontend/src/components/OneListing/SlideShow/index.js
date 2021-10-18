import React from 'react';
import { Modal } from '../../../context/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory } from 'react-router-dom'
import { fetchListings } from '../../../store/listings';
import styles from './slideshow.css'          
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; 
   
function Slideshow({ showSlides, setShowSlides, images, listingId}) { 
  const dispatch = useDispatch()  
  const history = useHistory()   
  const [current, setCurrent] = useState(0); 
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null; 
  }


  const handleSubmit = async (e) => {
        e.preventDefault();
        setShowSlides(false)            
      await dispatch(fetchListings());  
      history.push(`/listings/${listingId}`)          
    }  
  
   

  return (
    <>  
      {showSlides && ( 
        <Modal classname={styles.gallery} onClose={() => setShowSlides(false)}>
          <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
        </Modal>
      )}
    </>
  );

      } 

export default Slideshow;      