import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Fav from "./components/Fav/Fav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>asdas Dogs</h1> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/dog/add" component={Form} />
        <Route path="/dog/edit/:id" component={Form} />
        <Route path="/dog/:id" component={Details} />
        <Route path="/fav" component={Fav} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
