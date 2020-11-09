//import logo from './logo.svg';
import './App.css';

/* Imports from React-Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

/* Imports from React Router */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* My components */
import Product from "./components/Product";
import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";


function App() {
  return (
    <Router>
      <div>

        <NavigationBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/basses" exact>
            <Basses />
          </Route>
          <Route path="/basses/:id">
            <Detail/>
          </Route>
          <Route path="/pianos" exact>
            <Pianos />
          </Route>
          <Route path="/pianos/:id">
            <Detail/>
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

function Products() {
  return (
    <div id="all-products">
        <Container>
          <h2 className="title-section">All products</h2>
          <Row>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
          </Row>        
      </Container>
    </div>
  )
}

function Basses() {
  return (
    <div id="basses">
      <Container>
          <h2 className="title-section">Basses</h2>
          <Row>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/bass.jpg" name="Fender" category="Basses" price="20.000"/>
          </Row>        
      </Container>
    </div>
  )
}

function Pianos() {
  return (
    <div id="pianos">
      <Container>
        <h2 className="title-section">Pianos</h2>
          <Row>            
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
            <Product images="/keys.jpg" name="Fender" category="Basses" price="20.000"/>
          </Row>        
      </Container>
    </div>
  )
}

export default App;
