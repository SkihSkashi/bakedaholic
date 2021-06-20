import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
            {/* <AmplifySignOut /> */}
        <h2>My App Content</h2>
      </header>
    </div>
  );
}
export default withAuthenticator(App);
