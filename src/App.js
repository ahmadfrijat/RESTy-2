import React from 'react';
// import './app.scss';
import Header from './Header.js';
import Form from './Form.js';
import Results from './results.js';
import Footer from './Footer.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {};
  }
  handleForm  = data =>{
    let Headers = {'Content-Type': 'application/json'};
    this.setState({Headers, Response:{data}});
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <Form prompt="GO!" update={this.handleForm }/>
        <Results  response={this.state}/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;