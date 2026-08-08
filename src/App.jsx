import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Ser from './pages/Services'
import Home from './pages/Home'
import Loc from './pages/Location'

function App() {

  // const [location , setLocation] = useState("Hyderabad");

  return (
    <BrowserRouter>
      <>
          <NavBar />
          <br />
          <Routes>
            <Route path="/services" element={<Ser />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path='/loc' element={<Loc />} />
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default App

/*

JSX : Java Script and XML

<div id="a1"> <h1> hello </h1> </div>

js :
let d = document.createElement('div','id="a1"',document.createElement('h1','',"hello"));

jsx :
let d = '<div id="a1"> <h1> hello </h1> </div>';

 jsx :
=======
1. returns only 1 parent element , use(div or <>)
2. use className instead of class in attribute
3. write all the js code in { } inside jsx

 React :
=========
1. React functions are always written in capital letters
2. use capital letter for the varible which stores the jsx element 
3. you should close the tag without fail, no self closing tags


*/