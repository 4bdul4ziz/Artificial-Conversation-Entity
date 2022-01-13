import { Route, Switch } from "react-router-dom";

import { Brand,Cta,Navbar } from './components';
import {Blog,Footer,Features,Header,Possibility,WhatGPT3} from './container'
import {Login } from "./pages";
import './App.scss';

function App() {

  const HomePage=()=>(
      <div className="App">
        <div className='gradient__bg'>
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
  )
  
  
  return (
    <div>
      <div className='nav'>
        <Navbar/>
      </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </div>

    
  );
}

export default App;

