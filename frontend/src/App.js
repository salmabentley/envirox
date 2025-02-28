import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './components/Navbar';
import Aboutus from './Aboutus';
import Articles from './Articles';

import Runningwild from './runningwild';
import Watercrisis from './Watercrisis';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/articles' element={<Articles />}>
          </Route>
            <Route path='/articles/running-wild' element={<Runningwild />}></Route>
            <Route path='/articles/water-crisis' element={<Watercrisis />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

{/* <Router>
<div className="app">
  <Navbar></Navbar>
  <AnimatePresence mode='wait'>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <Blogdetails />
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  </AnimatePresence>
</div>
</Router> */}

export default App;
