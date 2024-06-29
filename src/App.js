import './App.css';
import {  Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Search from './routes/Search';
import Result from './routes/Result';
import License from './routes/License';
import Version from './routes/Version';
import Owner from './routes/Owner';
import Projects from './routes/Projects';
import ResultItemData from './routes/ResultItemData';
import TermsandServices from './routes/TermsandServices';
import Polacy from './routes/Polacy';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/license' element={<License/>}/>
          <Route path='/version' element={<Version/>}/>
          <Route path='/owner' element={<Owner/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resultitemdata' element={<ResultItemData/>}/>
          <Route path='/termsandservices' element={<TermsandServices/>}/>
          <Route path='/privacypolacy' element={<Polacy/>}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
