import React from 'react';
import ReactDom from 'react-dom';
let name ='han';
function getName() {
    return 'j'
}
ReactDom.render(
    <h1 id="title" className="title" style={{color: 'red'}}>hello {name} {getName()}</h1>,
    document.getElementById('root'));