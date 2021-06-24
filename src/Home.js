import { sign } from "jsonwebtoken";
import React from "react";
import "./Home.css";
import SignIn from "./signIn";

export default function Home() {
  return (
    
    <div className="App">
       <header className="App-header2">
       <h1>Bakedaholic!</h1>
       </header>
        <h2>Welcome back to your lovely app,Let's get started shell we?</h2>
        <SignIn/>
    </div>
  );
}
