import { Switch,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Shared/Home/Home';
import TaxCalculator from './Pages/TaxCalculator/TaxCalculator';


function App() {
  return (
    <div className="">
      <BrowserRouter>
       <Header/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/home">
          <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/taxcalc">
           <TaxCalculator/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
