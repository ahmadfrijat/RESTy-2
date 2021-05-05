/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactJson from 'react-json-view';
// import JSONPretty from 'react-json-prettify';
import { If, Then, Else } from '../if';
import './results.scss';

function Results (props){
  // console.log(props.result);
  return (
    <>
    {/* <If condition={props.response.Headers}> */}
    {/* <p className='p'></p> */}
    {/* <JSONPretty json={props.response} /> */}
    <If condition={!props.loading}>
          <Then>
          <ReactJson id= "output" src={props.result}  /> 
          </Then>
          <Else>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />
          </Else>
        </If>
        {/* <ReactJson src= {props.response} /> */}
        {/* <pre>{JSON.stringify(props.response, null, 2 )}</pre>; */}
        {/* </p> */}
 
    </>
  );


}
export default Results;