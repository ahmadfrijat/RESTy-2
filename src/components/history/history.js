import React from 'react';
import './history.scss';
// import Model from '../model';
// import {If, Then, Else} from '../if';
// import ReactJson from 'react-json-view';
// import { render } from 'enzyme';
import { Link, NavLink } from 'react-router-dom';


const history = (props) => {
    let get = storage();

    const handleClick = e =>{
        // e.preventDefault();
        // let api = e.target.value;
        // let raw = await fetch(api);
        // let APIdata = await raw.json();
        // this.setState({APIdata});
        props.fFormHandler(get[e.target.id].method, get[e.target.id].url ,get[e.target.id].body)
    }

    if(get && get.length > 0){
        const results = get.map((value, index) => {
            return (
                <li className="li" key={index}>

                    <span className={`method ${value.method}`}>{value.method}</span>

                    <span className="url">{value.url}</span>


                     <button onClick={handleClick}><NavLink id ={index} to='/'>Re-Run</NavLink></button>
                </li>
            );
        });
        return (
            <div className="list">

                {results}

            </div>
        );
    }else{
        return(
            <div></div>
        )
    }
}


const storage = () => {
    let history = localStorage.getItem('history');
    // console.log(history);
    if (history) {
        let results = JSON.parse(history);
        // console.log(results);
        return results;
    }
}

export default history;