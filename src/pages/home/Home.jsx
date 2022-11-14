import React from 'react'
import Filters from '../../components/filters/Filters';
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';
import Navbar from '../../components/navbar/Navbar';
import SectionMain from '../../components/sectionMain/SetionMain';

const Home = () => {
  return (
    <div>
      <section>
        <SectionMain/>
      </section>

      <div className="home">
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default Home