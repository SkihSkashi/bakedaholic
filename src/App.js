import logo from './logo.svg';
import './Home.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      {/* <Navbar collapseOnSelect bg="light" expand="md" className="Home lander h1">
          <LinkContainer to="/">
              <Navbar.Brand className="font-weight-bold text-muted">
                Home
              </Navbar.Brand>
            </LinkContainer>


          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/checkout">
              <Nav.Link>Checkout</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

          </Nav>
   
      </Navbar> */}
      <Routes />
    </div>
  );
}
export default App;
