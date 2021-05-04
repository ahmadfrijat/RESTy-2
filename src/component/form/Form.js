import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:'',
    };
  }

   handelClick = async e =>{
     e.preventDefault();
     let raw = await fetch(this.state.url);
     let APIdata = await raw.json();
     this.props.apiList(this.state.url);
     this.props.update(APIdata);
   };

   callingAPI = e =>{
     let url = e.target.value;
     this.setState({url});
   };
   render(){
     return(
       <form onSubmit={this.handelClick}>
         <input type='text' className="useInput" name='url' placeholder='Type the URL  for the API' onChange={this.callingAPI} /><br/>
         <label>GET
           <input type='radio' name='GET'  required/>
         </label>
         <label>POST
           <input type='radio' name='POST' />
         </label>
         <label> PUT
           <input type='radio' name='PUT' />
         </label>
         <label>DELETE
           <input type='radio' name='DELETE' />
         </label>
         <button type='submit'>Go!</button>
       </form>
     );
   }
}


export default Form;