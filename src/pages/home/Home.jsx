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
        <DataCarouselHome/>
      </div>
    </div>
  )
}

export default Home