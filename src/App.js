import { Home, About, People, NotFound, Person } from './pages';
import { Header, Footer } from './layouts';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/people" element={<People/>}>
          <Route path=":name" element={<Person/>}></Route>
        </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
