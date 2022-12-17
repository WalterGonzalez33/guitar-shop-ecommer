import React from 'react'
import DataCarouselHome from '../../components/dataCarouselHome/DataCarouselHome';
import SectionMain from '../../components/sectionMain/SetionMain';

const Home = () => {
  return (
    <div>
      <section>
        <SectionMain/>
      </section>

      <div className="home">
        <h3 className="title-carousel">Featured Products</h3>
        <DataCarouselHome/>
      </div>
    </div>
  )
}

export default Home