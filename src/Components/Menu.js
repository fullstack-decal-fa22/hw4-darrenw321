import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          {/* TODO */}
          <Color color="red" handleClick={props.function}/>
          <Color color="orange" handleClick={props.function}/>
          <Color color="yellow" handleClick={props.function}/>
      </div>
    );
}

export default Menu;