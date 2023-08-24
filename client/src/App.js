import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Details from './components/Details/Details'
import Error from './components/Error/Error'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>asdas Dogs</h1> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="home/detail/:id" element={<Details />} />
        <Route path="*" element={<Error />} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
