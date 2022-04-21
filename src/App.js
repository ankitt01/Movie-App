import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-primary-color">
      <Router>
        <Header />
        <div className='px-4'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
