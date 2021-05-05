import React from 'react';
// import './app.scss';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Results from './components/results/results';
import Footer from './components/footer/Footer';
import History from './components/history/history'
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      loading : false,
      result: {},
      history:[],
      fiilForm : {}
    };
  }
  handleForm = (results) => {
    this.setState({ result: results });
  };
  loading = () => {
    this.setState({ loading: !this.state.loading })
  }

  setHistory =(method,url,body)=>{
    let obj = {method,url,body};
    let history = [...this.state.history,obj];
    this.setState({
      history:history
    })
    let hisArray = JSON.stringify(this.state.history);
    localStorage.setItem('history' , hisArray );
  }
  fFormHandler = (method,url,body) =>{
    this.setState({
      fiilForm:{method,url,body}
    })
  }

  render(){
    return(
      <BrowserRouter>
         <Header/>
        <Route exact path='/'>
        <Form fiilForm={this.state.fiilForm} loading={this.loading} handler={this.handleForm} setHistory={this.setHistory} />
        <Results result={this.state.result} loading={this.state.loading}/>
        </Route>
        <Route exact path='/history'>
          

          <History fFormHandler={this.fFormHandler}/>
        </Route>
        <Route exact path='/Help' render={()=><h2>Help!!</h2>}>
        </Route>

        <Footer/>
      </BrowserRouter>
    );
  }
}
export default App;