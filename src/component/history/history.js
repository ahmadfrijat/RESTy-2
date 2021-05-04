import React from 'react';
import Model from '../model';
import {If, Then, Else} from '../if';
import ReactJson from 'react-json-view';
import {Route} from 'react-router-dom';

class History extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    console.log('this.props',this.props.api);
  }
  handelClick = async (e)=>{
    e.preventDefault();
    let api = e.target.value;
    let raw = await fetch(api);
    let APIdata = await raw.json();
    console.log(APIdata);
    this.setState({APIdata});
    // this.props.update(APIdata);
  }

  render(){
    return(
      <section>
        {this.props.api.map((api,i)=>{
          return(
            <>
              <li key={api}>{api}</li>
              <button key={api} value={api} onClick={this.handelClick}>Click</button>
              <div>
                <ReactJson src= {this.state.APIdata} />
              </div>
            </>
          );
        })}
      </section>
    );

  }
}

export default History;