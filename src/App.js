import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (
    
    <div className="App">
       <header className="App-header2">
       <h1>Bakedaholic!</h1>
       </header>
      <img src={logo} className="App-logo" alt="logo" />
            {/* <AmplifySignOut /> */}
        <h2>Welcome back to your lovely app,Let's get started shell we?</h2>

    </div>
  );
}
export default App;
