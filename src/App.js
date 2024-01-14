
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Main from './component/Main';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <Home/>
      <Main/>
      <Product/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
