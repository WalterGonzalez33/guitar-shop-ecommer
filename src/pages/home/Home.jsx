import React from 'react'
import DataCarouselHome from '../../components/dataCarouselHome/DataCarouselHome';
import SectionMain from '../../components/sectionMain/SetionMain';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    
  },[])
  return (
    <div className='home'>
      <section>
        <SectionMain/>
      </section>

      <div className="section-products-featured">
        <h3 className="title-carousel">Featured Products</h3>
        <DataCarouselHome/>
      </div>

      <div className="fondo-home-statick">
        <div data-aos="fade-right" className="guitar-container"></div>
        <div data-aos="fade-right" className="text-motive-container">
          <span className="text-motive">Here you will find the guitar that will maximize your passion</span>
        </div>
      </div>

      <div className="section-products-featured section-2">
        <h3 className="title-carousel">best products</h3>
        <DataCarouselHome mejores_productos={true}/>
      </div>
    </div>
  )
}

export default Home