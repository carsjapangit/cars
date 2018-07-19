import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './ButtonAppBar';
import HomeSlider from './HomeSlider';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
          <div>
           <ButtonAppBar>
            </ButtonAppBar>

            <HomeSlider>
            </HomeSlider>
              </div>

        );
    }
}

export default App;
