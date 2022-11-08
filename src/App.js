import { useState } from 'react';
import Cards from './components/cards/Cards';
import Filters from './components/filters/Filters';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import SectionMain from './components/sectionMain/SetionMain';
import { Data } from './data/Data';

function App() {
  const [data, setData] = useState(Data)
  return (
    <div className="App">

      <div className='header'>
        <div className='container'>
          <Navbar/>
          {/* <ItemListContainer greeting="we hope you enjoy our page"/> */}
        </div>
        <Filters/>
      </div>

      <section>
        <SectionMain/>
      </section>

      <div className='container cont-card'>
        {
          data.map((e) => {
            <Cards key={e.ID} producto={e}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
