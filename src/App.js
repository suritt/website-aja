import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Activities from "./components/Activities/Activities";
import Team from "./components/Team/Team";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Us from "./components/ContactUs/ContactUs";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Developers from "./components/Developers/Developers";
import ActivityDetails from './components/Activity-Details/ActivityDetails'
import ContactUs from "./components/ContactUs/ContactUs";
import News from "./components/News/News";




function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/activities">
              <Activities />
            </Route>

            <Route exact path="/news">
              <News/>
            </Route>

            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/developers">
              <Developers/>
            </Route>
            <Route exact path="/activities/:id">
              <ActivityDetails />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
