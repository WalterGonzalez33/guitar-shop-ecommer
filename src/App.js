import Filters from './components/filters/Filters';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Filters/>
      </header>
    </div>
  );
}

export default App;
