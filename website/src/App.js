import { Brand,Cta,Navbar } from './components';
import {Blog,Footer,Features,Header,Possibility,WhatGPT3} from './container'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
