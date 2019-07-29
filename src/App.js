import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

function App() {
  return (
      <div className="App">
        <ul className="navigation">
          <li><a href="/#">Home</a></li>
          <li><a href="/#">About</a></li>
          <li><a href="/#">Products</a></li>
          <li><a href="/#">Contact</a></li>
        </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a
          className="flexBoxes"
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flexbox Demo
        </a>
      </header>
        <div className="row grow w-100">
            <div className="col-12 bg-primary py-3">
                Header
            </div>
            <div className="col-4 bg-info py-3">
                Menu
            </div>
            <div className="main col-8 bg-warning h-100 py-3">
                <h4>Main</h4>
                <p className="mb-5">Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape 
                swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade 
                ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh 
                synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p> 
                </div>
        </div>
        <div className="row w-100">
            <div className="col-12 py-3 bg-danger">
                Footer
            </div>
        </div>
      </div>
  );
}
export default App;
