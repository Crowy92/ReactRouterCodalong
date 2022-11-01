import { Home, About, People } from './pages';
import { Header, Footer } from './layouts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <People/>
      <Footer/>
    </div>
  );
}

export default App;
