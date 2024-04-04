import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel'
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Main/>
    </div>
  );
}

export default App;