import React from 'react';
import ReactJson from 'react-json-view';
// import JSONPretty from 'react-json-prettify';

import './results.scss';
function Results (props){
  if (props.response.Headers) {
    return (
      
        <p className='p'>
        {/* <JSONPretty json={props.response} /> */}
        <ReactJson src= {props.response} />
        {/* <pre>{JSON.stringify(props.response, null, 2 )}</pre>; */}
        </p>
      
    );
  }else return <section></section>;
}
export default Results;