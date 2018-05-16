import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const embedcode = `<script>
    (function() {
      var cx = '011753683044135890163:7s1b_wa-fkg';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  </script>
  <gcse:search></gcse:search>`

    $('#gsearch').html(embedcode)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hari's Assistant</h1>
        </header>
        <p className="App-intro">
         Free yourself and consume what you need !

        </p>
        <div id='gsearch'>
        </div>
      </div>
    );
  }
}

export default App;
