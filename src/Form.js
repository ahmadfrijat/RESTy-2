import React from 'react';
import './form.scss';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:'',
    };
  }

   handleSubmit = async e =>{
     e.preventDefault();
     let raw = await fetch(this.state.url);
     let data = await raw.json();
     this.props.update(data);
   };

   callingAPI = e =>{
     let url = e.target.value;
     this.setState({url});
   };
   render(){
     return(
         <main>
       <form onSubmit={this.handleSubmit}>
         <input type='text' name='url' placeholder='Enter the URL of the API' onChange={this.callingAPI} /><br/>
         <label>GET</label>
           <input type='radio' name='GET'  required/>
         <label>POST</label>
           <input type='radio' name='POST' />
         <label> PUT</label>
           <input type='radio' name='PUT' />
         <label>DELETE</label>
           <input type='radio' name='DELETE' />
         <button type='submit'>Go!</button>
       </form>
       </main>
     );
   }
}


export default Form;