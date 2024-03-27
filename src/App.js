import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tenderform from './Tenderform';
import Menubar from './Menubar';
import Mainpage from './Mainpage';
import CompanyWork from './CompanyWork';
import WorkVerifier from './WorkVerifier';
import Contractor from './Contractor';
import Contractorfrom from './Contractorfrom';
import Check1 from './Check1';
import Check2 from './Check2';
import Check3 from './Check3';
import Work2 from './Work2';
import Legalcheck from './Legalcheck';
import About from './About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/tender' element={<Tenderform/>} />
        <Route path='/menubar' element={<Menubar/>}></Route>
        <Route path='/company' element={<CompanyWork/>}></Route>
        <Route path='workverifier' element={<WorkVerifier/>}></Route>
        <Route path ='/contractor' element={<Contractor/>}></Route>
        <Route path ='/contractorform' element={<Contractorfrom/>}></Route>
        <Route path='/phase1' element={<Check1/>}></Route>
        <Route path='/phase2' element={<Check2/>}></Route>
        <Route path='/phase3' element={<Check3/>}></Route>
        <Route path='/legalCheck' element={<Legalcheck/>}></Route>
        <Route path='/work' element={<Work2/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
