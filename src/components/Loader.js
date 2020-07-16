import React from 'react';

const Loader = (props) => {
  if(props.load===true){
    return (
      <div className="ui active dimmer">
        <div className="ui large text loader">Loading</div>
        </div>
    )
  }
  else{
    return null;
  }
}

export default Loader;
