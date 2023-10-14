import './App.css';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className="App">
      <SingleProduct 
      price="42,99"
      product="Private Tutu-Korsett - Schwarz"
      imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"/>
    </div>
  );
}

export default App;
