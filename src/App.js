import './App.css';
import Restaurant from './Component/Restaurant/Restaurant';
import { Routes,Route } from 'react-router-dom';
import Viewrest from './Component/Viewrest/Viewrest';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">

    <Header/>
    <Routes>
      <Route path='/' element={<Restaurant/>}/>
      <Route path='/view/:id' element={<Viewrest/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
