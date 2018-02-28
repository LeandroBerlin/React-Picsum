import React from 'react';

//  this a functional Controller for Image - note: ES6 syntax
//  too few stuff to use a class Controller

const Image = (props) => {
  //  show us the props
  console.log(props);
  const img = props.img;

  //  conditional rendering
    if (img) {
     return( <div><p className="author"> Author: <a target="_blank" title="author's page" href={props.author_url}>{props.author}</a></p><a title="image's page" target="_blank" href={props.post_url}><img src={img} height="600" alt="Picsum API" /></a></div> )
    } else {
      return (<div />)
    }
}

export default Image;