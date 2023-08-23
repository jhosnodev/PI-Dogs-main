import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>asdas Dogs</h1> */}
      <Switch>
      <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
