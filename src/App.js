import Filters from './components/filters/Filters';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Filters/>
        <ItemListContainer greeting="we hope you enjoy our page"/>
      </header>
    </div>
  );
}

export default App;
