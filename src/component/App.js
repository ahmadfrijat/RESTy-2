/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Header from './header/Header.js';
import Form from './form/Form.js';
import Results from './results/results.js';
import Footer from './footer/Footer.js';
import Hisrory from './history/history.js';
import {Route} from 'react-router-dom';


class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      api : [],
    };
  }
  updateState = data =>{
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }
  apiList = url =>{
    this.setState({api: [url]});
    console.log(this.state);
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Route exact path='/'>
          <Form update={this.updateState} apiList={this.apiList} />
          <Results  response={this.state}/>
        </Route>
        <Route exact path= '/history'>
          <Hisrory update={this.updateState} api={this.state.api} />
        </Route>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;