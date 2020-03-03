import React from 'react';
import ShowArea from './showArea';
import Buttons from './buttons';
import { Color } from './color';

function Combine(){
  return (
    <div>
      <Color>
        <ShowArea/>
        <Buttons/>
      </Color>
    </div>
  )
}

export default Combine;
