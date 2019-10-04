import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';
import FlexBoxes from './js/FlexDemo.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FlexBoxes />, document.getElementById('root2'));
ReactDOM.render(<FlexBoxes />, document.getElementById('root3'));
ReactDOM.render(<FlexBoxes />, document.getElementById('root4'));
ReactDOM.render(<FlexBoxes />, document.getElementById('root5'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
