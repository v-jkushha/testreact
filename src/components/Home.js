import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'

function Home() {
  const [appSettings, setAppSettings] = useState({});

  return (
    <div className="App">
      <Header appSettings={appSettings}></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
      </div>
    </div>
  );
}

export default Home;
