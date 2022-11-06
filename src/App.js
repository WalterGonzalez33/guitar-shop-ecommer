import Filters from './components/filters/Filters';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import SectionMain from './components/sectionMain/SetionMain';

function App() {
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
    </div>
  );
}

export default App;
