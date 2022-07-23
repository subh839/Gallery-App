import React, { Component } from 'react';
import './App.css';
import ImageResults from './components/imageResults/ImageResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
 
  render() {
    return (
      <MuiThemeProvider>
     <div>
      <ImageResults/>
     </div>
     </MuiThemeProvider>
    );
  }
}

export default App;